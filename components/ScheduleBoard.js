"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const EVENT_TIMEZONE_OFFSET = "+07:00";
const STATUS_UPDATE_INTERVAL = 60_000;

const statusConfig = {
  upcoming: {
    label: "Akan datang",
  },
  live: {
    label: "Sedang berlangsung",
  },
  completed: {
    label: "Selesai",
  },
};

function createDateTime(date, time) {
  return new Date(`${date}T${time}:00${EVENT_TIMEZONE_OFFSET}`);
}

function getSessionStatus(date, session, now) {
  const start = createDateTime(date, session.startTime);
  const end = createDateTime(date, session.endTime);

  if (now < start) {
    return "upcoming";
  }

  if (now >= start && now < end) {
    return "live";
  }

  return "completed";
}

function formatColumnDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    timeZone: "Asia/Jakarta",
  }).format(new Date(`${date}T12:00:00+07:00`));
}

function formatFullDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(`${date}T12:00:00+07:00`));
}

function formatTime(time) {
  return time.replace(":", ".");
}

function ScheduleStatus({ status }) {
  return (
    <span className={`schedule-status schedule-status-${status}`}>
      <span className="schedule-status-dot" aria-hidden="true" />
      {statusConfig[status].label}
    </span>
  );
}

function EmptySelection() {
  return (
    <div className="schedule-detail-placeholder">
      <span className="schedule-detail-placeholder-icon" aria-hidden="true">
        ↓
      </span>

      <div>
        <h3>Pilih jadwal pada tabel</h3>
        <p>
          Klik salah satu kotak untuk melihat waktu, pertandingan, dan lokasi.
        </p>
      </div>
    </div>
  );
}

export default function ScheduleBoard({
  dates = [],
  competitions = [],
}) {
  const detailRef = useRef(null);

  const [selectedCell, setSelectedCell] = useState(null);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, STATUS_UPDATE_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  const selectedCompetition = useMemo(() => {
    if (!selectedCell) {
      return null;
    }

    return competitions.find(
      (competition) => competition.id === selectedCell.competitionId
    );
  }, [competitions, selectedCell]);

  const selectedDate = selectedCell?.date || null;

  const selectedSessions = useMemo(() => {
    if (!selectedCompetition || !selectedDate) {
      return [];
    }

    return selectedCompetition.sessions?.[selectedDate] || [];
  }, [selectedCompetition, selectedDate]);

  const selectedDateIsActive =
    selectedCompetition?.activeDates?.includes(selectedDate) || false;

  const sessionsWithStatus = useMemo(() => {
    return selectedSessions
      .map((session) => ({
        ...session,
        status: getSessionStatus(selectedDate, session, currentTime),
      }))
      .sort((first, second) => {
        const statusOrder = {
          live: 0,
          upcoming: 1,
          completed: 2,
        };

        const statusDifference =
          statusOrder[first.status] - statusOrder[second.status];

        if (statusDifference !== 0) {
          return statusDifference;
        }

        return first.startTime.localeCompare(second.startTime);
      });
  }, [currentTime, selectedDate, selectedSessions]);

  function handleCellClick(competition, date) {
    setSelectedCell({
      competitionId: competition.id,
      date,
    });

    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  }

  return (
    <div className="schedule-board">
      <div className="schedule-board-toolbar">
        <div className="schedule-legend" aria-label="Kategori jadwal">
          <span className="schedule-legend-item schedule-legend-sports">
            <i aria-hidden="true" />
            Sports
          </span>

          <span className="schedule-legend-item schedule-legend-strategic">
            <i aria-hidden="true" />
            Strategic Games
          </span>

          <span className="schedule-legend-item schedule-legend-esports">
            <i aria-hidden="true" />
            Esports
          </span>

          <span className="schedule-legend-item schedule-legend-fun">
            <i aria-hidden="true" />
            Fun Games
          </span>

          <span className="schedule-legend-item schedule-legend-grand-champion">
            <i aria-hidden="true" />
            Grand Champion
          </span>
        </div>

        <span className="schedule-scroll-hint">
          Geser tabel untuk melihat tanggal lainnya →
        </span>
      </div>

      <div className="schedule-table-card">
        <div className="schedule-table-scroll">
          <table className="schedule-table">
            <thead>
              <tr>
                <th className="schedule-name-column">
                  &nbsp;&nbsp;Cabang permainan
                </th>

                {dates.map((date) => (
                  <th className="schedule-date-column" key={date}>
                    <span>{formatColumnDate(date)}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {competitions.map((competition) => (
                <tr
                  className={`schedule-row schedule-row-${competition.theme}`}
                  key={competition.id}
                >
                  <th
                    className="schedule-name-column"
                    scope="row"
                  >
                    <span className="schedule-game-category">
                      {competition.category}
                    </span>

                    <strong>{competition.name}</strong>
                  </th>

                  {dates.map((date) => {
                    const isActive =
                      competition.activeDates?.includes(date);

                    const sessions =
                      competition.sessions?.[date] || [];

                    const isSelected =
                      selectedCell?.competitionId === competition.id &&
                      selectedCell?.date === date;

                    const hasLiveSession = sessions.some(
                      (session) =>
                        getSessionStatus(date, session, currentTime) ===
                        "live"
                    );

                    const cellClassNames = [
                      "schedule-cell",
                      isActive ? "has-schedule" : "is-empty",
                      isSelected ? "is-selected" : "",
                      hasLiveSession ? "has-live-session" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    const accessibilityLabel = isActive
                      ? `${competition.name}, ${formatFullDate(
                          date
                        )}, ${sessions.length} jadwal`
                      : `${competition.name}, ${formatFullDate(
                          date
                        )}, tidak ada jadwal`;

                    return (
                      <td key={`${competition.id}-${date}`}>
                        <button
                          type="button"
                          className={cellClassNames}
                          aria-label={accessibilityLabel}
                          aria-pressed={isSelected}
                          onClick={() =>
                            handleCellClick(competition, date)
                          }
                        >
                          {isActive && (
                            <>
                              <span
                                className="schedule-cell-fill"
                                aria-hidden="true"
                              />

                              {sessions.length > 1 && (
                                <span className="schedule-cell-count">
                                  {sessions.length}
                                </span>
                              )}

                              {hasLiveSession && (
                                <span
                                  className="schedule-cell-live-dot"
                                  aria-hidden="true"
                                />
                              )}
                            </>
                          )}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section
        className="schedule-detail-section"
        ref={detailRef}
        aria-live="polite"
      >
        <div className="schedule-detail-heading">
          <div>
            <span className="eyebrow">Jadwal terpilih</span>
            <h2>Detail jadwal</h2>
          </div>

          {selectedCompetition && selectedDate && (
            <span
              className={`schedule-selection-theme schedule-selection-theme-${selectedCompetition.theme}`}
            >
              {selectedCompetition.category}
            </span>
          )}
        </div>

        {!selectedCell && <EmptySelection />}

        {selectedCompetition && selectedDate && (
          <div
            className={`schedule-detail-panel schedule-detail-panel-${selectedCompetition.theme}`}
          >
            <div className="schedule-detail-panel-head">
              <div>
                <span className="schedule-detail-date">
                  {formatFullDate(selectedDate)}
                </span>

                <h3>{selectedCompetition.name}</h3>
              </div>

              <span className="schedule-detail-session-count">
                {selectedSessions.length > 0
                  ? `${selectedSessions.length} jadwal`
                  : "Tidak ada sesi"}
              </span>
            </div>

            {!selectedDateIsActive && (
              <div className="schedule-empty-message">
                <span
                  className="schedule-empty-icon"
                  aria-hidden="true"
                >
                  —
                </span>

                <div>
                  <h4>Tidak ada jadwal pertandingan</h4>
                  <p>
                    Tidak ada agenda untuk{" "}
                    <strong>{selectedCompetition.name}</strong> pada
                    tanggal tersebut.
                  </p>
                </div>
              </div>
            )}

            {selectedDateIsActive &&
              selectedSessions.length === 0 && (
                <div className="schedule-empty-message">
                  <span
                    className="schedule-empty-icon"
                    aria-hidden="true"
                  >
                    …
                  </span>

                  <div>
                    <h4>Jadwal rinci belum tersedia</h4>
                    <p>
                      Kegiatan dijadwalkan pada tanggal ini, tetapi
                      waktu dan detail pertandingan belum diumumkan.
                    </p>
                  </div>
                </div>
              )}

            {sessionsWithStatus.length > 0 && (
              <div className="schedule-session-list">
                {sessionsWithStatus.map((session) => (
                  <article
                    className={`schedule-session-card schedule-session-${session.status}`}
                    key={session.id}
                  >
                    <div className="schedule-session-time">
                      <strong>
                        {formatTime(session.startTime)}
                      </strong>

                      <span>
                        sampai {formatTime(session.endTime)} WIB
                      </span>
                    </div>

                    <div className="schedule-session-content">
                      <div className="schedule-session-topline">
                        <span className="schedule-session-stage">
                          {session.stage}
                        </span>

                        <ScheduleStatus status={session.status} />
                      </div>

                      <h4>{session.title}</h4>

                      <span className="schedule-session-location">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="10"
                            r="2.2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          />
                        </svg>

                        {session.location}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getGrandChampionPhaseStatus,
  hasGrandChampionPhaseResults,
} from "@/lib/grand-champion-status";

const statusMap = {
  waiting: {
    label: "Menunggu Hasil",
    className: "pending",
  },

  live: {
    label: "Sedang Berlangsung",
    className: "ongoing",
  },

  ongoing: {
    label: "Hasil Sementara",
    className: "ongoing",
  },

  final: {
    label: "Hasil Final",
    className: "completed",
  },
};

function normalizeRapidRushPlayer(player = "") {
  return player
    .trim()
    .replace(/\s+/g, " ")
    .toUpperCase();
}

function hasRapidRushSnapshotData(snapshot) {
  return Object.values(
    snapshot?.results ?? {}
  ).some(
    (rows) =>
      Array.isArray(rows) &&
      rows.length > 0
  );
}

function getRapidRushSnapshots(phase) {
  if (
    Array.isArray(phase.snapshots) &&
    phase.snapshots.length > 0
  ) {
    const now = Date.now();

    return [...phase.snapshots]
      .filter((snapshot) => {
        const cutoffTime =
          snapshot.cutoff
            ? new Date(
                snapshot.cutoff
              ).getTime()
            : null;

        const cutoffPassed =
          cutoffTime == null ||
          (!Number.isNaN(cutoffTime) &&
            cutoffTime <= now);

        return (
          cutoffPassed &&
          hasRapidRushSnapshotData(
            snapshot
          )
        );
      })
      .sort(
        (a, b) =>
          new Date(a.cutoff).getTime() -
          new Date(b.cutoff).getTime()
      );
  }

  if (phase.results) {
    return [
      {
        cutoff: null,
        results: phase.results,
      },
    ];
  }

  return [];
}

function getRankMovement(
  currentRank,
  previousRank,
  hasPreviousSnapshot
) {
  if (!hasPreviousSnapshot) {
    return null;
  }

  if (previousRank == null) {
    return {
      type: "new",
      difference: null,
    };
  }

  const difference =
    previousRank - currentRank;

  if (difference > 0) {
    return {
      type: "up",
      difference,
    };
  }

  if (difference < 0) {
    return {
      type: "down",
      difference: Math.abs(difference),
    };
  }

  return null;
}

function formatRapidRushCutoff(cutoff) {
  if (!cutoff) {
    return null;
  }

  const date = new Date(cutoff);

  if (Number.isNaN(date.getTime())) {
    return cutoff;
  }

  const dateLabel =
    new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

  const timeLabel =
    new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .format(date)
      .replace(":", ".");

  return `${dateLabel}, ${timeLabel} WIB`;
}

function RapidRushTable({
  phase,
  divisions,
}) {
  const [activeDivision, setActiveDivision] =
    useState(divisions[0]?.id);

  const snapshots =
    getRapidRushSnapshots(phase);

  const currentSnapshot =
    snapshots[snapshots.length - 1] ?? null;

  const previousSnapshot =
    snapshots.length > 1
      ? snapshots[snapshots.length - 2]
      : null;

  const rows =
    currentSnapshot?.results?.[
      activeDivision
    ] ?? [];

  const previousRows =
    previousSnapshot?.results?.[
      activeDivision
    ] ?? [];

  const previousRankMap =
    new Map(
      previousRows.map((row) => [
        normalizeRapidRushPlayer(
          row.player
        ),
        row.overallRank,
      ])
    );

  const cutoffLabel =
    formatRapidRushCutoff(
      currentSnapshot?.cutoff
    );

  return (
    <div className="grand-champion-rapid-rush">
      <div
        className="grand-champion-tabs"
        role="tablist"
        aria-label="Subdit Rapid Rush"
      >
        {divisions.map((division) => (
          <button
            key={division.id}
            type="button"
            role="tab"
            aria-selected={
              activeDivision ===
              division.id
            }
            className={`grand-champion-tab ${
              activeDivision ===
              division.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveDivision(
                division.id
              )
            }
          >
            {division.name}
          </button>
        ))}
      </div>

      {rows.length > 0 ? (
        <>
          <div className="competition-table-standard-scroll">
            <table className="competition-table-standard rapid-rush-table">
              <thead>
                <tr>
                  <th>Overall Rank</th>
                  <th>Status</th>
                  <th>Nama</th>
                  <th>Poin</th>
                </tr>
              </thead>

              <tbody>
                {[...rows]
                  .sort(
                    (a, b) =>
                      a.subditRank -
                      b.subditRank
                  )
                  .map((row) => {
                    const isEligible =
                      row.subditRank <= 20;

                    const playerKey =
                      normalizeRapidRushPlayer(
                        row.player
                      );

                    const previousRank =
                      previousRankMap.get(
                        playerKey
                      );

                    const movement =
                      getRankMovement(
                        row.overallRank,
                        previousRank,
                        Boolean(
                          previousSnapshot
                        )
                      );

                    return (
                      <tr
                        key={`${activeDivision}-${row.overallRank}-${row.player}`}
                      >
                        <td className="rapid-rush-rank">
                          <div className="rapid-rush-rank-inner">
                            <span>
                              #
                              {
                                row.overallRank
                              }
                            </span>

                            {movement?.type ===
                              "up" && (
                              <span
                                className="rapid-rush-movement up"
                                aria-label={`Naik ${movement.difference} peringkat`}
                                title={`Naik ${movement.difference} peringkat`}
                              >
                                ↑{" "}
                                {
                                  movement.difference
                                }
                              </span>
                            )}

                            {movement?.type ===
                              "down" && (
                              <span
                                className="rapid-rush-movement down"
                                aria-label={`Turun ${movement.difference} peringkat`}
                                title={`Turun ${movement.difference} peringkat`}
                              >
                                ↓{" "}
                                {
                                  movement.difference
                                }
                              </span>
                            )}

                            {movement?.type ===
                              "new" && (
                              <span
                                className="rapid-rush-movement new"
                                aria-label="Pemain baru di leaderboard"
                                title="Pemain baru di leaderboard"
                              >
                                NEW
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="rapid-rush-status-cell">
                          <span
                            className={`rapid-rush-status ${
                              isEligible
                                ? "eligible"
                                : "not-eligible"
                            }`}
                          >
                            {isEligible
                              ? "Lolos"
                              : "Gugur"}
                          </span>
                        </td>

                        <td className="rapid-rush-player">
                          <strong>
                            {
                              row.player
                            }
                          </strong>
                        </td>

                        <td className="rapid-rush-points">
                          {Number(
                            row.score
                          ).toLocaleString(
                            "id-ID"
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <p className="rapid-rush-note">
            {cutoffLabel
              ? `Data per ${cutoffLabel}`
              : "Data leaderboard Rapid Rush"}
            <span aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            Eligible: peringkat 1–20
            di masing-masing Subdit.
          </p>
        </>
      ) : (
        <p className="grand-champion-phase-empty">
          Hasil resmi tahap ini belum
          diumumkan.
        </p>
      )}
    </div>
  );
}

export default function GrandChampionLeaderboard({
  competition,
  divisions,
}) {
  const [openPhase, setOpenPhase] =
    useState(null);

    const [now, setNow] =
    useState(new Date());

    useEffect(() => {
    const interval = setInterval(
        () => setNow(new Date()),
        60 * 1000
    );

    return () =>
        clearInterval(interval);
    }, []);

  const phases =
    competition.grandChampion?.phases ?? [];

  const handleToggle = (phaseId) => {
    setOpenPhase((current) =>
      current === phaseId
        ? null
        : phaseId
    );
  };

  return (
    <div className="grand-champion-phases">
      {phases.map((phase) => {
        const isOpen =
          openPhase === phase.id;

        const scheduleStatus =
        getGrandChampionPhaseStatus(
            phase,
            now
        );

        const hasResults =
        hasGrandChampionPhaseResults(
            phase
        );

        let displayStatus =
        scheduleStatus;

        if (
        scheduleStatus === "ongoing" &&
        !hasResults
        ) {
        displayStatus = "live";
        }

        const status =
        statusMap[displayStatus] ??
        statusMap.waiting;

        return (
          <div
            className={`grand-champion-phase ${
              isOpen ? "open" : ""
            }`}
            key={phase.id}
          >
            <button
              type="button"
              className="grand-champion-phase-trigger"
              onClick={() =>
                handleToggle(phase.id)
              }
              aria-expanded={isOpen}
            >
              <span className="grand-champion-phase-info">
                <small>
                  {phase.phase}
                </small>

                <strong>
                  {phase.name}
                </strong>
              </span>

              <span className="grand-champion-phase-actions">
                <span
                  className={`result-status ${status.className}`}
                >
                  {status.label}
                </span>

                <span
                  className="grand-champion-phase-chevron"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </span>
            </button>

            {isOpen && (
              <div className="grand-champion-phase-content">
                {phase.type ===
                "rapid-rush" ? (
                  <RapidRushTable
                    phase={phase}
                    divisions={divisions}
                  />
                ) : (
                  <p className="grand-champion-phase-empty">
                    Hasil resmi tahap ini belum diumumkan.
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
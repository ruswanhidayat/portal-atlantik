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

function RapidRushTable({
  phase,
  divisions,
}) {
  const [activeDivision, setActiveDivision] =
    useState(divisions[0]?.id);

  const rows =
    phase.results?.[activeDivision] ?? [];

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
              activeDivision === division.id
            }
            className={`grand-champion-tab ${
              activeDivision === division.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveDivision(division.id)
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
                      a.subditRank - b.subditRank
                  )
                  .map((row) => {
                    const isEligible =
                      row.subditRank <= 20;

                    return (
                      <tr
                        key={`${row.overallRank}-${row.player}`}
                      >
                        <td className="rapid-rush-rank">
                          #{row.overallRank}
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
                              ? "Eligible"
                              : "Tidak Eligible"}
                          </span>
                        </td>

                        <td className="rapid-rush-player">
                          <strong>
                            {row.player}
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
            Data per 12 Agustus 2026
            <span aria-hidden="true"> · </span>
            Eligible: peringkat 1–20 di masing-masing Subdit.
          </p>
        </>
      ) : (
        <p className="grand-champion-phase-empty">
          Hasil resmi tahap ini belum diumumkan.
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
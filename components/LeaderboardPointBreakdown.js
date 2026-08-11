"use client";

import {
  useEffect,
  useId,
  useState,
} from "react";

export default function LeaderboardPointBreakdown({
  divisionName,
  rows,
  totalPoints,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="leaderboard-breakdown-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        {divisionName}
      </button>

      {isOpen && (
        <div
          className="leaderboard-breakdown-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="leaderboard-breakdown-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="leaderboard-breakdown-header">
              <div>
                <span className="leaderboard-breakdown-eyebrow">
                  Rincian poin
                </span>

                <h3 id={titleId}>
                  {divisionName}
                </h3>
              </div>

              <button
                type="button"
                className="leaderboard-breakdown-close"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Tutup rincian poin"
              >
                ×
              </button>
            </div>

            <p className="leaderboard-breakdown-description">
              Hanya menampilkan cabang
              dengan hasil final.
            </p>

            {rows.length > 0 ? (
              <>
                <div className="leaderboard-breakdown-table-wrap">
                  <table className="leaderboard-breakdown-table">
                    <thead>
                      <tr>
                        <th>Cabang</th>
                        <th>Hasil</th>
                        <th>
                          Poin Event
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {rows.map((row) => (
                        <tr
                          key={
                            row.competitionId
                          }
                        >
                          <td>
                            {
                              row.competitionName
                            }
                          </td>

                          <td>
                            {
                              row.resultLabel
                            }
                          </td>

                          <td>
                            <strong>
                              {row.points}
                            </strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="leaderboard-breakdown-total">
                  <span>
                    Total Poin
                  </span>

                  <strong>
                    {totalPoints}
                  </strong>
                </div>
              </>
            ) : (
              <p className="leaderboard-breakdown-empty">
                Belum ada hasil final
                untuk Subdit ini.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
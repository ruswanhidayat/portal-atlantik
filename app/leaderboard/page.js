import ExclusiveAccordionGroup from "@/components/ExclusiveAccordionGroup";

import {
  competitions,
  divisions,
  pointRules,
} from "@/data/leaderboard";

import {
  getCompetitionRows,
  getLeaderboard,
} from "@/lib/leaderboard";

function RankBadge({ rank }) {
  const labels = { 1: "🥇", 2: "🥈", 3: "🥉" };
  return <span className={`rank-badge rank-${rank}`}>{labels[rank] || rank}</span>;
}

function TrophyIcon() {
  return (
    <svg
      className="trophy-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8 4h8v3.5c0 3-1.7 5.5-4 5.5s-4-2.5-4-5.5V4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 6H5.5v1.5C5.5 10 7 11 9 11M16 6h2.5v1.5c0 2.5-1.5 3.5-3.5 3.5M12 13v4m-3 3h6m-5-3h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const competitionStatuses = {
  waiting: {
    label: "Menunggu Hasil",
    className: "pending",
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

function getCompetitionStatus(competition) {
  if (
    competition.status &&
    competitionStatuses[competition.status]
  ) {
    return competitionStatuses[competition.status];
  }

  const isCompleted =
    Array.isArray(competition.results) &&
    competition.results.length === divisions.length;

  return isCompleted
    ? competitionStatuses.final
    : competitionStatuses.waiting;
}

function ChessStandingsTable({ competition }) {
  const rows = competition.standings.rows
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }

      if (b.win !== a.win) {
        return b.win - a.win;
      }

      return a.lose - b.lose;
    });

  return (
    <div className="competition-table-wrap">
      <div className="table-scroll">
        <table className="leaderboard-table chess-standings-table">
          <thead>
            <tr>
              <th className="chess-subdit-column">Subdit</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th className="chess-total-column">Total Poin</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.divisionId}>
                <td className="chess-subdit-column">
                  <strong>{row.division.name}</strong>
                </td>

                <td>{row.played}</td>
                <td>{row.win}</td>
                <td>{row.lose}</td>
                <td>{row.draw}</td>

                <td className="chess-total-column">
                  <strong>{row.totalPoints}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="chess-table-note">
        <strong>P</strong>: Play
        <span aria-hidden="true">·</span>
        <strong>W</strong>: Win
        <span aria-hidden="true">·</span>
        <strong>L</strong>: Lose
        <span aria-hidden="true">·</span>
        <strong>D</strong>: Draw
      </p>
    </div>
  );
}

function MlbbStandingsTable({ competition }) {
  const rows = competition.standings.rows
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
      netGames: row.gameWin - row.gameLose,
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      if (b.matchPoint !== a.matchPoint) {
        return b.matchPoint - a.matchPoint;
      }

      if (b.matchWin !== a.matchWin) {
        return b.matchWin - a.matchWin;
      }

      if (b.netGames !== a.netGames) {
        return b.netGames - a.netGames;
      }

      return b.gameWin - a.gameWin;
    });

  return (
    <div className="competition-table-wrap">
      <div className="table-scroll">
        <table className="leaderboard-table mlbb-standings-table">
          <thead>
            <tr>
              <th className="mlbb-rank-column">Rank</th>
              <th className="mlbb-squad-column">Squad Name</th>
              <th>Match Point</th>
              <th>Match W-L</th>
              <th>Net Games</th>
              <th>Game W-L</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.divisionId}
                className={row.finalist ? "mlbb-finalist-row" : ""}
              >
                <td className="mlbb-rank-column">
                  <span
                    className={`mlbb-rank-badge ${
                      index < 2 ? "mlbb-rank-finalist" : ""
                    }`}
                  >
                    {index + 1}
                  </span>
                </td>

                <td className="mlbb-squad-column">
                  <div className="mlbb-squad">
                    <strong>{row.squadName}</strong>

                    {row.finalist && (
                      <span className="mlbb-finalist-badge">
                        <span aria-hidden="true">★</span>
                        Finalist
                      </span>
                    )}
                  </div>
                </td>

                <td className="mlbb-match-point">
                  <strong>{row.matchPoint}</strong>
                </td>

                <td>
                  <strong>{row.matchWin}W</strong>
                  <span className="mlbb-score-separator"> - </span>
                  <span>{row.matchLose}L</span>
                </td>

                <td>
                  <span
                    className={`mlbb-net-games ${
                      row.netGames > 0
                        ? "positive"
                        : row.netGames < 0
                        ? "negative"
                        : "neutral"
                    }`}
                  >
                    {row.netGames > 0 ? "+" : ""}
                    {row.netGames}
                  </span>
                </td>

                <td>
                  <strong>{row.gameWin}</strong>
                  <span className="mlbb-score-separator"> - </span>
                  <span>{row.gameLose}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableTennisStandingsTable({ competition }) {
  const rows = competition.standings.rows
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
      difference: row.pointsFor - row.pointsAgainst,
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      // Menang terbanyak
      if (b.win !== a.win) {
        return b.win - a.win;
      }

      // Jika jumlah kemenangan sama, lihat selisih poin
      if (b.difference !== a.difference) {
        return b.difference - a.difference;
      }

      // Tie-break berikutnya: poin yang dibuat
      return b.pointsFor - a.pointsFor;
    });

  return (
    <div className="competition-table-wrap">
      <div className="table-scroll">
        <table className="leaderboard-table table-tennis-standings-table">
          <thead>
            <tr>
              <th className="tt-rank-column">#</th>
              <th className="tt-team-column">Subdit</th>
              <th>Main</th>
              <th>M</th>
              <th>K</th>
              <th>Poin Buat</th>
              <th>Poin Lawan</th>
              <th>Selisih</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.divisionId}
                className={row.qualified ? "tt-qualified-row" : ""}
              >
                <td className="tt-rank-column">
                  <span className="tt-rank">{index + 1}</span>
                </td>

                <td className="tt-team-column">
                  <strong>{row.division.name}</strong>
                </td>

                <td>{row.played}</td>

                <td>
                  <strong>{row.win}</strong>
                </td>

                <td>{row.lose}</td>

                <td>
                  <strong>{row.pointsFor}</strong>
                </td>

                <td>{row.pointsAgainst}</td>

                <td>
                  <strong
                    className={
                      row.difference > 0
                        ? "tt-difference positive"
                        : row.difference < 0
                        ? "tt-difference negative"
                        : "tt-difference neutral"
                    }
                  >
                    {row.difference > 0 ? "+" : ""}
                    {row.difference}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="tt-table-note">
        <span className="tt-qualified-indicator" aria-hidden="true" />
        4 peringkat teratas lolos ke babak gugur.
      </p>
    </div>
  );
}

function CompetitionScoreTable({ competition }) {
  const rows = competition.scoreDetails
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
    }))
    .filter((row) => row.division);

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard capsa-score-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Subdit
              </th>

              <th>
                Ronde 1
              </th>

              <th>
                Ronde 2
              </th>

              <th>
                Ronde 3
              </th>

              <th>
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={row.divisionId}>
                <td className="competition-rank-column">
                  <span className="competition-rank">
                    {index + 1}
                  </span>
                </td>

                <td className="competition-name-cell">
                  <strong className="competition-name">
                    {row.division.name}
                  </strong>
                </td>

                <td>{row.round1}</td>
                <td>{row.round2}</td>
                <td>{row.round3}</td>

                <td>
                  <strong className="competition-value-strong">
                    {row.total}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Leaderboard Juara Umum | Atlantik 2026",
  description: "Klasemen juara umum dan perolehan poin seluruh cabang perlombaan Atlantik 2026.",
};

export default function LeaderboardPage() {
  const leaderboard = getLeaderboard();
  const completedCompetitions = competitions.filter((item) => item.results.length > 0).length;

  return (
    <main className="page-section leaderboard-page">
      <div className="container">
        <section className="leaderboard-hero">
          <div>
            <span className="eyebrow">Atlantik 2026</span>
            <h1>Leaderboard Juara Umum</h1>
            <p className="lead">
              Akumulasi poin lima Subdit dari seluruh cabang perlombaan. Poin dihitung otomatis berdasarkan kategori dan peringkat akhir setiap cabang.
            </p>
          </div>
          <div className="leaderboard-stat">
            <strong>{completedCompetitions}/{competitions.length}</strong>
            <span>hasil lomba masuk</span>
          </div>
        </section>

        <section className="leaderboard-section">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">Klasemen sementara</span>
              <h2>Juara Umum</h2>
            </div>
            <span className="status">Diperbarui sesuai hasil resmi</span>
          </div>

          <div className="table-card overall-table-card">
            <table className="leaderboard-table overall-table">
              <thead>
                <tr>
                  <th className="rank-column">
                    <span className="desktop-column-label">Peringkat</span>
                    <span className="mobile-column-label">#</span>
                  </th>

                  <th>Subdit</th>

                  <th className="first-place-column">
                    <span className="desktop-column-label">Juara 1</span>

                    <span
                      className="mobile-column-label trophy-column-label"
                      aria-label="Jumlah Juara 1"
                      title="Jumlah Juara 1"
                    >
                      <TrophyIcon />
                    </span>
                  </th>

                  <th className="podium-column">Podium</th>

                  <th className="points-column">
                    <span className="desktop-column-label">Total Poin</span>
                    <span className="mobile-column-label">Poin</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {leaderboard.map((division) => (
                  <tr key={division.id}>
                    <td className="rank-column">
                      <RankBadge rank={division.rank} />
                    </td>

                    <td className="division-column">
                      <strong>{division.name}</strong>
                    </td>

                    <td className="first-place-column">
                      {division.firstPlaces}
                    </td>

                    <td className="podium-column">
                      {division.podiums}
                    </td>

                    <td className="points-column">
                      <strong className="point-total">
                        {division.totalPoints}
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {completedCompetitions === 0 && (
              <p className="table-note">
                Belum ada hasil resmi yang dimasukkan. Klasemen akan terhitung
                otomatis setelah urutan juara cabang perlombaan diisi.
              </p>
            )}
          </div>
        </section>

        <section className="leaderboard-section">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">Ketentuan penilaian</span>
              <h2>Sistem Poin</h2>
            </div>
          </div>
          <div className="scoring-grid">
            {Object.entries(pointRules).map(([id, rule]) => (
              <article className="score-card" key={id}>
                <h3>{rule.label}</h3>

                <div className="score-list">
                  {rule.points.map((point, index) => (
                    <div className="score-row" key={`${id}-${index}`}>
                      <span>Ranking {index + 1}</span>

                      <strong>
                        {point} <small>poin</small>
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="leaderboard-section">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">Rincian pertandingan</span>
              <h2>Hasil per Cabang</h2>
            </div>
          </div>

          <ExclusiveAccordionGroup className="competition-list">
            {competitions.map((competition, competitionIndex) => {
              const rows = getCompetitionRows(competition)
                .filter((row) => row.rank !== null)
                .sort((a, b) => a.rank - b.rank);
              const competitionStatus = getCompetitionStatus(competition);
              
              return (
                <details
                  className={`competition-card competition-card-${competition.theme}`}
                  key={competition.id}
                  open={competitionIndex === 0}
                >
                  <summary>
                    <span>
                      <small>{pointRules[competition.scoringCategory].label}</small>
                      <strong>{competition.name}</strong>
                    </span>
                    <span
                      className={`result-status ${competitionStatus.className}`}
                    >
                      {competitionStatus.label}
                    </span>
                  </summary>

                  {competition.standings?.type === "chess" ? (
                    <ChessStandingsTable competition={competition} />
                  ) : competition.standings?.type === "mlbb" ? (
                    <MlbbStandingsTable competition={competition} />
                  ) : competition.standings?.type === "table-tennis" ? (
                    <TableTennisStandingsTable competition={competition} />
                  ) : competition.scoreDetails ? (
                    <CompetitionScoreTable competition={competition} />
                  ) : rows.length > 0 ? (
                    <div className="competition-table-standard-wrap">
                      <div className="competition-table-standard-scroll">
                        <table className="competition-table-standard domino-result-table">
                          <thead>
                            <tr>
                              <th className="competition-rank-column">
                                Peringkat
                              </th>

                              <th className="competition-name-column">
                                Subdit
                              </th>

                              <th>
                                Status/Hasil
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {rows.map((row) => (
                              <tr key={row.division.id}>
                                <td className="competition-rank-column">
                                  <span className="competition-rank">
                                    {row.rank}
                                  </span>
                                </td>

                                <td className="competition-name-cell">
                                  <strong className="competition-name">
                                    {row.division.name}
                                  </strong>
                                </td>

                                <td>
                                  <div className="domino-result-value">
                                    <strong className="competition-value-strong">
                                      {row.resultLabel}
                                    </strong>

                                    <span className="domino-result-points">
                                      {row.points} poin
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                      <p className="competition-empty">
                        Hasil resmi cabang ini belum diumumkan.
                      </p>
                    )}
                </details>
              );
            })}
          </ExclusiveAccordionGroup>
        </section>
      </div>
    </main>
  );
}

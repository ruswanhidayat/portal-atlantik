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

          <div className="table-card">
            <div className="table-scroll">
              <table className="leaderboard-table overall-table">
                <thead>
                  <tr>
                    <th>Peringkat</th>
                    <th>Subdit</th>
                    <th>Juara 1</th>
                    <th>Podium</th>
                    <th>Total Poin</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((division) => (
                    <tr key={division.id}>
                      <td><RankBadge rank={division.rank} /></td>
                      <td><strong>{division.name}</strong></td>
                      <td>{division.firstPlaces}</td>
                      <td>{division.podiums}</td>
                      <td><strong className="point-total">{division.totalPoints}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {completedCompetitions === 0 && (
              <p className="table-note">
                Belum ada hasil resmi yang dimasukkan. Klasemen akan terhitung otomatis setelah urutan juara cabang perlombaan diisi.
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
                    <span key={`${id}-${index}`}>
                      <small>Ranking {index + 1}</small>
                      <strong>{point} poin</strong>
                    </span>
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

          <div className="competition-list">
            {competitions.map((competition, competitionIndex) => {
              const rows = getCompetitionRows(competition)
                .filter((row) => row.rank !== null)
                .sort((a, b) => a.rank - b.rank);
              const isCompleted = competition.results.length === divisions.length;

              return (
                <details className={`competition-card competition-card-${competition.theme}`} key={competition.id} open={competitionIndex === 0}>
                  <summary>
                    <span>
                      <small>{pointRules[competition.scoringCategory].label}</small>
                      <strong>{competition.name}</strong>
                    </span>
                    <span className={`result-status ${isCompleted ? "completed" : "pending"}`}>
                      {isCompleted ? "Hasil tersedia" : "Menunggu hasil"}
                    </span>
                  </summary>

                  {rows.length > 0 ? (
                    <div className="table-scroll competition-table-wrap">
                      <table className="leaderboard-table compact-table">
                        <thead>
                          <tr><th>Peringkat</th><th>Subdit</th><th>Status/Hasil</th></tr>
                        </thead>
                        <tbody>
                          {rows.map((row) => (
                            <tr key={row.division.id}>
                              <td>{row.rank}</td>
                              <td><strong>{row.division.name}</strong></td>
                              <td><span className="competition-result-label">{row.resultLabel}</span><small className="competition-result-points">{row.points} poin</small></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="competition-empty">Hasil resmi cabang ini belum diumumkan.</p>
                  )}
                </details>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

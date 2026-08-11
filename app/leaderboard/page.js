import ExclusiveAccordionGroup from "@/components/ExclusiveAccordionGroup";
import GrandChampionLeaderboard from "@/components/GrandChampionLeaderboard";
import LeaderboardPointBreakdown from "@/components/LeaderboardPointBreakdown";

import {
  competitions,
  divisions,
  pointRules,
} from "@/data/leaderboard";

import {
  getCompetitionRows,
  getLeaderboard,
  getDivisionPointBreakdown,
} from "@/lib/leaderboard";

import {
  getCompetitionResultStatus,
  isCompetitionFinal,
} from "@/lib/competition-status";

import buildInfo from "@/data/build-info.json";

export const dynamic = "force-dynamic";

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

function getCompetitionStatus(
  competition,
  now
) {
  const status =
    getCompetitionResultStatus(
      competition,
      now
    );

  return competitionStatuses[status];
}

function ChessStandingsTable({ competition }) {
  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

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
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      eventPoints: eventPoints[index] ?? 0,
    }));

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard chess-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Subdit
              </th>

              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>

              <th className="chess-total-column">
                Total Poin
              </th>

              <th>
                Hasil
              </th>

              <th className="competition-event-points-column">
                Poin Event
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

                <td>{row.played}</td>
                <td>{row.win}</td>
                <td>{row.lose}</td>
                <td>{row.draw}</td>

                <td className="chess-total-column">
                  <strong className="competition-value-strong">
                    {row.totalPoints}
                  </strong>
                </td>

                <td>
                  <strong className="competition-value-strong">
                    Juara {row.rank}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {row.eventPoints}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="competition-table-note inline-note">
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
  const isFinal = competition.status === "final";

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

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
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      eventPoints: isFinal
        ? eventPoints[index] ?? 0
        : null,
    }));

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard mlbb-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Squad
              </th>

              <th>Match Point</th>
              <th>Match W-L</th>
              <th>Net Games</th>
              <th>Game W-L</th>
              <th>Hasil</th>

              <th className="competition-event-points-column">
                Poin Event
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

                <td className="competition-name-cell mlbb-name-cell">
                  <div className="competition-name-with-status mlbb-name-with-status">
                    <strong className="competition-name">
                      {row.squadName}
                    </strong>

                    {row.finalist && (
                      <span className="competition-status-badge accent">
                        Finalis
                      </span>
                    )}
                  </div>
                </td>

                <td>
                  <strong className="competition-value-strong">
                    {row.matchPoint}
                  </strong>
                </td>

                <td>
                  {row.matchWin}W - {row.matchLose}L
                </td>

                <td>
                  <span
                    className={`competition-value-badge ${
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
                  {row.gameWin} - {row.gameLose}
                </td>

                <td>
                  <strong className="competition-value-strong">
                    {isFinal ? `Juara ${row.rank}` : "-"}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {isFinal ? row.eventPoints : "-"}
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

function CsczStandingsTable({ competition }) {
  const isFinal = competition.status === "final";

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

  const rows = competition.standings.rows
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
      roundDifference:
        row.roundsWon - row.roundsLost,
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      if (b.roundDifference !== a.roundDifference) {
        return b.roundDifference - a.roundDifference;
      }

      return b.roundsWon - a.roundsWon;
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      eventPoints: isFinal
        ? eventPoints[index] ?? 0
        : null,
    }));

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard cscz-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Tim
              </th>

              <th>Match</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Poin</th>
              <th>Round Menang</th>
              <th>Round Kalah</th>
              <th>Selisih</th>
              <th>Hasil</th>

              <th className="competition-event-points-column">
                Poin Event
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.divisionId}>
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

                <td>{row.played}</td>
                <td>{row.win}</td>
                <td>{row.draw}</td>
                <td>{row.lose}</td>

                <td>
                  <strong className="competition-value-strong">
                    {row.points}
                  </strong>
                </td>

                <td>{row.roundsWon}</td>
                <td>{row.roundsLost}</td>

                <td>
                  <span
                    className={`competition-value-badge ${
                      row.roundDifference > 0
                        ? "positive"
                        : row.roundDifference < 0
                        ? "negative"
                        : "neutral"
                    }`}
                  >
                    {row.roundDifference > 0 ? "+" : ""}
                    {row.roundDifference}
                  </span>
                </td>
                <td>
                  <strong className="competition-value-strong">
                    {isFinal ? `Juara ${row.rank}` : "-"}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {isFinal ? row.eventPoints : "-"}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="competition-table-note inline-note">
        <strong>W</strong>: Win
        <span aria-hidden="true">·</span>
        <strong>D</strong>: Draw
        <span aria-hidden="true">·</span>
        <strong>L</strong>: Lose
      </p>
    </div>
  );
}

function FutsalStandingsTable({ competition }) {
  const isFinal = competition.status === "final";

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

  const hasStandingsData = competition.standings.rows.some(
    (row) => row.points !== null
  );

  const rows = competition.standings.rows
    .map((row) => ({
      ...row,

      division: divisions.find(
        (division) => division.id === row.divisionId
      ),

      goalDifference:
        row.goalsFor !== null &&
        row.goalsAgainst !== null
          ? row.goalsFor - row.goalsAgainst
          : null,
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      if (!hasStandingsData) {
        return (
          divisions.findIndex(
            (division) => division.id === a.divisionId
          ) -
          divisions.findIndex(
            (division) => division.id === b.divisionId
          )
        );
      }

      if ((b.points ?? 0) !== (a.points ?? 0)) {
        return (b.points ?? 0) - (a.points ?? 0);
      }

      if (
        (b.goalDifference ?? 0) !==
        (a.goalDifference ?? 0)
      ) {
        return (
          (b.goalDifference ?? 0) -
          (a.goalDifference ?? 0)
        );
      }

      return (b.goalsFor ?? 0) - (a.goalsFor ?? 0);
    })
    .map((row, index) => ({
      ...row,

      rank: hasStandingsData
        ? index + 1
        : null,

      eventPoints: isFinal
        ? eventPoints[index] ?? 0
        : null,
    }));

  const displayValue = (value) =>
    value === null || value === undefined
      ? "-"
      : value;

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard futsal-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Subdit
              </th>

              <th>Main</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>PTS</th>
              <th>Hasil</th>

              <th className="competition-event-points-column">
                Poin Event
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.divisionId}>
                <td className="competition-rank-column">
                  <span className="competition-rank">
                    {row.rank ?? "-"}
                  </span>
                </td>

                <td className="competition-name-cell">
                  <strong className="competition-name">
                    {row.division.name}
                  </strong>
                </td>

                <td>{displayValue(row.played)}</td>
                <td>{displayValue(row.win)}</td>
                <td>{displayValue(row.draw)}</td>
                <td>{displayValue(row.lose)}</td>
                <td>{displayValue(row.goalsFor)}</td>
                <td>{displayValue(row.goalsAgainst)}</td>

                <td>
                  {displayValue(row.goalDifference)}
                </td>

                <td>
                  <strong className="competition-value-strong">
                    {displayValue(row.points)}
                  </strong>
                </td>

                <td>
                  <strong className="competition-value-strong">
                    {isFinal
                      ? `Juara ${row.rank}`
                      : "-"}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {isFinal
                      ? row.eventPoints
                      : "-"}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="competition-table-note inline-note">
        <strong>GF</strong>: Gol Dibuat
        <span aria-hidden="true">·</span>
        <strong>GA</strong>: Gol Kebobolan
        <span aria-hidden="true">·</span>
        <strong>GD</strong>: Selisih Gol
      </p>
    </div>
  );
}

function BadmintonStandingsTable({ competition }) {
  const isFinal = competition.status === "final";

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

  const rows = competition.standings.rows
    .map((row) => ({
      ...row,
      division: divisions.find(
        (division) => division.id === row.divisionId
      ),
      difference: row.scoreFor - row.scoreAgainst,
    }))
    .filter((row) => row.division)
    .sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      if (b.difference !== a.difference) {
        return b.difference - a.difference;
      }

      return b.scoreFor - a.scoreFor;
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      eventPoints: isFinal
        ? eventPoints[index] ?? 0
        : null,
    }));

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard badminton-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Subdit
              </th>

              <th>Pts</th>
              <th>W</th>
              <th>L</th>
              <th>Partai<br />Menang</th>
              <th>Partai<br />Kalah</th>
              <th>Skor<br />Diperoleh</th>
              <th>Skor<br />Diterima</th>
              <th>Selisih</th>
              <th>Hasil</th>

              <th className="competition-event-points-column">
                Poin Event
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

                <td>{row.points}</td>
                <td>{row.win}</td>
                <td>{row.lose}</td>
                <td>{row.matchesWon}</td>
                <td>{row.matchesLost}</td>
                <td>{row.scoreFor}</td>
                <td>{row.scoreAgainst}</td>

                <td>
                  <span
                    className={`competition-value-badge ${
                      row.difference > 0
                        ? "positive"
                        : row.difference < 0
                        ? "negative"
                        : "neutral"
                    }`}
                  >
                    {row.difference > 0 ? "+" : ""}
                    {row.difference}
                  </span>
                </td>
                <td>
                  <strong className="competition-value-strong">
                    {isFinal ? `Juara ${row.rank}` : "-"}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {isFinal ? row.eventPoints : "-"}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="competition-table-note">
        Klasemen akhir menggunakan sistem 63 poin.
      </p>
    </div>
  );
}

function TableTennisStandingsTable({ competition }) {
  const isFinal = competition.status === "final";

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

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
      if (b.win !== a.win) {
        return b.win - a.win;
      }

      if (b.difference !== a.difference) {
        return b.difference - a.difference;
      }

      return b.pointsFor - a.pointsFor;
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      eventPoints: isFinal
        ? eventPoints[index] ?? 0
        : null,
    }));

  return (
    <div className="competition-table-standard-wrap">
      <div className="competition-table-standard-scroll">
        <table className="competition-table-standard table-tennis-standard-table">
          <thead>
            <tr>
              <th className="competition-rank-column">
                Peringkat
              </th>

              <th className="competition-name-column">
                Subdit
              </th>

              <th>Main</th>
              <th>M</th>
              <th>K</th>
              <th>Poin Buat</th>
              <th>Poin Lawan</th>
              <th>Selisih</th>
              <th>Hasil</th>

              <th className="competition-event-points-column">
                Poin Event
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

                <td className="competition-name-cell table-tennis-name-cell">
                  <div className="competition-name-with-status table-tennis-name-with-status">
                    <strong className="competition-name">
                      {row.division.name}
                    </strong>

                    {row.qualified && (
                      <span className="competition-status-badge accent">
                        Babak Gugur
                      </span>
                    )}
                  </div>
                </td>

                <td>{row.played}</td>
                <td>{row.win}</td>
                <td>{row.lose}</td>
                <td>{row.pointsFor}</td>
                <td>{row.pointsAgainst}</td>

                <td>
                  <span
                    className={`competition-value-badge ${
                      row.difference > 0
                        ? "positive"
                        : row.difference < 0
                        ? "negative"
                        : "neutral"
                    }`}
                  >
                    {row.difference > 0 ? "+" : ""}
                    {row.difference}
                  </span>
                </td>
                <td>
                  <strong className="competition-value-strong">
                    {isFinal ? `Juara ${row.rank}` : "-"}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {isFinal ? row.eventPoints : "-"}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="competition-table-note">
        4 peringkat teratas lolos ke babak gugur.
      </p>
    </div>
  );
}

function CompetitionScoreTable({ competition }) {
  const scoreDetails = competition.scoreDetails;

  const eventPoints =
    pointRules[competition.scoringCategory]?.points ?? [];

  const rows = scoreDetails.rows
    .map((item) => {
      const division = divisions.find(
        (divisionItem) => divisionItem.id === item.divisionId
      );

      const totalScore = item.scores.reduce(
        (total, score) => total + score,
        0
      );

      return {
        ...item,
        division,
        totalScore,
      };
    })
    .filter((item) => item.division)
    .sort((a, b) => b.totalScore - a.totalScore)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
      eventPoints: eventPoints[index] ?? 0,
    }));

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

              {scoreDetails.columns.map((column) => (
                <th key={column}>
                  {column}
                </th>
              ))}

              <th>
                Total
              </th>

              <th>
                Hasil
              </th>

              <th className="competition-event-points-column">
                Poin Event
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={row.divisionId}>
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

                {row.scores.map((score, scoreIndex) => (
                  <td key={`${row.divisionId}-${scoreIndex}`}>
                    {score}
                  </td>
                ))}

                <td>
                  <strong className="competition-value-strong">
                    {row.totalScore}
                  </strong>
                </td>

                <td>
                  <strong className="competition-value-strong">
                    Juara {row.rank}
                  </strong>
                </td>

                <td className="competition-event-points-column">
                  <strong className="competition-event-points">
                    {row.eventPoints}
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
  const now = new Date();

  const dataCutoff = buildInfo.builtAt
    ? new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
        timeZoneName: "short",
      }).format(new Date(buildInfo.builtAt))
    : null;

  const leaderboard =
    getLeaderboard(now);

  const completedCompetitions =
    competitions.filter(
      (competition) =>
        isCompetitionFinal(
          competition,
          now
        )
    ).length;

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

                  <th className="podium-column">Juara 2</th>

                  <th className="points-column">
                    <span className="desktop-column-label">Total Poin</span>
                    <span className="mobile-column-label">Poin</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {leaderboard.map((division) => {
                  const breakdown =
                    getDivisionPointBreakdown(
                      division.id,
                      now
                    );

                  return (
                    <tr key={division.id}>
                      <td className="rank-column">
                        <RankBadge
                          rank={division.rank}
                        />
                      </td>

                      <td className="division-column">
                        <LeaderboardPointBreakdown
                          divisionName={
                            division.name
                          }
                          rows={breakdown}
                          totalPoints={
                            division.totalPoints
                          }
                        />
                      </td>

                      <td className="first-place-column">
                        {division.firstPlaces}
                      </td>

                      <td className="podium-column">
                        {division.secondPlaces}
                      </td>

                      <td className="points-column">
                        <strong className="point-total">
                          {division.totalPoints}
                        </strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {completedCompetitions === 0 && (
              <p className="table-note">
                Belum ada hasil resmi yang dimasukkan. Klasemen akan terhitung
                otomatis setelah urutan juara cabang perlombaan diisi.
              </p>
            )}
          </div>

          {dataCutoff && (
            <p className="leaderboard-data-cutoff">
              Data per {dataCutoff} <br />
              Klik nama Subdit untuk melihat detail poin
            </p>
          )}
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
              const competitionStatus = getCompetitionStatus(competition, now);
              
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

                  {competition.id === "mission-grand-champion" ? (
                    <GrandChampionLeaderboard
                      competition={competition}
                      divisions={divisions}
                    />
                  ) : competition.standings?.type === "chess" ? (
                    <ChessStandingsTable competition={competition} />
                  ) : competition.standings?.type === "mlbb" ? (
                    <MlbbStandingsTable competition={competition} />
                  ) : competition.standings?.type === "cscz" ? (
                    <CsczStandingsTable competition={competition} />
                  ) : competition.standings?.type === "table-tennis" ? (
                    <TableTennisStandingsTable competition={competition} />
                  ) : competition.standings?.type === "futsal" ? (
                    <FutsalStandingsTable competition={competition} />
                  ) : competition.standings?.type === "badminton" ? (
                    <BadmintonStandingsTable competition={competition} />
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
                                Hasil
                              </th>

                              <th className="competition-event-points-column">
                                Poin Event
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
                                  <strong className="competition-value-strong">
                                    {row.resultLabel}
                                  </strong>
                                </td>

                                <td className="competition-event-points-column">
                                  <strong className="competition-event-points">
                                    {row.points}
                                  </strong>
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

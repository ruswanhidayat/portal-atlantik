import {
  competitions,
  divisions,
  pointRules,
} from "@/data/leaderboard";
import {
  isCompetitionFinal,
} from "@/lib/competition-status";

function validateCompetitionResults(competition) {
  const uniqueResults = new Set(competition.results);

  if (uniqueResults.size !== competition.results.length) {
    throw new Error(
      `Hasil ${competition.name} berisi Subdit yang sama lebih dari satu kali.`,
    );
  }

  competition.results.forEach((divisionId) => {
    if (!divisions.some((division) => division.id === divisionId)) {
      throw new Error(
        `ID Subdit "${divisionId}" pada ${competition.name} tidak ditemukan.`,
      );
    }
  });
}

export function getLeaderboard(
  now = new Date()
) {
  const totals = Object.fromEntries(
    divisions.map((division) => [
      division.id,
      {
        ...division,
        totalPoints: 0,
        firstPlaces: 0,
        secondPlaces: 0,
        completedGames: 0,
      },
    ])
  );

  competitions.forEach((competition) => {
    validateCompetitionResults(
      competition
    );

    // Results hanya dihitung ke Juara Umum
    // jika pertandingan sudah selesai
    // DAN hasil akhir sudah lengkap.
    if (
      !isCompetitionFinal(
        competition,
        now
      )
    ) {
      return;
    }

    const rule =
      pointRules[
        competition.scoringCategory
      ];

    if (!rule) {
      return;
    }

    competition.results.forEach(
      (divisionId, index) => {
        const division =
          totals[divisionId];

        if (!division) {
          return;
        }

        division.totalPoints +=
          rule.points[index] ?? 0;

        division.completedGames++;

        if (index === 0) {
          division.firstPlaces++;
        }

        if (index === 1) {
          division.secondPlaces++;
        }
      }
    );
  });

  return Object.values(totals)
    .sort(
      (a, b) =>
        b.totalPoints -
          a.totalPoints ||
        b.firstPlaces -
          a.firstPlaces ||
        b.secondPlaces -
          a.secondPlaces ||
        a.name.localeCompare(b.name)
    )
    .map((division, index) => ({
      ...division,
      rank: index + 1,
    }));
}

export function getCompetitionRows(competition) {
  validateCompetitionResults(competition);

  const rule = pointRules[competition.scoringCategory];

  if (!rule) return [];

  return competition.results.map((divisionId, index) => ({
    division: divisions.find((item) => item.id === divisionId),
    rank: index + 1,
    resultLabel: `Juara ${index + 1}`,
    points: rule.points[index] ?? 0,
  }));
}

export function getDivisionPointBreakdown(
  divisionId,
  now = new Date()
) {
  return competitions
    .filter((competition) =>
      isCompetitionFinal(
        competition,
        now
      )
    )
    .map((competition) => {
      const index =
        competition.results.indexOf(
          divisionId
        );

      if (index === -1) {
        return null;
      }

      const rule =
        pointRules[
          competition.scoringCategory
        ];

      if (!rule) {
        return null;
      }

      return {
        competitionId: competition.id,
        competitionName: competition.name,
        rank: index + 1,
        resultLabel: `Juara ${index + 1}`,
        points:
          rule.points[index] ?? 0,
      };
    })
    .filter(Boolean);
}
import {
  competitions,
  divisions,
  pointRules,
} from "@/data/leaderboard";

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

export function getLeaderboard() {
  const totals = Object.fromEntries(
    divisions.map((division) => [
      division.id,
      {
        ...division,
        totalPoints: 0,
        firstPlaces: 0,
        podiums: 0,
        completedGames: 0,
      },
    ]),
  );

  competitions.forEach((competition) => {
    validateCompetitionResults(competition);

    const rule = pointRules[competition.scoringCategory];
    if (!rule) return;

    competition.results.forEach((divisionId, index) => {
      const division = totals[divisionId];
      if (!division) return;

      division.totalPoints += rule.points[index] ?? 0;
      division.completedGames++;

      if (index === 0) division.firstPlaces++;
      if (index < 3) division.podiums++;
    });
  });

  return Object.values(totals)
    .sort(
      (a, b) =>
        b.totalPoints - a.totalPoints ||
        b.firstPlaces - a.firstPlaces ||
        b.podiums - a.podiums ||
        a.name.localeCompare(b.name),
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

export const divisions = [
  { id: "subdit-1", name: "Subdit 1" },
  { id: "subdit-2", name: "Subdit 2" },
  { id: "subdit-3", name: "Subdit 3" },
  { id: "subdit-4", name: "Subdit 4" },
  { id: "subdit-5", name: "Subdit 5" },
];

export const pointRules = {
  sports: {
    label: "Sports (Lomba Kompetitif)",
    points: [15, 10, 7, 5, 3],
  },
  strategic: {
    label: "Strategic Games & Esports (Lomba Strategi)",
    points: [10, 7, 5, 3, 1],
  },
  fun: {
    label: "Fun Games (Lomba Rekreasi)",
    points: [5, 3, 2, 1, 1],
  },
  grandChampion: {
    label: "Mission: Grand Champion",
    points: [15, 0, 0, 0, 0],
  },
};

/*
 * Isi results dengan ID Subdit berdasarkan urutan juara 1–5.
 * Contoh: results: ["subdit-2", "subdit-4", "subdit-1", "subdit-3", "subdit-5"]
 * Biarkan [] selama hasil perlombaan belum ditetapkan.
 */
export const competitions = [
  { id: "futsal-cup", name: "Futsal Cup", category: "sports", results: [] },
  { id: "volleyball-challenge", name: "Volleyball Challenge", category: "sports", results: [] },
  { id: "badminton-masters", name: "Badminton Masters", category: "sports", results: [] },
  { id: "table-tennis-open", name: "Table Tennis Open", category: "sports", results: [] },
  { id: "chess-masters", name: "Chess Masters (Catur)", category: "strategic", results: [] },
  { id: "fc-26-cup", name: "FC 26 Cup", category: "strategic", results: [] },
  { id: "mobile-legends", name: "Mobile Legends: Bang Bang", category: "strategic", results: [] },
  { id: "cscz-tactical-challenge", name: "CS:CZ Tactical Challenge", category: "strategic", results: [] },
  { id: "capsa-masters", name: "Capsa Masters", category: "strategic", results: [] },
  { id: "domino-masters", name: "Domino (Gaple) Masters", category: "strategic", results: [] },
  {
    id: "mission-grand-champion",
    name: "Mission: Grand Champion",
    category: "grandChampion",
    results: [],
  },
  { id: "fun-games", name: "Fun Games", category: "fun", results: [] },
];

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
    const rule = pointRules[competition.category];

    competition.results.forEach((divisionId, index) => {
      const division = totals[divisionId];
      if (!division || !rule) return;

      division.totalPoints += rule.points[index] ?? 0;
      division.completedGames += 1;
      if (index === 0) division.firstPlaces += 1;
      if (index < 3) division.podiums += 1;
    });
  });

  return Object.values(totals)
    .sort((a, b) =>
      b.totalPoints - a.totalPoints ||
      b.firstPlaces - a.firstPlaces ||
      b.podiums - a.podiums ||
      a.name.localeCompare(b.name),
    )
    .map((division, index) => ({ ...division, rank: index + 1 }));
}

export function getCompetitionRows(competition) {
  const rule = pointRules[competition.category];

  return divisions.map((division) => {
    const resultIndex = competition.results.indexOf(division.id);
    return {
      division,
      rank: resultIndex >= 0 ? resultIndex + 1 : null,
      points: resultIndex >= 0 ? rule.points[resultIndex] ?? 0 : null,
    };
  });
}

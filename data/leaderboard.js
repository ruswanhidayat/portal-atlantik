export const divisions = [
  { id: "subdit-1", name: "Subdit TAKESI" },
  { id: "subdit-2", name: "Subdit PESPA" },
  { id: "subdit-3", name: "Subdit PSPP" },
  { id: "subdit-4", name: "Subdit PIKSI" },
  { id: "subdit-5", name: "Subdit PEPSI" },
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
 * SUMBER DATA TUNGGAL LEADERBOARD
 *
 * Isi results dengan ID Subdit berdasarkan urutan juara 1–5.
 * Contoh:
 * results: ["subdit-2", "subdit-4", "subdit-1", "subdit-3", "subdit-5"]
 *
 * Data yang sama digunakan untuk:
 * 1. menampilkan hasil per cabang pada accordion; dan
 * 2. menghitung akumulasi Leaderboard Juara Umum secara otomatis.
 *
 * scoringCategory menentukan aturan poin.
 * theme menentukan warna kepala accordion agar sama dengan kartu Permainan.
 * Biarkan results: [] selama hasil perlombaan belum ditetapkan.
 */
export const competitions = [
  {
    id: "futsal-cup",
    name: "Futsal Cup",
    scoringCategory: "sports",
    theme: "sports",
    results: [],
  },
  {
    id: "volleyball-challenge",
    name: "Volleyball Challenge",
    scoringCategory: "sports",
    theme: "sports",
    results: [],
  },
  {
    id: "badminton-masters",
    name: "Badminton Masters",
    scoringCategory: "sports",
    theme: "sports",
    results: [],
  },
  {
    id: "table-tennis-open",
    name: "Table Tennis Open",
    scoringCategory: "sports",
    theme: "sports",
    results: [],
  },
  {
    id: "fc-26-cup",
    name: "FC 26 Cup",
    scoringCategory: "strategic",
    theme: "esports",
    results: [],
  },
  {
    id: "mobile-legends-bang-bang",
    name: "Mobile Legends: Bang Bang",
    scoringCategory: "strategic",
    theme: "esports",
    results: [],
  },
  {
    id: "cscz-tactical-challenge",
    name: "CS:CZ Tactical Challenge",
    scoringCategory: "strategic",
    theme: "esports",
    results: [],
  },
  {
    id: "chess-masters",
    name: "Chess Masters (Catur)",
    scoringCategory: "strategic",
    theme: "strategic",
    results: [],
  },
  {
    id: "capsa-masters",
    name: "Capsa Masters",
    scoringCategory: "strategic",
    theme: "strategic",
    results: [
      "subdit-5",
      "subdit-3",
      "subdit-2",
      "subdit-4",
      "subdit-1",
    ],
  },
  {
    id: "domino-gaple-masters",
    name: "Domino (Gaple) Masters",
    scoringCategory: "strategic",
    theme: "strategic",
    results: [
      "subdit-1",
      "subdit-3",
      "subdit-4",
      "subdit-5",
      "subdit-2",
    ],
  },
  {
    id: "mission-grand-champion",
    name: "Mission: Grand Champion",
    scoringCategory: "grandChampion",
    theme: "grand-champion",
    results: [],
  },
  {
    id: "fun-games",
    name: "Fun Games",
    scoringCategory: "fun",
    theme: "fun",
    results: [],
  },
];

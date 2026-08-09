export const divisions = [
  { id: "subdit-1", name: "TAKESI" },
  { id: "subdit-2", name: "PESPA" },
  { id: "subdit-3", name: "PSPP" },
  { id: "subdit-4", name: "PIKSI" },
  { id: "subdit-5", name: "PEPSI" },
];

export const pointRules = {
  sports: {
    label: "Sports",
    points: [15, 10, 7, 5, 3],
  },
  strategic: {
    label: "Strategic Games & Esports",
    points: [10, 7, 5, 3, 1],
  },
  fun: {
    label: "Fun Games",
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
    status: "ongoing",

    results: [
    ],

    standings: {
      type: "badminton",
      rows: [
        {
          divisionId: "subdit-3",
          points: 1,
          win: 1,
          lose: 0,
          matchesWon: 3,
          matchesLost: 0,
          scoreFor: 63,
          scoreAgainst: 33,
        },
        {
          divisionId: "subdit-4",
          points: 1,
          win: 1,
          lose: 0,
          matchesWon: 1,
          matchesLost: 2,
          scoreFor: 63,
          scoreAgainst: 59,
        },
        {
          divisionId: "subdit-2",
          points: 0,
          win: 0,
          lose: 1,
          matchesWon: 2,
          matchesLost: 1,
          scoreFor: 59,
          scoreAgainst: 63,
        },
        {
          divisionId: "subdit-5",
          points: 0,
          win: 0,
          lose: 1,
          matchesWon: 0,
          matchesLost: 3,
          scoreFor: 33,
          scoreAgainst: 63,
        },
        {
          divisionId: "subdit-1",
          points: 0,
          win: 0,
          lose: 0,
          matchesWon: 0,
          matchesLost: 0,
          scoreFor: 0,
          scoreAgainst: 0,
        },
      ],
    },
  },
  {
    id: "table-tennis-open",
    name: "Table Tennis Open",
    scoringCategory: "sports",
    theme: "sports",
    status: "ongoing",

    // Belum dihitung ke Juara Umum karena masih fase liga.
    results: [],

    standings: {
      type: "table-tennis",
      rows: [
        {
          divisionId: "subdit-5",
          played: 2,
          win: 2,
          lose: 0,
          pointsFor: 90,
          pointsAgainst: 47,
          qualified: true,
        },
        {
          divisionId: "subdit-3",
          played: 2,
          win: 1,
          lose: 1,
          pointsFor: 81,
          pointsAgainst: 86,
          qualified: true,
        },
        {
          divisionId: "subdit-2",
          played: 2,
          win: 1,
          lose: 1,
          pointsFor: 75,
          pointsAgainst: 81,
          qualified: true,
        },
        {
          divisionId: "subdit-4",
          played: 1,
          win: 0,
          lose: 1,
          pointsFor: 41,
          pointsAgainst: 45,
          qualified: true,
        },
        {
          divisionId: "subdit-1",
          played: 1,
          win: 0,
          lose: 1,
          pointsFor: 17,
          pointsAgainst: 45,
          qualified: false,
        },
      ],
    },
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
    status: "ongoing",

    // Belum dihitung ke Juara Umum karena pertandingan belum final.
    results: [],

    standings: {
      type: "mlbb",
      rows: [
        {
          divisionId: "subdit-3",
          squadName: "BANGDUPAK",
          matchPoint: 4,
          matchWin: 4,
          matchLose: 0,
          gameWin: 8,
          gameLose: 3,
          finalist: true,
        },
        {
          divisionId: "subdit-1",
          squadName: "TAKESI",
          matchPoint: 3,
          matchWin: 3,
          matchLose: 1,
          gameWin: 7,
          gameLose: 4,
          finalist: true,
        },
        {
          divisionId: "subdit-5",
          squadName: "PEPSI",
          matchPoint: 1,
          matchWin: 1,
          matchLose: 2,
          gameWin: 4,
          gameLose: 4,
          finalist: false,
        },
        {
          divisionId: "subdit-4",
          squadName: "PIKSI",
          matchPoint: 1,
          matchWin: 1,
          matchLose: 3,
          gameWin: 4,
          gameLose: 6,
          finalist: false,
        },
        {
          divisionId: "subdit-2",
          squadName: "PESPA",
          matchPoint: 0,
          matchWin: 0,
          matchLose: 3,
          gameWin: 0,
          gameLose: 6,
          finalist: false,
        },
      ],
    },
  },
  {
    id: "cscz-tactical-challenge",
    name: "CS:CZ Tactical Challenge",
    scoringCategory: "strategic",
    theme: "esports",
    status: "ongoing",

    // Belum dihitung ke Juara Umum karena fase liga masih berlangsung.
    results: [],

    standings: {
      type: "cscz",
      rows: [
        {
          divisionId: "subdit-1",
          played: 1,
          win: 1,
          draw: 0,
          lose: 0,
          points: 0,
          roundsWon: 0,
          roundsLost: 0,
          rank: 1,
        },
        {
          divisionId: "subdit-2",
          played: 1,
          win: 0,
          draw: 0,
          lose: 1,
          points: 0,
          roundsWon: 0,
          roundsLost: 0,
          rank: 2,
        },
        {
          divisionId: "subdit-3",
          played: 0,
          win: 0,
          draw: 0,
          lose: 0,
          points: 0,
          roundsWon: 0,
          roundsLost: 0,
          rank: 3,
        },
        {
          divisionId: "subdit-4",
          played: 0,
          win: 0,
          draw: 0,
          lose: 0,
          points: 0,
          roundsWon: 0,
          roundsLost: 0,
          rank: 4,
        },
        {
          divisionId: "subdit-5",
          played: 0,
          win: 0,
          draw: 0,
          lose: 0,
          points: 0,
          roundsWon: 0,
          roundsLost: 0,
          rank: 5,
        },
      ],
    },
  },
  {
    id: "chess-masters",
    name: "Chess Masters (Catur)",
    scoringCategory: "strategic",
    theme: "strategic",
    status: "ongoing",
  
    // Tetap kosong karena hasil pertandingan belum final
    // dan belum boleh dihitung ke leaderboard Juara Umum.
    results: [],
  
    standings: {
      type: "chess",
      rows: [
        {
          divisionId: "subdit-1",
          played: 3,
          win: 15,
          lose: 3,
          draw: 0,
          totalPoints: 45,
        },
        {
          divisionId: "subdit-5",
          played: 3,
          win: 13,
          lose: 5,
          draw: 0,
          totalPoints: 39,
        },
        {
          divisionId: "subdit-4",
          played: 4,
          win: 12,
          lose: 11,
          draw: 1,
          totalPoints: 37,
        },
        {
          divisionId: "subdit-2",
          played: 3,
          win: 5,
          lose: 13,
          draw: 0,
          totalPoints: 15,
        },
        {
          divisionId: "subdit-3",
          played: 3,
          win: 2,
          lose: 15,
          draw: 1,
          totalPoints: 7,
        },
      ],
    },
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
  
    scoreDetails: {
      columns: ["R1", "R2", "R3", "R4"],
  
      rows: [
        {
          divisionId: "subdit-5",
          scores: [67, 61, 55, 61],
        },
        {
          divisionId: "subdit-3",
          scores: [51, 55, 67, 58],
        },
        {
          divisionId: "subdit-2",
          scores: [48, 52, 46, 51],
        },
        {
          divisionId: "subdit-4",
          scores: [52, 48, 39, 33],
        },
        {
          divisionId: "subdit-1",
          scores: [32, 34, 43, 47],
        },
      ],
    },
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

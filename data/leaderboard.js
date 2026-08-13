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
    status: "waiting",
    results: [],

    standings: {
      type: "futsal",
      rows: [
        {
          divisionId: "subdit-1",
          played: null,
          win: null,
          draw: null,
          lose: null,
          goalsFor: null,
          goalsAgainst: null,
          points: null,
        },
        {
          divisionId: "subdit-2",
          played: null,
          win: null,
          draw: null,
          lose: null,
          goalsFor: null,
          goalsAgainst: null,
          points: null,
        },
        {
          divisionId: "subdit-3",
          played: null,
          win: null,
          draw: null,
          lose: null,
          goalsFor: null,
          goalsAgainst: null,
          points: null,
        },
        {
          divisionId: "subdit-4",
          played: null,
          win: null,
          draw: null,
          lose: null,
          goalsFor: null,
          goalsAgainst: null,
          points: null,
        },
        {
          divisionId: "subdit-5",
          played: null,
          win: null,
          draw: null,
          lose: null,
          goalsFor: null,
          goalsAgainst: null,
          points: null,
        },
      ],
    },
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
    status: "final",

    results: [
      "subdit-4",
      "subdit-3",
      "subdit-2",
      "subdit-5",
      "subdit-1",
    ],

    standings: {
      type: "badminton",
      rows: [
        {
          divisionId: "subdit-3",
          points: 2,
          win: 2,
          lose: 2,
          matchesWon: 9,
          matchesLost: 3,
          scoreFor: 238,
          scoreAgainst: 186,
        },
        {
          divisionId: "subdit-4",
          points: 4,
          win: 4,
          lose: 0,
          matchesWon: 6,
          matchesLost: 6,
          scoreFor: 252,
          scoreAgainst: 222,
        },
        {
          divisionId: "subdit-2",
          points: 2,
          win: 2,
          lose: 2,
          matchesWon: 6,
          matchesLost: 6,
          scoreFor: 243,
          scoreAgainst: 240,
        },
        {
          divisionId: "subdit-5",
          points: 1,
          win: 1,
          lose: 3,
          matchesWon: 6,
          matchesLost: 6,
          scoreFor: 208,
          scoreAgainst: 214,
        },
        {
          divisionId: "subdit-1",
          points: 1,
          win: 1,
          lose: 3,
          matchesWon: 3,
          matchesLost: 9,
          scoreFor: 168,
          scoreAgainst: 247,
        },
      ],
    },
  },
  {
    id: "table-tennis-open",
    name: "Table Tennis Open",
    scoringCategory: "sports",
    theme: "sports",
    status: "final",

    // Belum dihitung ke Juara Umum karena masih fase liga.
    results: [
      "subdit-5",
      "subdit-2",
      "subdit-4",
      "subdit-3",
      "subdit-1",
    ],

    standings: {
      type: "table-tennis",
      rows: [
        {
          divisionId: "subdit-5",
          played: 4,
          win: 4,
          lose: 0,
          pointsFor: 180,
          pointsAgainst: 132,
          qualified: true,
        },
        {
          divisionId: "subdit-3",
          played: 4,
          win: 2,
          lose: 2,
          pointsFor: 169,
          pointsAgainst: 154,
          qualified: true,
        },
        {
          divisionId: "subdit-2",
          played: 4,
          win: 3,
          lose: 1,
          pointsFor: 165,
          pointsAgainst: 145,
          qualified: true,
        },
        {
          divisionId: "subdit-4",
          played: 4,
          win: 1,
          lose: 3,
          pointsFor: 171,
          pointsAgainst: 162,
          qualified: true,
        },
        {
          divisionId: "subdit-1",
          played: 4,
          win: 0,
          lose: 4,
          pointsFor: 88,
          pointsAgainst: 180,
          qualified: false,
        },
      ],
    },
    knockout: {
      semifinals: [
        {
          id: "sf-1",
          homeDivisionId: "subdit-5",
          homeScore: 45,
          awayDivisionId: "subdit-4",
          awayScore: 29,
          winnerDivisionId: "subdit-5",
        },
        {
          id: "sf-2",
          homeDivisionId: "subdit-2",
          homeScore: 45,
          awayDivisionId: "subdit-3",
          awayScore: 33,
          winnerDivisionId: "subdit-2",
        },
      ],

      final: {
        id: "final",
        homeDivisionId: "subdit-5",
        homeScore: 45,
        awayDivisionId: "subdit-2",
        awayScore: 42,
        winnerDivisionId: "subdit-5",
      },

      thirdPlace: {
        id: "third-place",
        homeDivisionId: "subdit-4",
        homeScore: 45,
        awayDivisionId: "subdit-3",
        awayScore: 43,
        winnerDivisionId: "subdit-4",
      },
    },
  },
  {
    id: "atlantik-run",
    name: "Atlantik Run 2026",
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
          matchLose: 3,
          gameWin: 4,
          gameLose: 6,
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
          matchPoint: 1,
          matchWin: 1,
          matchLose: 3,
          gameWin: 2,
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
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          points: 6,
          roundsWon: 28,
          roundsLost: 12,
          rank: null,
        },
        {
          divisionId: "subdit-2",
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          points: 0,
          roundsWon: 6,
          roundsLost: 34,
          rank: null,
        },
        {
          divisionId: "subdit-3",
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          points: 6,
          roundsWon: 35,
          roundsLost: 5,
          rank: null,
        },
        {
          divisionId: "subdit-4",
          played: 3,
          win: 1,
          draw: 0,
          lose: 2,
          points: 3,
          roundsWon: 24,
          roundsLost: 36,
          rank: null,
        },
        {
          divisionId: "subdit-5",
          played: 3,
          win: 1,
          draw: 0,
          lose: 2,
          points: 3,
          roundsWon: 27,
          roundsLost: 33,
          rank: null,
        },
      ],
    },
  },
  {
    id: "chess-masters",
    name: "Chess Masters (Catur)",
    scoringCategory: "strategic",
    theme: "strategic",
    status: "final",
  
    // Tetap kosong karena hasil pertandingan belum final
    // dan belum boleh dihitung ke leaderboard Juara Umum.
    results: [
      "subdit-5",
      "subdit-1",
      "subdit-4",
      "subdit-2",
      "subdit-3",
    ],
  
    standings: {
      type: "chess",
      rows: [
        {
          divisionId: "subdit-1",
          played: 4,
          win: 15,
          lose: 9,
          draw: 0,
          totalPoints: 45,
        },
        {
          divisionId: "subdit-5",
          played: 4,
          win: 19,
          lose: 5,
          draw: 0,
          totalPoints: 57,
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
          played: 4,
          win: 11,
          lose: 13,
          draw: 0,
          totalPoints: 33,
        },
        {
          divisionId: "subdit-3",
          played: 4,
          win: 2,
          lose: 21,
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
      "subdit-5",
      "subdit-4",
      "subdit-2",
    ],
  },
  {
  id: "mission-grand-champion",
  name: "Mission: Grand Champion",
  scoringCategory: "grandChampion",
  theme: "grand-champion",
  results: [],

  grandChampion: {
    phases: [
      {
        id: "rapid-rush",
        phase: "PHASE 1",
        name: "Rapid Rush",
        scheduleTitle: "Rapid Rush",
        type: "rapid-rush",
        finalized: false,

        results: {
          "subdit-1": [
            {
              overallRank: 1,
              subditRank: 1,
              player: "SENO SANTIKA PAHLAWAN",
              score: 23096,
            },
            {
              overallRank: 2,
              subditRank: 2,
              player: "MUHAMMAD RAMADHAN ZULFI",
              score: 22924,
            },
            {
              overallRank: 4,
              subditRank: 3,
              player: "ISNAINI NURUL KHASANAH",
              score: 22571,
            },
            {
              overallRank: 5,
              subditRank: 4,
              player: "ACHMAD HAMBALI",
              score: 22258,
            },
            {
              overallRank: 6,
              subditRank: 5,
              player: "A`THFI RIJAL MUFIED",
              score: 22084,
            },
            {
              overallRank: 10,
              subditRank: 6,
              player: "DANIEL SAHALA HUTABARAT",
              score: 21345,
            },
            {
              overallRank: 12,
              subditRank: 7,
              player: "DINA ALIFATUL MA`RIFAH",
              score: 20480,
            },
            {
              overallRank: 15,
              subditRank: 8,
              player: "HIKMAH VICI PRATAMA",
              score: 19994,
            },
            {
              overallRank: 16,
              subditRank: 9,
              player: "ARDY EKO KARTONO",
              score: 19704,
            },
            {
              overallRank: 17,
              subditRank: 10,
              player: "Asvary",
              score: 19582,
            },
            {
              overallRank: 18,
              subditRank: 11,
              player: "JENS NAKI",
              score: 19268,
            },
            {
              overallRank: 21,
              subditRank: 12,
              player: "TANTI BUDI SETYORINI",
              score: 18210,
            },
            {
              overallRank: 23,
              subditRank: 13,
              player: "RIZQA NULHUSNA",
              score: 17370,
            },
            {
              overallRank: 26,
              subditRank: 14,
              player: "GRISELDA LIVIA",
              score: 16530,
            },
            {
              overallRank: 29,
              subditRank: 15,
              player: "ERNITA YOLANDA BELVINSKY HUTABARAT",
              score: 16167,
            },
            {
              overallRank: 30,
              subditRank: 16,
              player: "HIKMAH VICI PRATAMA",
              score: 16161,
            },
            {
              overallRank: 32,
              subditRank: 17,
              player: "JESSICA RAHMAWATI NUGROHO",
              score: 15307,
            },
            {
              overallRank: 34,
              subditRank: 18,
              player: "RIO MONANDA PUTRA",
              score: 13048,
            },
          ],
          "subdit-2": [
            {
              overallRank: 3,
              subditRank: 1,
              player: "ABDUL ROKHIM",
              score: 22673,
            },
            {
              overallRank: 8,
              subditRank: 2,
              player: "Dwita Nevitriani",
              score: 21975,
            },
            {
              overallRank: 11,
              subditRank: 3,
              player: "Nana Supriatna",
              score: 20631,
            },
            {
              overallRank: 20,
              subditRank: 4,
              player: "YASTIADI ENGGAR PRABOWO",
              score: 18752,
            },
            {
              overallRank: 24,
              subditRank: 5,
              player: "AGUNG UTOMO",
              score: 16862,
            },
            {
              overallRank: 25,
              subditRank: 6,
              player: "I Putu Agus Juniartha",
              score: 16626,
            },
          ],
          "subdit-3": [
            {
              overallRank: 7,
              subditRank: 1,
              player: "TEGUH PAMUJI",
              score: 22025,
            },
            {
              overallRank: 9,
              subditRank: 2,
              player: "ANDINI NURAINI",
              score: 21895,
            },
            {
              overallRank: 13,
              subditRank: 3,
              player: "RAYANA JANWAR",
              score: 20355,
            },
            {
              overallRank: 14,
              subditRank: 4,
              player: "NURSYAHFITRI PURBA",
              score: 20123,
            },
            {
              overallRank: 19,
              subditRank: 5,
              player: "NOVITA VERA HARDIANTY HASIBUAN",
              score: 18837,
            },
            {
              overallRank: 22,
              subditRank: 6,
              player: "AMRI TARMIZI",
              score: 18056,
            },
            {
              overallRank: 27,
              subditRank: 7,
              player: "DWI JOKO WIDODO",
              score: 16387,
            },
            {
              overallRank: 28,
              subditRank: 8,
              player: "VINA SARI",
              score: 16223,
            },
            {
              overallRank: 31,
              subditRank: 9,
              player: "NATALIA DESFRI HUTABARAT",
              score: 15978,
            },
            {
              overallRank: 33,
              subditRank: 10,
              player: "WAHYU RIO MAHENDRA",
              score: 13539,
            },
            {
              overallRank: 35,
              subditRank: 11,
              player: "ERWIN ADINUGRAHA",
              score: 11503,
            },
          ],
          "subdit-4": [
          ],
          "subdit-5": [
          ],
        },
      },

      {
        id: "crossroads",
        phase: "PHASE 2",
        name: "Crossroads",
        scheduleTitle: "Crossroads",
        type: "default",
        finalized: false,
      },

      {
        id: "pressure-grid",
        phase: "PHASE 3",
        name: "Pressure Grid",
        scheduleTitle: "Pressure Grid",
        type: "default",
        finalized: false,
      },

      {
        id: "signal-race",
        phase: "PHASE 4",
        name: "Signal Race",
        scheduleTitle: "Signal Race",
        type: "default",
        finalized: false,
      },

      {
        id: "visual-recall",
        phase: "PHASE 5",
        name: "Visual Recall",
        scheduleTitle: "Visual Recall",
        type: "default",
        finalized: false,
      },

      {
        id: "open-box",
        phase: "FINAL",
        name: "The Code Lock",
        scheduleTitle: "Final Match",
        type: "default",
        finalized: false,
      },
    ],
  },
},
  {
    id: "merdeka-showcase",
    name: "Lomba Kebersihan dan Dekorasi Ruangan",
    scoringCategory: "fun",
    theme: "fun",
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

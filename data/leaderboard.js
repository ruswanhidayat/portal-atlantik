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
    points: [5, 3, 1, 1, 1],
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
    status: "final",
    results: [
      "subdit-4",
      "subdit-3",
      "subdit-2",
      "subdit-1",
      "subdit-5",
    ],

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
          played: 3,
          win: 1,
          draw: 1,
          lose: 1,
          goalsFor: 3,
          goalsAgainst: 5,
          points: 4,
        },
        {
          divisionId: "subdit-3",
          played: 3,
          win: 2,
          draw: 0,
          lose: 1,
          goalsFor: 9,
          goalsAgainst: 6,
          points: 6,
        },
        {
          divisionId: "subdit-4",
          played: 3,
          win: 2,
          draw: 1,
          lose: 0,
          goalsFor: 8,
          goalsAgainst: 5,
          points: 7,
        },
        {
          divisionId: "subdit-5",
          played: 3,
          win: 0,
          draw: 0,
          lose: 3,
          goalsFor: 1,
          goalsAgainst: 5,
          points: 0,
        },
      ],
    },
  },
  {
    id: "volleyball-challenge",
    name: "Volleyball Challenge",
    scoringCategory: "sports",
    theme: "sports",
    status: "final",

    results: [
      "subdit-5",
      "subdit-3",
      "subdit-1",
      "subdit-2",
      "subdit-4",
    ],

    standings: {
      type: "volleyball",
      rows: [
        {
          divisionId: "subdit-5",
          played: 4,
          win: 4,
          lose: 0,
          score: 100,
          points: 12,
        },
        {
          divisionId: "subdit-1",
          played: 4,
          win: 2,
          lose: 2,
          score: 92,
          points: 6,
        },
        {
          divisionId: "subdit-3",
          played: 4,
          win: 3,
          lose: 1,
          score: 95,
          points: 9,
        },
        {
          divisionId: "subdit-2",
          played: 4,
          win: 1,
          lose: 3,
          score: 78,
          points: 3,
        },
        {
          divisionId: "subdit-4",
          played: 4,
          win: 0,
          lose: 4,
          score: 41,
          points: 0,
        },
      ],
    },
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

    /*
    * Hasil Atlantik Run berasal dari API
    * https://atlantik-run.vercel.app/api/leaderboard/subdit
    *
    * results tetap kosong karena Atlantik Run
    * mempunyai dua kategori penilaian: Putra & Putri.
    */
    results: [],

    externalStatus: "ongoing",
    externalFinalized: false,

    standings: {
      type: "atlantik-run",
      male: [],
      female: [],
    },
  },
  {
    id: "fc-26-cup",
    name: "FC 26 Cup",
    scoringCategory: "strategic",
    theme: "esports",
    status: "final",

    results: [
      "subdit-3",
      "subdit-5",
      "subdit-2",
      "subdit-4",
      "subdit-1",
    ],

    standings: {
      type: "fc26",

      rows: [
        {
          divisionId: "subdit-3",
          scoreFor: 54,
          scoreAgainst: 12,
          points: 24,
          finalist: true,
        },
        {
          divisionId: "subdit-5",
          scoreFor: 26,
          scoreAgainst: 24,
          points: 13,
          finalist: true,
        },
        {
          divisionId: "subdit-2",
          scoreFor: 28,
          scoreAgainst: 27,
          points: 13,
          finalist: false,
        },
        {
          divisionId: "subdit-4",
          scoreFor: 20,
          scoreAgainst: 23,
          points: 9,
          finalist: false,
        },
        {
          divisionId: "subdit-1",
          scoreFor: 9,
          scoreAgainst: 51,
          points: 0,
          finalist: false,
        },
      ],
    },

    knockout: {
      final: {
        id: "fc26-final",
        homeDivisionId: "subdit-3",
        awayDivisionId: "subdit-5",
        homeScore: 2,
        awayScore: 0,
        winnerDivisionId: "subdit-3",
      },
    },
  },
  {
    id: "mobile-legends-bang-bang",
    name: "Mobile Legends: Bang Bang",
    scoringCategory: "strategic",
    theme: "esports",
    status: "final",

    // Belum dihitung ke Juara Umum karena pertandingan belum final.
    results: [
      "subdit-3",
      "subdit-1",
      "subdit-5",
      "subdit-4",
      "subdit-2",
    ],

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
    status: "final",

    // Belum dihitung ke Juara Umum karena fase liga masih berlangsung.
    results: [
      "subdit-3",
      "subdit-1",
      "subdit-5",
      "subdit-4",
      "subdit-2",
    ],

    standings: {
      type: "cscz",
      rows: [
        {
          divisionId: "subdit-1",
          played: 4,
          win: 3,
          draw: 0,
          lose: 1,
          points: 9,
          roundsWon: 47,
          roundsLost: 33,
          rank: null,
        },
        {
          divisionId: "subdit-2",
          played: 4,
          win: 0,
          draw: 0,
          lose: 4,
          points: 0,
          roundsWon: 13,
          roundsLost: 67,
          rank: null,
        },
        {
          divisionId: "subdit-3",
          played: 4,
          win: 4,
          draw: 0,
          lose: 0,
          points: 12,
          roundsWon: 69,
          roundsLost: 11,
          rank: null,
        },
        {
          divisionId: "subdit-4",
          played: 4,
          win: 1,
          draw: 0,
          lose: 3,
          points: 3,
          roundsWon: 26,
          roundsLost: 54,
          rank: null,
        },
        {
          divisionId: "subdit-5",
          played: 4,
          win: 2,
          draw: 0,
          lose: 2,
          points: 6,
          roundsWon: 45,
          roundsLost: 35,
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
    id: "merdeka-showcase",
    name: "Lomba Kebersihan dan Dekorasi Ruangan",
    scoringCategory: "strategic",
    theme: "strategic",
    results: [
      "subdit-3",
      "subdit-2",
      "subdit-1",
      "subdit-5",
      "subdit-4",
    ],
  },
  {
    id: "mission-grand-champion",
    name: "Mission: Grand Champion",
    scoringCategory: "grandChampion",
    theme: "grand-champion",
    results: [
      "subdit-1",
      "subdit-2",
      "subdit-3",
      "subdit-4",
      "subdit-5",
    ],

    grandChampion: {
      phases: [
        {
          id: "rapid-rush",
          phase: "PHASE 1",
          name: "Rapid Rush",
          scheduleTitle: "Rapid Rush",
          type: "rapid-rush",
          finalized: true,

          snapshots: [
            {
              cutoff: "2026-08-13T00:00:00+07:00",
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
                    overallRank: 32,
                    subditRank: 16,
                    player: "JESSICA RAHMAWATI NUGROHO",
                    score: 15307,
                  },
                  {
                    overallRank: 34,
                    subditRank: 17,
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
              cutoff: "2026-08-14T00:00:00+07:00",
              results: {
                "subdit-1": [
                  {
                    overallRank: 6,
                    subditRank: 1,
                    player: "SENO SANTIKA PAHLAWAN",
                    score: 23096,
                  },
                  {
                    overallRank: 13,
                    subditRank: 2,
                    player: "MUHAMMAD RAMADHAN ZULFI",
                    score: 22924,
                  },
                  {
                    overallRank: 18,
                    subditRank: 3,
                    player: "ISNAINI NURUL KHASANAH",
                    score: 22571,
                  },
                  {
                    overallRank: 21,
                    subditRank: 4,
                    player: "ACHMAD HAMBALI",
                    score: 22258,
                  },
                  {
                    overallRank: 23,
                    subditRank: 5,
                    player: "A`THFI RIJAL MUFIED",
                    score: 22084,
                  },
                  {
                    overallRank: 28,
                    subditRank: 6,
                    player: "HIKMAH VICI PRATAMA",
                    score: 21584,
                  },
                  {
                    overallRank: 29,
                    subditRank: 7,
                    player: "DANIEL SAHALA HUTABARAT",
                    score: 21345,
                  },
                  {
                    overallRank: 33,
                    subditRank: 8,
                    player: "DINA ALIFATUL MA`RIFAH",
                    score: 20480,
                  },
                  {
                    overallRank: 36,
                    subditRank: 9,
                    player: "ARDY EKO KARTONO",
                    score: 19704,
                  },
                  {
                    overallRank: 38,
                    subditRank: 10,
                    player: "ASVARY",
                    score: 19582,
                  },
                  {
                    overallRank: 44,
                    subditRank: 11,
                    player: "JENS NAKI",
                    score: 19268,
                  },
                  {
                    overallRank: 53,
                    subditRank: 12,
                    player: "TANTI BUDI SETYORINI",
                    score: 18210,
                  },
                  {
                    overallRank: 60,
                    subditRank: 13,
                    player: "RIZQA NULHUSNA",
                    score: 17370,
                  },
                  {
                    overallRank: 61,
                    subditRank: 14,
                    player: "MUHAMMAD IQBAL",
                    score: 17200,
                  },
                  {
                    overallRank: 70,
                    subditRank: 15,
                    player: "GRISELDA LIVIA",
                    score: 16530,
                  },
                  {
                    overallRank: 75,
                    subditRank: 16,
                    player: "ERNITA YOLANDA BELVINSKY HUTABARAT",
                    score: 16167,
                  },
                  {
                    overallRank: 84,
                    subditRank: 17,
                    player: "JESSICA RAHMAWATI NUGROHO",
                    score: 15307,
                  },
                  {
                    overallRank: 89,
                    subditRank: 18,
                    player: "RIO MONANDA PUTRA",
                    score: 13048,
                  },
                ],
                "subdit-2": [
                  {
                    overallRank: 1,
                    subditRank: 1,
                    player: "MONICA VIVI KURNIAWATI",
                    score: 24072,
                  },
                  {
                    overallRank: 2,
                    subditRank: 2,
                    player: "ABDAN SYAKURO",
                    score: 23777,
                  },
                  {
                    overallRank: 3,
                    subditRank: 3,
                    player: "REZA PAHLEVIE",
                    score: 23214,
                  },
                  {
                    overallRank: 5,
                    subditRank: 4,
                    player: "SUNARKO",
                    score: 23128,
                  },
                  {
                    overallRank: 8,
                    subditRank: 5,
                    player: "ANTONIUS JONET BINARTO",
                    score: 22986,
                  },
                  {
                    overallRank: 10,
                    subditRank: 6,
                    player: "I PUTU AGUS JUNIARTHA",
                    score: 22969,
                  },
                  {
                    overallRank: 12,
                    subditRank: 7,
                    player: "NORMAN RAMADHAN",
                    score: 22959,
                  },
                  {
                    overallRank: 16,
                    subditRank: 8,
                    player: "ABDUL ROKHIM",
                    score: 22673,
                  },
                  {
                    overallRank: 17,
                    subditRank: 9,
                    player: "ABDUL FATTAH",
                    score: 22649,
                  },
                  {
                    overallRank: 20,
                    subditRank: 10,
                    player: "IMAM SUTRISNO",
                    score: 22407,
                  },
                  {
                    overallRank: 25,
                    subditRank: 11,
                    player: "DWITA NEVITRIANI",
                    score: 21975,
                  },
                  {
                    overallRank: 26,
                    subditRank: 12,
                    player: "MUHAMMAD RIZQA NAFIS",
                    score: 21956,
                  },
                  {
                    overallRank: 32,
                    subditRank: 13,
                    player: "NANA SUPRIATNA",
                    score: 20631,
                  },
                  {
                    overallRank: 39,
                    subditRank: 14,
                    player: "RENDY KUI MOKOGINTA",
                    score: 19537,
                  },
                  {
                    overallRank: 41,
                    subditRank: 15,
                    player: "HANIFAH ATSARIYANA",
                    score: 19495,
                  },
                  {
                    overallRank: 45,
                    subditRank: 16,
                    player: "ADIP PRADIPTO ANINDYO",
                    score: 19057,
                  },
                  {
                    overallRank: 46,
                    subditRank: 17,
                    player: "WAHYU BUDIONO",
                    score: 18859,
                  },
                  {
                    overallRank: 47,
                    subditRank: 18,
                    player: "YASTIADI ENGGAR PRABOWO",
                    score: 18752,
                  },
                  {
                    overallRank: 48,
                    subditRank: 19,
                    player: "YULIA ISLAMIATI",
                    score: 18648,
                  },
                  {
                    overallRank: 50,
                    subditRank: 20,
                    player: "ACHMAD LUTHFI",
                    score: 18533,
                  },
                  {
                    overallRank: 51,
                    subditRank: 21,
                    player: "MUHAMAD FAJRI YUSUF",
                    score: 18424,
                  },
                  {
                    overallRank: 59,
                    subditRank: 22,
                    player: "ILHAM TISWAN",
                    score: 17386,
                  },
                  {
                    overallRank: 63,
                    subditRank: 23,
                    player: "MOHAMMAD JUNUS",
                    score: 17022,
                  },
                  {
                    overallRank: 65,
                    subditRank: 24,
                    player: "M. OTRYADI NAUFAL",
                    score: 16912,
                  },
                  {
                    overallRank: 66,
                    subditRank: 25,
                    player: "MUHAMMAD LUTHFI",
                    score: 16870,
                  },
                  {
                    overallRank: 67,
                    subditRank: 26,
                    player: "AGUNG UTOMO",
                    score: 16862,
                  },
                  {
                    overallRank: 68,
                    subditRank: 27,
                    player: "NIA AULIA SITORUS",
                    score: 16731,
                  },
                  {
                    overallRank: 71,
                    subditRank: 28,
                    player: "ASMUNI HARIS",
                    score: 16440,
                  },
                  {
                    overallRank: 72,
                    subditRank: 29,
                    player: "SEPTIANA KURNIAWATI",
                    score: 16437,
                  },
                  {
                    overallRank: 76,
                    subditRank: 30,
                    player: "ALFIN RIZKY RACHMAWANTO",
                    score: 16166,
                  },
                  {
                    overallRank: 77,
                    subditRank: 31,
                    player: "SULARNO",
                    score: 16076,
                  },
                  {
                    overallRank: 83,
                    subditRank: 32,
                    player: "GALANG RAMDHAN PRATAMA",
                    score: 15416,
                  },
                  {
                    overallRank: 90,
                    subditRank: 33,
                    player: "MUHAMAD NASRUL MUHAIMIN",
                    score: 12326,
                  },
                  {
                    overallRank: 92,
                    subditRank: 34,
                    player: "YUNI ANGGRAINI",
                    score: 11349,
                  },
                  {
                    overallRank: 94,
                    subditRank: 35,
                    player: "DINI HARIAJI",
                    score: 10165,
                  },
                ],
                "subdit-3": [
                  {
                    overallRank: 4,
                    subditRank: 1,
                    player: "ARDIANSYAH ANDRE RIZAL FALAWI",
                    score: 23177,
                  },
                  {
                    overallRank: 9,
                    subditRank: 2,
                    player: "AULIA OKTAVELLA PURNAMASARI",
                    score: 22980,
                  },
                  {
                    overallRank: 11,
                    subditRank: 3,
                    player: "NOVITA VERA HARDIANTY HASIBUAN",
                    score: 22968,
                  },
                  {
                    overallRank: 15,
                    subditRank: 4,
                    player: "FAJAR HAKIKI",
                    score: 22810,
                  },
                  {
                    overallRank: 24,
                    subditRank: 5,
                    player: "TEGUH PAMUJI",
                    score: 22025,
                  },
                  {
                    overallRank: 27,
                    subditRank: 6,
                    player: "ANDINI NURAINI",
                    score: 21895,
                  },
                  {
                    overallRank: 30,
                    subditRank: 7,
                    player: "RAYANA JANWAR",
                    score: 20802,
                  },
                  {
                    overallRank: 35,
                    subditRank: 8,
                    player: "NURSYAHFITRI PURBA",
                    score: 20123,
                  },
                  {
                    overallRank: 54,
                    subditRank: 9,
                    player: "AMRI TARMIZI",
                    score: 18056,
                  },
                  {
                    overallRank: 56,
                    subditRank: 10,
                    player: "BRIAN PRADITAMA",
                    score: 17795,
                  },
                  {
                    overallRank: 58,
                    subditRank: 11,
                    player: "JULIA A. BUTARBUTAR",
                    score: 17591,
                  },
                  {
                    overallRank: 62,
                    subditRank: 12,
                    player: "YOGA PAMUNGKAS",
                    score: 17023,
                  },
                  {
                    overallRank: 73,
                    subditRank: 13,
                    player: "DWI JOKO WIDODO",
                    score: 16387,
                  },
                  {
                    overallRank: 74,
                    subditRank: 14,
                    player: "VINA SARI",
                    score: 16223,
                  },
                  {
                    overallRank: 78,
                    subditRank: 15,
                    player: "NATALIA DESFRI HUTABARAT",
                    score: 15978,
                  },
                  {
                    overallRank: 86,
                    subditRank: 16,
                    player: "IBRAHIM SALEH",
                    score: 14416,
                  },
                  {
                    overallRank: 87,
                    subditRank: 17,
                    player: "WAHYU RIO MAHENDRA",
                    score: 13539,
                  },
                  {
                    overallRank: 91,
                    subditRank: 18,
                    player: "ERWIN ADINUGRAHA",
                    score: 11503,
                  },
                  {
                    overallRank: 93,
                    subditRank: 19,
                    player: "DESY DWI MARYATI",
                    score: 11338,
                  },
                  {
                    overallRank: 95,
                    subditRank: 20,
                    player: "WAHYUNING TRI UTAMI",
                    score: 9553,
                  },
                ],
                "subdit-4": [
                ],
                "subdit-5": [
                  {
                    overallRank: 7,
                    subditRank: 1,
                    player: "MITA MUTIA REZA",
                    score: 23047,
                  },
                  {
                    overallRank: 14,
                    subditRank: 2,
                    player: "ELFA RISTA HANTALIS VICTORY",
                    score: 22905,
                  },
                  {
                    overallRank: 19,
                    subditRank: 3,
                    player: "MARTINUS HERAWAN",
                    score: 22411,
                  },
                  {
                    overallRank: 22,
                    subditRank: 4,
                    player: "BAYU PRATAMA PUTRA",
                    score: 22173,
                  },
                  {
                    overallRank: 31,
                    subditRank: 5,
                    player: "BAYU WIDYASTANTO",
                    score: 20727,
                  },
                  {
                    overallRank: 34,
                    subditRank: 6,
                    player: "CAHYA ADHI KUSUMA",
                    score: 20184,
                  },
                  {
                    overallRank: 37,
                    subditRank: 7,
                    player: "TEGUH WAHYU WIDODO",
                    score: 19695,
                  },
                  {
                    overallRank: 40,
                    subditRank: 8,
                    player: "ANDY SETYO BARMANTO",
                    score: 19519,
                  },
                  {
                    overallRank: 42,
                    subditRank: 9,
                    player: "JEFRI WIRADIPUTRA",
                    score: 19332,
                  },
                  {
                    overallRank: 43,
                    subditRank: 10,
                    player: "THAMRIN WIDAYA",
                    score: 19323,
                  },
                  {
                    overallRank: 49,
                    subditRank: 11,
                    player: "ALVIN IMANUEL",
                    score: 18604,
                  },
                  {
                    overallRank: 52,
                    subditRank: 12,
                    player: "MARISSA",
                    score: 18366,
                  },
                  {
                    overallRank: 55,
                    subditRank: 13,
                    player: "ARIF NOTONEGORO",
                    score: 17901,
                  },
                  {
                    overallRank: 57,
                    subditRank: 14,
                    player: "MUHAMMAD ARFAN RUDIYANTO",
                    score: 17758,
                  },
                  {
                    overallRank: 64,
                    subditRank: 15,
                    player: "MUHAMAD IQBAL",
                    score: 16968,
                  },
                  {
                    overallRank: 69,
                    subditRank: 16,
                    player: "MOHAMAD ANDY BAHARUDDIN",
                    score: 16567,
                  },
                  {
                    overallRank: 79,
                    subditRank: 17,
                    player: "APRIYANTO WAHYU HANDOKO",
                    score: 15879,
                  },
                  {
                    overallRank: 80,
                    subditRank: 18,
                    player: "NIKMATUL HANIFAH SOFIA",
                    score: 15737,
                  },
                  {
                    overallRank: 81,
                    subditRank: 19,
                    player: "SHOPAN J. ENDRAWAN",
                    score: 15736,
                  },
                  {
                    overallRank: 82,
                    subditRank: 20,
                    player: "KARINA SARASATI SUWARTO",
                    score: 15428,
                  },
                  {
                    overallRank: 85,
                    subditRank: 21,
                    player: "DIAN LUFI HERNIATMOKO",
                    score: 14813,
                  },
                  {
                    overallRank: 88,
                    subditRank: 22,
                    player: "ACHMAD DWINATA",
                    score: 13386,
                  },
                ],
              },
            },
            {
              cutoff: "2026-08-16T00:00:00+07:00",
              results: {
                "subdit-1": [
                  {
                    "overallRank": 7,
                    "subditRank": 1,
                    "player": "SENO SANTIKA PAHLAWAN",
                    "score": 23096
                  },
                  {
                    "overallRank": 15,
                    "subditRank": 2,
                    "player": "MUHAMMAD RAMADHAN ZULFI",
                    "score": 22924
                  },
                  {
                    "overallRank": 22,
                    "subditRank": 3,
                    "player": "ISNAINI NURUL KHASANAH",
                    "score": 22571
                  },
                  {
                    "overallRank": 25,
                    "subditRank": 4,
                    "player": "ACHMAD HAMBALI",
                    "score": 22258
                  },
                  {
                    "overallRank": 27,
                    "subditRank": 5,
                    "player": "A`THFI RIJAL MUFIED",
                    "score": 22084
                  },
                  {
                    "overallRank": 33,
                    "subditRank": 6,
                    "player": "HIKMAH VICI PRATAMA",
                    "score": 21584
                  },
                  {
                    "overallRank": 35,
                    "subditRank": 7,
                    "player": "DANIEL SAHALA HUTABARAT",
                    "score": 21345
                  },
                  {
                    "overallRank": 40,
                    "subditRank": 8,
                    "player": "DINA ALIFATUL MA`RIFAH",
                    "score": 20480
                  },
                  {
                    "overallRank": 43,
                    "subditRank": 9,
                    "player": "ARDY EKO KARTONO",
                    "score": 19704
                  },
                  {
                    "overallRank": 45,
                    "subditRank": 10,
                    "player": "ASVARY",
                    "score": 19582
                  },
                  {
                    "overallRank": 51,
                    "subditRank": 11,
                    "player": "JENS NAKI",
                    "score": 19268
                  },
                  {
                    "overallRank": 58,
                    "subditRank": 12,
                    "player": "TANTI BUDI SETYORINI",
                    "score": 18210
                  },
                  {
                    "overallRank": 67,
                    "subditRank": 13,
                    "player": "RIZQA NULHUSNA",
                    "score": 17370
                  },
                  {
                    "overallRank": 68,
                    "subditRank": 14,
                    "player": "MUHAMMAD IQBAL",
                    "score": 17200
                  },
                  {
                    "overallRank": 77,
                    "subditRank": 15,
                    "player": "GRISELDA LIVIA",
                    "score": 16530
                  },
                  {
                    "overallRank": 82,
                    "subditRank": 16,
                    "player": "ERNITA YOLANDA BELVINSKY HUTABARAT",
                    "score": 16167
                  },
                  {
                    "overallRank": 90,
                    "subditRank": 17,
                    "player": "JESSICA RAHMAWATI NUGROHO",
                    "score": 15307
                  },
                  {
                    "overallRank": 96,
                    "subditRank": 18,
                    "player": "RIO MONANDA PUTRA",
                    "score": 13048
                  }
                ],
                "subdit-2": [
                  {
                    "overallRank": 1,
                    "subditRank": 1,
                    "player": "MONICA VIVI KURNIAWATI",
                    "score": 24072
                  },
                  {
                    "overallRank": 2,
                    "subditRank": 2,
                    "player": "ABDAN SYAKURO",
                    "score": 23777
                  },
                  {
                    "overallRank": 4,
                    "subditRank": 3,
                    "player": "REZA PAHLEVIE",
                    "score": 23214
                  },
                  {
                    "overallRank": 6,
                    "subditRank": 4,
                    "player": "SUNARKO",
                    "score": 23128
                  },
                  {
                    "overallRank": 10,
                    "subditRank": 5,
                    "player": "ANTONIUS JONET BINARTO",
                    "score": 22986
                  },
                  {
                    "overallRank": 12,
                    "subditRank": 6,
                    "player": "I PUTU AGUS JUNIARTHA",
                    "score": 22969
                  },
                  {
                    "overallRank": 14,
                    "subditRank": 7,
                    "player": "NORMAN RAMADHAN",
                    "score": 22959
                  },
                  {
                    "overallRank": 17,
                    "subditRank": 8,
                    "player": "LASER WILJONO",
                    "score": 22889
                  },
                  {
                    "overallRank": 20,
                    "subditRank": 9,
                    "player": "ABDUL ROKHIM",
                    "score": 22673
                  },
                  {
                    "overallRank": 21,
                    "subditRank": 10,
                    "player": "ABDUL FATTAH",
                    "score": 22649
                  },
                  {
                    "overallRank": 23,
                    "subditRank": 11,
                    "player": "IMAM SUTRISNO",
                    "score": 22407
                  },
                  {
                    "overallRank": 28,
                    "subditRank": 12,
                    "player": "SURYA ADI PRASETYA NUGRAHA",
                    "score": 22084
                  },
                  {
                    "overallRank": 30,
                    "subditRank": 13,
                    "player": "DWITA NEVITRIANI",
                    "score": 21975
                  },
                  {
                    "overallRank": 31,
                    "subditRank": 14,
                    "player": "MUHAMMAD RIZQA NAFIS",
                    "score": 21956
                  },
                  {
                    "overallRank": 39,
                    "subditRank": 15,
                    "player": "NANA SUPRIATNA",
                    "score": 20631
                  },
                  {
                    "overallRank": 42,
                    "subditRank": 16,
                    "player": "MEIBRIAN ANDREAS",
                    "score": 20074
                  },
                  {
                    "overallRank": 46,
                    "subditRank": 17,
                    "player": "RENDY KUI MOKOGINTA",
                    "score": 19537
                  },
                  {
                    "overallRank": 48,
                    "subditRank": 18,
                    "player": "HANIFAH ATSARIYANA",
                    "score": 19495
                  },
                  {
                    "overallRank": 52,
                    "subditRank": 19,
                    "player": "ADIP PRADIPTO ANINDYO",
                    "score": 19057
                  },
                  {
                    "overallRank": 53,
                    "subditRank": 20,
                    "player": "YASTIADI ENGGAR PRABOWO",
                    "score": 18752
                  },
                  {
                    "overallRank": 54,
                    "subditRank": 21,
                    "player": "YULIA ISLAMIATI",
                    "score": 18648
                  },
                  {
                    "overallRank": 56,
                    "subditRank": 22,
                    "player": "ACHMAD LUTHFI",
                    "score": 18533
                  },
                  {
                    "overallRank": 57,
                    "subditRank": 23,
                    "player": "MUHAMAD FAJRI YUSUF",
                    "score": 18424
                  },
                  {
                    "overallRank": 66,
                    "subditRank": 24,
                    "player": "ILHAM TISWAN",
                    "score": 17386
                  },
                  {
                    "overallRank": 70,
                    "subditRank": 25,
                    "player": "MOHAMMAD JUNUS",
                    "score": 17022
                  },
                  {
                    "overallRank": 72,
                    "subditRank": 26,
                    "player": "M. OTRYADI NAUFAL",
                    "score": 16912
                  },
                  {
                    "overallRank": 73,
                    "subditRank": 27,
                    "player": "MUHAMMAD LUTHFI",
                    "score": 16870
                  },
                  {
                    "overallRank": 74,
                    "subditRank": 28,
                    "player": "AGUNG UTOMO",
                    "score": 16862
                  },
                  {
                    "overallRank": 75,
                    "subditRank": 29,
                    "player": "NIA AULIA SITORUS",
                    "score": 16731
                  },
                  {
                    "overallRank": 78,
                    "subditRank": 30,
                    "player": "ASMUNI HARIS",
                    "score": 16440
                  },
                  {
                    "overallRank": 79,
                    "subditRank": 31,
                    "player": "SEPTIANA KURNIAWATI",
                    "score": 16437
                  },
                  {
                    "overallRank": 83,
                    "subditRank": 32,
                    "player": "ALFIN RIZKY RACHMAWANTO",
                    "score": 16166
                  },
                  {
                    "overallRank": 84,
                    "subditRank": 33,
                    "player": "SULARNO",
                    "score": 16076
                  },
                  {
                    "overallRank": 89,
                    "subditRank": 34,
                    "player": "GALANG RAMDHAN PRATAMA",
                    "score": 15416
                  },
                  {
                    "overallRank": 93,
                    "subditRank": 35,
                    "player": "WAHYU BUDIONO",
                    "score": 14334
                  },
                  {
                    "overallRank": 97,
                    "subditRank": 36,
                    "player": "MUHAMAD NASRUL MUHAIMIN",
                    "score": 12326
                  },
                  {
                    "overallRank": 99,
                    "subditRank": 37,
                    "player": "YUNI ANGGRAINI",
                    "score": 11349
                  },
                  {
                    "overallRank": 101,
                    "subditRank": 38,
                    "player": "DINI HARIAJI",
                    "score": 10165
                  }
                ],
                "subdit-3": [
                  {
                    "overallRank": 3,
                    "subditRank": 1,
                    "player": "HAWWIN RIZKI HERLIANTO",
                    "score": 23591
                  },
                  {
                    "overallRank": 5,
                    "subditRank": 2,
                    "player": "ARDIANSYAH ANDRE RIZAL FALAWI",
                    "score": 23177
                  },
                  {
                    "overallRank": 11,
                    "subditRank": 3,
                    "player": "AULIA OKTAVELLA PURNAMASARI",
                    "score": 22980
                  },
                  {
                    "overallRank": 13,
                    "subditRank": 4,
                    "player": "NOVITA VERA HARDIANTY HASIBUAN",
                    "score": 22968
                  },
                  {
                    "overallRank": 18,
                    "subditRank": 5,
                    "player": "NURSYAHFITRI PURBA",
                    "score": 22863
                  },
                  {
                    "overallRank": 19,
                    "subditRank": 6,
                    "player": "FAJAR HAKIKI",
                    "score": 22810
                  },
                  {
                    "overallRank": 29,
                    "subditRank": 7,
                    "player": "TEGUH PAMUJI",
                    "score": 22025
                  },
                  {
                    "overallRank": 32,
                    "subditRank": 8,
                    "player": "ANDINI NURAINI",
                    "score": 21895
                  },
                  {
                    "overallRank": 34,
                    "subditRank": 9,
                    "player": "DENI OKTA IRAWAN SEBAYANG",
                    "score": 21372
                  },
                  {
                    "overallRank": 37,
                    "subditRank": 10,
                    "player": "RAYANA JANWAR",
                    "score": 20802
                  },
                  {
                    "overallRank": 59,
                    "subditRank": 11,
                    "player": "AMRI TARMIZI",
                    "score": 18056
                  },
                  {
                    "overallRank": 62,
                    "subditRank": 12,
                    "player": "BRIAN PRADITAMA",
                    "score": 17795
                  },
                  {
                    "overallRank": 64,
                    "subditRank": 13,
                    "player": "JULIA A. BUTARBUTAR",
                    "score": 17591
                  },
                  {
                    "overallRank": 65,
                    "subditRank": 14,
                    "player": "MOH. FAISAL SHOLEHUDIN",
                    "score": 17419
                  },
                  {
                    "overallRank": 69,
                    "subditRank": 15,
                    "player": "YOGA PAMUNGKAS",
                    "score": 17023
                  },
                  {
                    "overallRank": 80,
                    "subditRank": 16,
                    "player": "DWI JOKO WIDODO",
                    "score": 16387
                  },
                  {
                    "overallRank": 81,
                    "subditRank": 17,
                    "player": "VINA SARI",
                    "score": 16223
                  },
                  {
                    "overallRank": 85,
                    "subditRank": 18,
                    "player": "NATALIA DESFRI HUTABARAT",
                    "score": 15978
                  },
                  {
                    "overallRank": 92,
                    "subditRank": 19,
                    "player": "IBRAHIM SALEH",
                    "score": 14416
                  },
                  {
                    "overallRank": 94,
                    "subditRank": 20,
                    "player": "WAHYU RIO MAHENDRA",
                    "score": 13539
                  },
                  {
                    "overallRank": 98,
                    "subditRank": 21,
                    "player": "ERWIN ADINUGRAHA",
                    "score": 11503
                  },
                  {
                    "overallRank": 100,
                    "subditRank": 22,
                    "player": "DESY DWI MARYATI",
                    "score": 11338
                  },
                  {
                    "overallRank": 102,
                    "subditRank": 23,
                    "player": "WAHYUNING TRI UTAMI",
                    "score": 9553
                  }
                ],
                "subdit-4": [],
                "subdit-5": [
                  {
                    "overallRank": 8,
                    "subditRank": 1,
                    "player": "MITA MUTIA REZA",
                    "score": 23047
                  },
                  {
                    "overallRank": 9,
                    "subditRank": 2,
                    "player": "MARTINUS HERAWAN",
                    "score": 23020
                  },
                  {
                    "overallRank": 16,
                    "subditRank": 3,
                    "player": "ELFA RISTA HANTALIS VICTORY",
                    "score": 22905
                  },
                  {
                    "overallRank": 24,
                    "subditRank": 4,
                    "player": "MARISSA",
                    "score": 22327
                  },
                  {
                    "overallRank": 26,
                    "subditRank": 5,
                    "player": "BAYU PRATAMA PUTRA",
                    "score": 22173
                  },
                  {
                    "overallRank": 36,
                    "subditRank": 6,
                    "player": "KARINA SARASATI SUWARTO",
                    "score": 21232
                  },
                  {
                    "overallRank": 38,
                    "subditRank": 7,
                    "player": "BAYU WIDYASTANTO",
                    "score": 20727
                  },
                  {
                    "overallRank": 41,
                    "subditRank": 8,
                    "player": "CAHYA ADHI KUSUMA",
                    "score": 20184
                  },
                  {
                    "overallRank": 44,
                    "subditRank": 9,
                    "player": "TEGUH WAHYU WIDODO",
                    "score": 19695
                  },
                  {
                    "overallRank": 47,
                    "subditRank": 10,
                    "player": "ANDY SETYO BARMANTO",
                    "score": 19519
                  },
                  {
                    "overallRank": 49,
                    "subditRank": 11,
                    "player": "JEFRI WIRADIPUTRA",
                    "score": 19332
                  },
                  {
                    "overallRank": 50,
                    "subditRank": 12,
                    "player": "THAMRIN WIDAYA",
                    "score": 19323
                  },
                  {
                    "overallRank": 55,
                    "subditRank": 13,
                    "player": "ALVIN IMANUEL",
                    "score": 18604
                  },
                  {
                    "overallRank": 60,
                    "subditRank": 14,
                    "player": "RINEKA LINGGA ANDANUMUSTI",
                    "score": 18004
                  },
                  {
                    "overallRank": 61,
                    "subditRank": 15,
                    "player": "ARIF NOTONEGORO",
                    "score": 17901
                  },
                  {
                    "overallRank": 63,
                    "subditRank": 16,
                    "player": "MUHAMMAD ARFAN RUDIYANTO",
                    "score": 17758
                  },
                  {
                    "overallRank": 71,
                    "subditRank": 17,
                    "player": "MUHAMAD IQBAL",
                    "score": 16968
                  },
                  {
                    "overallRank": 76,
                    "subditRank": 18,
                    "player": "MOHAMAD ANDY BAHARUDDIN",
                    "score": 16567
                  },
                  {
                    "overallRank": 86,
                    "subditRank": 19,
                    "player": "APRIYANTO WAHYU HANDOKO",
                    "score": 15879
                  },
                  {
                    "overallRank": 87,
                    "subditRank": 20,
                    "player": "NIKMATUL HANIFAH SOFIA",
                    "score": 15737
                  },
                  {
                    "overallRank": 88,
                    "subditRank": 21,
                    "player": "SHOPAN J. ENDRAWAN",
                    "score": 15736
                  },
                  {
                    "overallRank": 91,
                    "subditRank": 22,
                    "player": "DIAN LUFI HERNIATMOKO",
                    "score": 14813
                  },
                  {
                    "overallRank": 95,
                    "subditRank": 23,
                    "player": "ACHMAD DWINATA",
                    "score": 13386
                  }
                ]
              },
            },
            {
              cutoff: "2026-08-19T08:00:00+07:00",
              results: {
                "subdit-1": [
                  {
                    "overallRank": 7,
                    "subditRank": 1,
                    "player": "SENO SANTIKA PAHLAWAN",
                    "score": 23096
                  },
                  {
                    "overallRank": 15,
                    "subditRank": 2,
                    "player": "MUHAMMAD RAMADHAN ZULFI",
                    "score": 22924
                  },
                  {
                    "overallRank": 21,
                    "subditRank": 3,
                    "player": "ISNAINI NURUL KHASANAH",
                    "score": 22571
                  },
                  {
                    "overallRank": 24,
                    "subditRank": 4,
                    "player": "PRATAMA NURSAFARUL SUPRAYOGI",
                    "score": 22315
                  },
                  {
                    "overallRank": 25,
                    "subditRank": 5,
                    "player": "ACHMAD HAMBALI",
                    "score": 22258
                  },
                  {
                    "overallRank": 27,
                    "subditRank": 6,
                    "player": "A`THFI RIJAL MUFIED",
                    "score": 22084
                  },
                  {
                    "overallRank": 34,
                    "subditRank": 7,
                    "player": "HIKMAH VICI PRATAMA",
                    "score": 21584
                  },
                  {
                    "overallRank": 36,
                    "subditRank": 8,
                    "player": "DANIEL SAHALA HUTABARAT",
                    "score": 21345
                  },
                  {
                    "overallRank": 41,
                    "subditRank": 9,
                    "player": "DINA ALIFATUL MA`RIFAH",
                    "score": 20480
                  },
                  {
                    "overallRank": 44,
                    "subditRank": 10,
                    "player": "ARDY EKO KARTONO",
                    "score": 19704
                  },
                  {
                    "overallRank": 46,
                    "subditRank": 11,
                    "player": "ASVARY",
                    "score": 19582
                  },
                  {
                    "overallRank": 53,
                    "subditRank": 12,
                    "player": "JENS NAKI",
                    "score": 19268
                  },
                  {
                    "overallRank": 62,
                    "subditRank": 13,
                    "player": "TANTI BUDI SETYORINI",
                    "score": 18210
                  },
                  {
                    "overallRank": 70,
                    "subditRank": 14,
                    "player": "RIZQA NULHUSNA",
                    "score": 17370
                  },
                  {
                    "overallRank": 72,
                    "subditRank": 15,
                    "player": "MUHAMMAD IQBAL",
                    "score": 17200
                  },
                  {
                    "overallRank": 81,
                    "subditRank": 16,
                    "player": "EKA PURWANINGSIH",
                    "score": 16540
                  },
                  {
                    "overallRank": 82,
                    "subditRank": 17,
                    "player": "GRISELDA LIVIA",
                    "score": 16530
                  },
                  {
                    "overallRank": 87,
                    "subditRank": 18,
                    "player": "ERNITA YOLANDA BELVINSKY HUTABARAT",
                    "score": 16167
                  },
                  {
                    "overallRank": 96,
                    "subditRank": 19,
                    "player": "JESSICA RAHMAWATI NUGROHO",
                    "score": 15307
                  },
                  {
                    "overallRank": 102,
                    "subditRank": 20,
                    "player": "RIO MONANDA PUTRA",
                    "score": 13048
                  }
                ],
                "subdit-2": [
                  {
                    "overallRank": 1,
                    "subditRank": 1,
                    "player": "MONICA VIVI KURNIAWATI",
                    "score": 24072
                  },
                  {
                    "overallRank": 2,
                    "subditRank": 2,
                    "player": "ABDAN SYAKURO",
                    "score": 23777
                  },
                  {
                    "overallRank": 4,
                    "subditRank": 3,
                    "player": "REZA PAHLEVIE",
                    "score": 23214
                  },
                  {
                    "overallRank": 6,
                    "subditRank": 4,
                    "player": "SUNARKO",
                    "score": 23128
                  },
                  {
                    "overallRank": 10,
                    "subditRank": 5,
                    "player": "ANTONIUS JONET BINARTO",
                    "score": 22986
                  },
                  {
                    "overallRank": 12,
                    "subditRank": 6,
                    "player": "I PUTU AGUS JUNIARTHA",
                    "score": 22969
                  },
                  {
                    "overallRank": 14,
                    "subditRank": 7,
                    "player": "NORMAN RAMADHAN",
                    "score": 22959
                  },
                  {
                    "overallRank": 17,
                    "subditRank": 8,
                    "player": "LASER WILJONO",
                    "score": 22889
                  },
                  {
                    "overallRank": 19,
                    "subditRank": 9,
                    "player": "ABDUL ROKHIM",
                    "score": 22673
                  },
                  {
                    "overallRank": 20,
                    "subditRank": 10,
                    "player": "ABDUL FATTAH",
                    "score": 22649
                  },
                  {
                    "overallRank": 22,
                    "subditRank": 11,
                    "player": "IMAM SUTRISNO",
                    "score": 22407
                  },
                  {
                    "overallRank": 28,
                    "subditRank": 12,
                    "player": "SURYA ADI PRASETYA NUGRAHA",
                    "score": 22084
                  },
                  {
                    "overallRank": 30,
                    "subditRank": 13,
                    "player": "DWITA NEVITRIANI",
                    "score": 21975
                  },
                  {
                    "overallRank": 31,
                    "subditRank": 14,
                    "player": "MUHAMMAD RIZQA NAFIS",
                    "score": 21956
                  },
                  {
                    "overallRank": 33,
                    "subditRank": 15,
                    "player": "SYIFA ARIANDINI",
                    "score": 21694
                  },
                  {
                    "overallRank": 40,
                    "subditRank": 16,
                    "player": "NANA SUPRIATNA",
                    "score": 20631
                  },
                  {
                    "overallRank": 43,
                    "subditRank": 17,
                    "player": "MEIBRIAN ANDREAS",
                    "score": 20074
                  },
                  {
                    "overallRank": 47,
                    "subditRank": 18,
                    "player": "RENDY KUI MOKOGINTA",
                    "score": 19537
                  },
                  {
                    "overallRank": 49,
                    "subditRank": 19,
                    "player": "HANIFAH ATSARIYANA",
                    "score": 19495
                  },
                  {
                    "overallRank": 54,
                    "subditRank": 20,
                    "player": "ADIP PRADIPTO ANINDYO",
                    "score": 19057
                  },
                  {
                    "overallRank": 56,
                    "subditRank": 21,
                    "player": "YASTIADI ENGGAR PRABOWO",
                    "score": 18752
                  },
                  {
                    "overallRank": 57,
                    "subditRank": 22,
                    "player": "YULIA ISLAMIATI",
                    "score": 18648
                  },
                  {
                    "overallRank": 59,
                    "subditRank": 23,
                    "player": "ACHMAD LUTHFI",
                    "score": 18533
                  },
                  {
                    "overallRank": 60,
                    "subditRank": 24,
                    "player": "MUHAMAD FAJRI YUSUF",
                    "score": 18424
                  },
                  {
                    "overallRank": 69,
                    "subditRank": 25,
                    "player": "ILHAM TISWAN",
                    "score": 17386
                  },
                  {
                    "overallRank": 74,
                    "subditRank": 26,
                    "player": "MOHAMMAD JUNUS",
                    "score": 17022
                  },
                  {
                    "overallRank": 76,
                    "subditRank": 27,
                    "player": "M. OTRYADI NAUFAL",
                    "score": 16912
                  },
                  {
                    "overallRank": 77,
                    "subditRank": 28,
                    "player": "MUHAMMAD LUTHFI",
                    "score": 16870
                  },
                  {
                    "overallRank": 78,
                    "subditRank": 29,
                    "player": "AGUNG UTOMO",
                    "score": 16862
                  },
                  {
                    "overallRank": 79,
                    "subditRank": 30,
                    "player": "NIA AULIA SITORUS",
                    "score": 16731
                  },
                  {
                    "overallRank": 83,
                    "subditRank": 31,
                    "player": "ASMUNI HARIS",
                    "score": 16440
                  },
                  {
                    "overallRank": 84,
                    "subditRank": 32,
                    "player": "SEPTIANA KURNIAWATI",
                    "score": 16437
                  },
                  {
                    "overallRank": 88,
                    "subditRank": 33,
                    "player": "ALFIN RIZKY RACHMAWANTO",
                    "score": 16166
                  },
                  {
                    "overallRank": 89,
                    "subditRank": 34,
                    "player": "SULARNO",
                    "score": 16076
                  },
                  {
                    "overallRank": 95,
                    "subditRank": 35,
                    "player": "GALANG RAMDHAN PRATAMA",
                    "score": 15416
                  },
                  {
                    "overallRank": 99,
                    "subditRank": 36,
                    "player": "WAHYU BUDIONO",
                    "score": 14334
                  },
                  {
                    "overallRank": 104,
                    "subditRank": 37,
                    "player": "MUHAMAD NASRUL MUHAIMIN",
                    "score": 12326
                  },
                  {
                    "overallRank": 106,
                    "subditRank": 38,
                    "player": "YUNI ANGGRAINI",
                    "score": 11349
                  },
                  {
                    "overallRank": 108,
                    "subditRank": 39,
                    "player": "DINI HARIAJI",
                    "score": 10165
                  }
                ],
                "subdit-3": [
                  {
                    "overallRank": 3,
                    "subditRank": 1,
                    "player": "HAWWIN RIZKI HERLIANTO",
                    "score": 23591
                  },
                  {
                    "overallRank": 5,
                    "subditRank": 2,
                    "player": "ARDIANSYAH ANDRE RIZAL FALAWI",
                    "score": 23177
                  },
                  {
                    "overallRank": 11,
                    "subditRank": 3,
                    "player": "AULIA OKTAVELLA PURNAMASARI",
                    "score": 22980
                  },
                  {
                    "overallRank": 13,
                    "subditRank": 4,
                    "player": "NOVITA VERA HARDIANTY HASIBUAN",
                    "score": 22968
                  },
                  {
                    "overallRank": 18,
                    "subditRank": 5,
                    "player": "NURSYAHFITRI PURBA",
                    "score": 22863
                  },
                  {
                    "overallRank": 29,
                    "subditRank": 6,
                    "player": "TEGUH PAMUJI",
                    "score": 22025
                  },
                  {
                    "overallRank": 32,
                    "subditRank": 7,
                    "player": "ANDINI NURAINI",
                    "score": 21895
                  },
                  {
                    "overallRank": 35,
                    "subditRank": 8,
                    "player": "DENI OKTA IRAWAN SEBAYANG",
                    "score": 21372
                  },
                  {
                    "overallRank": 38,
                    "subditRank": 9,
                    "player": "RAYANA JANWAR",
                    "score": 20802
                  },
                  {
                    "overallRank": 63,
                    "subditRank": 10,
                    "player": "AMRI TARMIZI",
                    "score": 18056
                  },
                  {
                    "overallRank": 65,
                    "subditRank": 11,
                    "player": "BRIAN PRADITAMA",
                    "score": 17795
                  },
                  {
                    "overallRank": 67,
                    "subditRank": 12,
                    "player": "JULIA A. BUTARBUTAR",
                    "score": 17591
                  },
                  {
                    "overallRank": 68,
                    "subditRank": 13,
                    "player": "MOH. FAISAL SHOLEHUDIN",
                    "score": 17419
                  },
                  {
                    "overallRank": 73,
                    "subditRank": 14,
                    "player": "YOGA PAMUNGKAS",
                    "score": 17023
                  },
                  {
                    "overallRank": 85,
                    "subditRank": 15,
                    "player": "DWI JOKO WIDODO",
                    "score": 16387
                  },
                  {
                    "overallRank": 86,
                    "subditRank": 16,
                    "player": "VINA SARI",
                    "score": 16223
                  },
                  {
                    "overallRank": 90,
                    "subditRank": 17,
                    "player": "NATALIA DESFRI HUTABARAT",
                    "score": 15978
                  },
                  {
                    "overallRank": 98,
                    "subditRank": 18,
                    "player": "IBRAHIM SALEH",
                    "score": 14416
                  },
                  {
                    "overallRank": 100,
                    "subditRank": 19,
                    "player": "WAHYU RIO MAHENDRA",
                    "score": 13539
                  },
                  {
                    "overallRank": 105,
                    "subditRank": 20,
                    "player": "ERWIN ADINUGRAHA",
                    "score": 11503
                  },
                  {
                    "overallRank": 107,
                    "subditRank": 21,
                    "player": "DESY DWI MARYATI",
                    "score": 11338
                  },
                  {
                    "overallRank": 109,
                    "subditRank": 22,
                    "player": "WAHYUNING TRI UTAMI",
                    "score": 9553
                  }
                ],
                "subdit-4": [
                  {
                    "overallRank": 50,
                    "subditRank": 1,
                    "player": "TRI HERNAWATY",
                    "score": 19344
                  },
                  {
                    "overallRank": 61,
                    "subditRank": 2,
                    "player": "ADITYA HANNU CHRISTIAWAN",
                    "score": 18351
                  },
                  {
                    "overallRank": 71,
                    "subditRank": 3,
                    "player": "M. SYUKRAN HAKIM",
                    "score": 17344
                  },
                  {
                    "overallRank": 91,
                    "subditRank": 4,
                    "player": "LISA SAPUTRI",
                    "score": 15882
                  },
                  {
                    "overallRank": 103,
                    "subditRank": 5,
                    "player": "ROBI ALHADI",
                    "score": 12342
                  }
                ],
                "subdit-5": [
                  {
                    "overallRank": 8,
                    "subditRank": 1,
                    "player": "MITA MUTIA REZA",
                    "score": 23047
                  },
                  {
                    "overallRank": 9,
                    "subditRank": 2,
                    "player": "MARTINUS HERAWAN",
                    "score": 23020
                  },
                  {
                    "overallRank": 16,
                    "subditRank": 3,
                    "player": "ELFA RISTA HANTALIS VICTORY",
                    "score": 22905
                  },
                  {
                    "overallRank": 23,
                    "subditRank": 4,
                    "player": "MARISSA",
                    "score": 22327
                  },
                  {
                    "overallRank": 26,
                    "subditRank": 5,
                    "player": "BAYU PRATAMA PUTRA",
                    "score": 22173
                  },
                  {
                    "overallRank": 37,
                    "subditRank": 6,
                    "player": "KARINA SARASATI SUWARTO",
                    "score": 21232
                  },
                  {
                    "overallRank": 39,
                    "subditRank": 7,
                    "player": "BAYU WIDYASTANTO",
                    "score": 20727
                  },
                  {
                    "overallRank": 42,
                    "subditRank": 8,
                    "player": "CAHYA ADHI KUSUMA",
                    "score": 20184
                  },
                  {
                    "overallRank": 45,
                    "subditRank": 9,
                    "player": "TEGUH WAHYU WIDODO",
                    "score": 19695
                  },
                  {
                    "overallRank": 48,
                    "subditRank": 10,
                    "player": "ANDY SETYO BARMANTO",
                    "score": 19519
                  },
                  {
                    "overallRank": 51,
                    "subditRank": 11,
                    "player": "JEFRI WIRADIPUTRA",
                    "score": 19332
                  },
                  {
                    "overallRank": 52,
                    "subditRank": 12,
                    "player": "THAMRIN WIDAYA",
                    "score": 19323
                  },
                  {
                    "overallRank": 55,
                    "subditRank": 13,
                    "player": "ARIF NOTONEGORO",
                    "score": 18994
                  },
                  {
                    "overallRank": 58,
                    "subditRank": 14,
                    "player": "ALVIN IMANUEL",
                    "score": 18604
                  },
                  {
                    "overallRank": 64,
                    "subditRank": 15,
                    "player": "RINEKA LINGGA ANDANUMUSTI",
                    "score": 18004
                  },
                  {
                    "overallRank": 66,
                    "subditRank": 16,
                    "player": "MUHAMMAD ARFAN RUDIYANTO",
                    "score": 17758
                  },
                  {
                    "overallRank": 75,
                    "subditRank": 17,
                    "player": "MUHAMAD IQBAL",
                    "score": 16968
                  },
                  {
                    "overallRank": 80,
                    "subditRank": 18,
                    "player": "MOHAMAD ANDY BAHARUDDIN",
                    "score": 16567
                  },
                  {
                    "overallRank": 92,
                    "subditRank": 19,
                    "player": "APRIYANTO WAHYU HANDOKO",
                    "score": 15879
                  },
                  {
                    "overallRank": 93,
                    "subditRank": 20,
                    "player": "NIKMATUL HANIFAH SOFIA",
                    "score": 15737
                  },
                  {
                    "overallRank": 94,
                    "subditRank": 21,
                    "player": "SHOPAN J. ENDRAWAN",
                    "score": 15736
                  },
                  {
                    "overallRank": 97,
                    "subditRank": 22,
                    "player": "DIAN LUFI HERNIATMOKO",
                    "score": 14813
                  },
                  {
                    "overallRank": 101,
                    "subditRank": 23,
                    "player": "ACHMAD DWINATA",
                    "score": 13386
                  }
                ],
              },
            },
            {
              cutoff: "2026-08-21T07:00:00+07:00",
              results: {
                "subdit-1": [
                  {
                    "overallRank": 5,
                    "subditRank": 1,
                    "player": "HIKMAH VICI PRATAMA",
                    "score": 23509
                  },
                  {
                    "overallRank": 7,
                    "subditRank": 2,
                    "player": "SANDI EKA YUDHA",
                    "score": 23240
                  },
                  {
                    "overallRank": 13,
                    "subditRank": 3,
                    "player": "SENO SANTIKA PAHLAWAN",
                    "score": 23096
                  },
                  {
                    "overallRank": 15,
                    "subditRank": 4,
                    "player": "EKA PURWANINGSIH",
                    "score": 23030
                  },
                  {
                    "overallRank": 22,
                    "subditRank": 5,
                    "player": "MUHAMMAD RAMADHAN ZULFI",
                    "score": 22924
                  },
                  {
                    "overallRank": 28,
                    "subditRank": 6,
                    "player": "ISNAINI NURUL KHASANAH",
                    "score": 22571
                  },
                  {
                    "overallRank": 34,
                    "subditRank": 7,
                    "player": "PRATAMA NURSAFARUL SUPRAYOGI",
                    "score": 22315
                  },
                  {
                    "overallRank": 36,
                    "subditRank": 8,
                    "player": "ACHMAD HAMBALI",
                    "score": 22258
                  },
                  {
                    "overallRank": 40,
                    "subditRank": 9,
                    "player": "A`THFI RIJAL MUFIED",
                    "score": 22084
                  },
                  {
                    "overallRank": 49,
                    "subditRank": 10,
                    "player": "DANIEL SAHALA HUTABARAT",
                    "score": 21345
                  },
                  {
                    "overallRank": 50,
                    "subditRank": 11,
                    "player": "OKTI DIAN LINANDARI",
                    "score": 21281
                  },
                  {
                    "overallRank": 58,
                    "subditRank": 12,
                    "player": "GONDO HIMAWAN",
                    "score": 20572
                  },
                  {
                    "overallRank": 59,
                    "subditRank": 13,
                    "player": "DINA ALIFATUL MA`RIFAH",
                    "score": 20480
                  },
                  {
                    "overallRank": 63,
                    "subditRank": 14,
                    "player": "SIGIT WIBISONO",
                    "score": 19857
                  },
                  {
                    "overallRank": 64,
                    "subditRank": 15,
                    "player": "ARDY EKO KARTONO",
                    "score": 19704
                  },
                  {
                    "overallRank": 66,
                    "subditRank": 16,
                    "player": "ASVARY",
                    "score": 19582
                  },
                  {
                    "overallRank": 77,
                    "subditRank": 17,
                    "player": "JENS NAKI",
                    "score": 19268
                  },
                  {
                    "overallRank": 88,
                    "subditRank": 18,
                    "player": "FERDINAND ANDRE GINTING MUNTHE",
                    "score": 18352
                  },
                  {
                    "overallRank": 89,
                    "subditRank": 19,
                    "player": "TANTI BUDI SETYORINI",
                    "score": 18210
                  },
                  {
                    "overallRank": 90,
                    "subditRank": 20,
                    "player": "LAIFA HUMAIRO`",
                    "score": 18162
                  },
                  {
                    "overallRank": 100,
                    "subditRank": 21,
                    "player": "RIZQA NULHUSNA",
                    "score": 17370
                  },
                  {
                    "overallRank": 102,
                    "subditRank": 22,
                    "player": "MUHAMMAD IQBAL",
                    "score": 17200
                  },
                  {
                    "overallRank": 114,
                    "subditRank": 23,
                    "player": "GRISELDA LIVIA",
                    "score": 16530
                  },
                  {
                    "overallRank": 121,
                    "subditRank": 24,
                    "player": "ERNITA YOLANDA BELVINSKY HUTABARAT",
                    "score": 16167
                  },
                  {
                    "overallRank": 136,
                    "subditRank": 25,
                    "player": "JESSICA RAHMAWATI NUGROHO",
                    "score": 15307
                  },
                  {
                    "overallRank": 144,
                    "subditRank": 26,
                    "player": "AGUS EKO PRIYONO",
                    "score": 13367
                  },
                  {
                    "overallRank": 145,
                    "subditRank": 27,
                    "player": "RIO MONANDA PUTRA",
                    "score": 13048
                  },
                  {
                    "overallRank": 156,
                    "subditRank": 28,
                    "player": "JANUAR NILA PRATIWI",
                    "score": 1870
                  }
                ],
                "subdit-2": [
                  {
                    "overallRank": 1,
                    "subditRank": 1,
                    "player": "ABDUL ROKHIM",
                    "score": 24969
                  },
                  {
                    "overallRank": 2,
                    "subditRank": 2,
                    "player": "MONICA VIVI KURNIAWATI",
                    "score": 24072
                  },
                  {
                    "overallRank": 3,
                    "subditRank": 3,
                    "player": "ABDAN SYAKURO",
                    "score": 23777
                  },
                  {
                    "overallRank": 8,
                    "subditRank": 4,
                    "player": "REZA PAHLEVIE",
                    "score": 23214
                  },
                  {
                    "overallRank": 12,
                    "subditRank": 5,
                    "player": "MEIBRIAN ANDREAS",
                    "score": 23128
                  },
                  {
                    "overallRank": 16,
                    "subditRank": 6,
                    "player": "ANTONIUS JONET BINARTO",
                    "score": 22986
                  },
                  {
                    "overallRank": 18,
                    "subditRank": 7,
                    "player": "I PUTU AGUS JUNIARTHA",
                    "score": 22969
                  },
                  {
                    "overallRank": 20,
                    "subditRank": 8,
                    "player": "NORMAN RAMADHAN",
                    "score": 22959
                  },
                  {
                    "overallRank": 24,
                    "subditRank": 9,
                    "player": "LASER WILJONO",
                    "score": 22889
                  },
                  {
                    "overallRank": 26,
                    "subditRank": 10,
                    "player": "ABDUL FATTAH",
                    "score": 22649
                  },
                  {
                    "overallRank": 31,
                    "subditRank": 11,
                    "player": "IMAM SUTRISNO",
                    "score": 22407
                  },
                  {
                    "overallRank": 41,
                    "subditRank": 12,
                    "player": "MUHAMMAD SURYA YOGA MUTTAQIN",
                    "score": 22084
                  },
                  {
                    "overallRank": 43,
                    "subditRank": 13,
                    "player": "DWITA NEVITRIANI",
                    "score": 21975
                  },
                  {
                    "overallRank": 44,
                    "subditRank": 14,
                    "player": "MUHAMMAD RIZQA NAFIS",
                    "score": 21956
                  },
                  {
                    "overallRank": 46,
                    "subditRank": 15,
                    "player": "SYIFA ARIANDINI",
                    "score": 21694
                  },
                  {
                    "overallRank": 57,
                    "subditRank": 16,
                    "player": "NANA SUPRIATNA",
                    "score": 20631
                  },
                  {
                    "overallRank": 67,
                    "subditRank": 17,
                    "player": "RENDY KUI MOKOGINTA",
                    "score": 19537
                  },
                  {
                    "overallRank": 69,
                    "subditRank": 18,
                    "player": "HANIFAH ATSARIYANA",
                    "score": 19495
                  },
                  {
                    "overallRank": 70,
                    "subditRank": 19,
                    "player": "SETIADI DARMAWAN",
                    "score": 19389
                  },
                  {
                    "overallRank": 75,
                    "subditRank": 20,
                    "player": "EVI MARYAM",
                    "score": 19294
                  },
                  {
                    "overallRank": 78,
                    "subditRank": 21,
                    "player": "ADIP PRADIPTO ANINDYO",
                    "score": 19057
                  },
                  {
                    "overallRank": 81,
                    "subditRank": 22,
                    "player": "YASTIADI ENGGAR PRABOWO",
                    "score": 18752
                  },
                  {
                    "overallRank": 82,
                    "subditRank": 23,
                    "player": "YULIA ISLAMIATI",
                    "score": 18648
                  },
                  {
                    "overallRank": 84,
                    "subditRank": 24,
                    "player": "ACHMAD LUTHFI",
                    "score": 18533
                  },
                  {
                    "overallRank": 86,
                    "subditRank": 25,
                    "player": "MUHAMAD FAJRI YUSUF",
                    "score": 18424
                  },
                  {
                    "overallRank": 98,
                    "subditRank": 26,
                    "player": "ILHAM TISWAN",
                    "score": 17386
                  },
                  {
                    "overallRank": 105,
                    "subditRank": 27,
                    "player": "MOHAMMAD JUNUS",
                    "score": 17022
                  },
                  {
                    "overallRank": 107,
                    "subditRank": 28,
                    "player": "M. OTRYADI NAUFAL",
                    "score": 16912
                  },
                  {
                    "overallRank": 108,
                    "subditRank": 29,
                    "player": "MUHAMMAD LUTHFI",
                    "score": 16870
                  },
                  {
                    "overallRank": 109,
                    "subditRank": 30,
                    "player": "AGUNG UTOMO",
                    "score": 16862
                  },
                  {
                    "overallRank": 111,
                    "subditRank": 31,
                    "player": "NIA AULIA SITORUS",
                    "score": 16731
                  },
                  {
                    "overallRank": 116,
                    "subditRank": 32,
                    "player": "ASMUNI HARIS",
                    "score": 16440
                  },
                  {
                    "overallRank": 117,
                    "subditRank": 33,
                    "player": "SEPTIANA KURNIAWATI",
                    "score": 16437
                  },
                  {
                    "overallRank": 122,
                    "subditRank": 34,
                    "player": "ALFIN RIZKY RACHMAWANTO",
                    "score": 16166
                  },
                  {
                    "overallRank": 123,
                    "subditRank": 35,
                    "player": "SULARNO",
                    "score": 16076
                  },
                  {
                    "overallRank": 124,
                    "subditRank": 36,
                    "player": "HISYAM KAZIM",
                    "score": 16038
                  },
                  {
                    "overallRank": 126,
                    "subditRank": 37,
                    "player": "GITA ANISA UTAMI",
                    "score": 15919
                  },
                  {
                    "overallRank": 133,
                    "subditRank": 38,
                    "player": "AZIZ KHOIRUL FIKRI",
                    "score": 15596
                  },
                  {
                    "overallRank": 135,
                    "subditRank": 39,
                    "player": "GALANG RAMDHAN PRATAMA",
                    "score": 15416
                  },
                  {
                    "overallRank": 142,
                    "subditRank": 40,
                    "player": "WAHYU BUDIONO",
                    "score": 14334
                  },
                  {
                    "overallRank": 146,
                    "subditRank": 41,
                    "player": "MUHAMMAD BAKTI ISLAMY",
                    "score": 12737
                  },
                  {
                    "overallRank": 147,
                    "subditRank": 42,
                    "player": "MUHAMAD NASRUL MUHAIMIN",
                    "score": 12326
                  },
                  {
                    "overallRank": 150,
                    "subditRank": 43,
                    "player": "YUNI ANGGRAINI",
                    "score": 11349
                  },
                  {
                    "overallRank": 152,
                    "subditRank": 44,
                    "player": "DINI HARIAJI",
                    "score": 10165
                  }
                ],
                "subdit-3": [
                  {
                    "overallRank": 4,
                    "subditRank": 1,
                    "player": "HAWWIN RIZKI HERLIANTO",
                    "score": 23591
                  },
                  {
                    "overallRank": 10,
                    "subditRank": 2,
                    "player": "ARDIANSYAH ANDRE RIZAL FALAWI",
                    "score": 23177
                  },
                  {
                    "overallRank": 17,
                    "subditRank": 3,
                    "player": "AULIA OKTAVELLA PURNAMASARI",
                    "score": 22980
                  },
                  {
                    "overallRank": 19,
                    "subditRank": 4,
                    "player": "NOVITA VERA HARDIANTY HASIBUAN",
                    "score": 22968
                  },
                  {
                    "overallRank": 25,
                    "subditRank": 5,
                    "player": "NURSYAHFITRI PURBA",
                    "score": 22863
                  },
                  {
                    "overallRank": 32,
                    "subditRank": 6,
                    "player": "ATRI HARIS",
                    "score": 22340
                  },
                  {
                    "overallRank": 35,
                    "subditRank": 7,
                    "player": "MUHAMMAD SYAIFUDIN",
                    "score": 22298
                  },
                  {
                    "overallRank": 42,
                    "subditRank": 8,
                    "player": "TEGUH PAMUJI",
                    "score": 22025
                  },
                  {
                    "overallRank": 45,
                    "subditRank": 9,
                    "player": "ANDINI NURAINI",
                    "score": 21895
                  },
                  {
                    "overallRank": 48,
                    "subditRank": 10,
                    "player": "DENI OKTA IRAWAN SEBAYANG",
                    "score": 21372
                  },
                  {
                    "overallRank": 54,
                    "subditRank": 11,
                    "player": "RAYANA JANWAR",
                    "score": 20802
                  },
                  {
                    "overallRank": 76,
                    "subditRank": 12,
                    "player": "JULI RACHMAWATI",
                    "score": 19275
                  },
                  {
                    "overallRank": 85,
                    "subditRank": 13,
                    "player": "FACHRUR BIMO PRASETYO",
                    "score": 18445
                  },
                  {
                    "overallRank": 91,
                    "subditRank": 14,
                    "player": "AMRI TARMIZI",
                    "score": 18056
                  },
                  {
                    "overallRank": 92,
                    "subditRank": 15,
                    "player": "BRIAN PRADITAMA",
                    "score": 17795
                  },
                  {
                    "overallRank": 94,
                    "subditRank": 16,
                    "player": "SABAT AWAN AGUSTI MAHARDIKA",
                    "score": 17719
                  },
                  {
                    "overallRank": 96,
                    "subditRank": 17,
                    "player": "JULIA A. BUTARBUTAR",
                    "score": 17591
                  },
                  {
                    "overallRank": 97,
                    "subditRank": 18,
                    "player": "MOH. FAISAL SHOLEHUDIN",
                    "score": 17419
                  },
                  {
                    "overallRank": 104,
                    "subditRank": 19,
                    "player": "YOGA PAMUNGKAS",
                    "score": 17023
                  },
                  {
                    "overallRank": 112,
                    "subditRank": 20,
                    "player": "HERU WIDJAKSONO",
                    "score": 16659
                  },
                  {
                    "overallRank": 115,
                    "subditRank": 21,
                    "player": "ROKY KOSTANTO",
                    "score": 16521
                  },
                  {
                    "overallRank": 119,
                    "subditRank": 22,
                    "player": "DWI JOKO WIDODO",
                    "score": 16387
                  },
                  {
                    "overallRank": 120,
                    "subditRank": 23,
                    "player": "VINA SARI",
                    "score": 16223
                  },
                  {
                    "overallRank": 125,
                    "subditRank": 24,
                    "player": "NATALIA DESFRI HUTABARAT",
                    "score": 15978
                  },
                  {
                    "overallRank": 127,
                    "subditRank": 25,
                    "player": "NASYAROBBY NUGRAHA PUTRA",
                    "score": 15895
                  },
                  {
                    "overallRank": 130,
                    "subditRank": 26,
                    "player": "SASONGKO ARI WIBOWO",
                    "score": 15779
                  },
                  {
                    "overallRank": 140,
                    "subditRank": 27,
                    "player": "WAHYU RIO MAHENDRA",
                    "score": 14457
                  },
                  {
                    "overallRank": 141,
                    "subditRank": 28,
                    "player": "IBRAHIM SALEH",
                    "score": 14416
                  },
                  {
                    "overallRank": 149,
                    "subditRank": 29,
                    "player": "ERWIN ADINUGRAHA",
                    "score": 11503
                  },
                  {
                    "overallRank": 151,
                    "subditRank": 30,
                    "player": "DESY DWI MARYATI",
                    "score": 11338
                  },
                  {
                    "overallRank": 153,
                    "subditRank": 31,
                    "player": "WAHYUNING TRI UTAMI",
                    "score": 9553
                  },
                  {
                    "overallRank": 154,
                    "subditRank": 32,
                    "player": "HERDYONO",
                    "score": 6126
                  }
                ],
                "subdit-4": [
                  {
                    "overallRank": 29,
                    "subditRank": 1,
                    "player": "ADITYA HANNU CHRISTIAWAN",
                    "score": 22450
                  },
                  {
                    "overallRank": 39,
                    "subditRank": 2,
                    "player": "MUHAMMAD NAAFI` AKBAR MUHARAM",
                    "score": 22095
                  },
                  {
                    "overallRank": 47,
                    "subditRank": 3,
                    "player": "MUHAMMAD ISNAINI KARIL",
                    "score": 21390
                  },
                  {
                    "overallRank": 52,
                    "subditRank": 4,
                    "player": "MUHAMMAD DIKA ASSIDIKA HUSEIN",
                    "score": 21206
                  },
                  {
                    "overallRank": 53,
                    "subditRank": 5,
                    "player": "LISA SAPUTRI",
                    "score": 20831
                  },
                  {
                    "overallRank": 60,
                    "subditRank": 6,
                    "player": "TRI HERNAWATY",
                    "score": 20220
                  },
                  {
                    "overallRank": 79,
                    "subditRank": 7,
                    "player": "VIKY AHMAD YUSUF",
                    "score": 19028
                  },
                  {
                    "overallRank": 87,
                    "subditRank": 8,
                    "player": "RISMAWANTO",
                    "score": 18369
                  },
                  {
                    "overallRank": 101,
                    "subditRank": 9,
                    "player": "M. SYUKRAN HAKIM",
                    "score": 17344
                  },
                  {
                    "overallRank": 103,
                    "subditRank": 10,
                    "player": "RANGGA AJIE DEWANTARA",
                    "score": 17140
                  },
                  {
                    "overallRank": 110,
                    "subditRank": 11,
                    "player": "AFIFAH RYZA ADININGSIH",
                    "score": 16840
                  },
                  {
                    "overallRank": 118,
                    "subditRank": 12,
                    "player": "ROBI ALHADI",
                    "score": 16397
                  },
                  {
                    "overallRank": 137,
                    "subditRank": 13,
                    "player": "ANDIKA PRAYOGA",
                    "score": 15054
                  },
                  {
                    "overallRank": 138,
                    "subditRank": 14,
                    "player": "RIAN BAGOES PAMUNGKAS",
                    "score": 14919
                  },
                  {
                    "overallRank": 139,
                    "subditRank": 15,
                    "player": "MUHAMMAD WASIS WICAKSONO",
                    "score": 14477
                  },
                  {
                    "overallRank": 148,
                    "subditRank": 16,
                    "player": "TEGUH WAHYUWIDIYANTO",
                    "score": 11567
                  }
                ],
                "subdit-5": [
                  {
                    "overallRank": 6,
                    "subditRank": 1,
                    "player": "GORBY SABRINA",
                    "score": 23439
                  },
                  {
                    "overallRank": 9,
                    "subditRank": 2,
                    "player": "MARTINUS HERAWAN",
                    "score": 23180
                  },
                  {
                    "overallRank": 11,
                    "subditRank": 3,
                    "player": "R. YANUAR ISTANTO",
                    "score": 23146
                  },
                  {
                    "overallRank": 14,
                    "subditRank": 4,
                    "player": "MITA MUTIA REZA",
                    "score": 23047
                  },
                  {
                    "overallRank": 21,
                    "subditRank": 5,
                    "player": "YOGA ADI PRADANA",
                    "score": 22926
                  },
                  {
                    "overallRank": 23,
                    "subditRank": 6,
                    "player": "ELFA RISTA HANTALIS VICTORY",
                    "score": 22905
                  },
                  {
                    "overallRank": 27,
                    "subditRank": 7,
                    "player": "NATASYA CHOTIJAH WULANDARI",
                    "score": 22584
                  },
                  {
                    "overallRank": 30,
                    "subditRank": 8,
                    "player": "BAYU DWIANTO",
                    "score": 22428
                  },
                  {
                    "overallRank": 33,
                    "subditRank": 9,
                    "player": "MARISSA",
                    "score": 22327
                  },
                  {
                    "overallRank": 38,
                    "subditRank": 10,
                    "player": "BAYU PRATAMA PUTRA",
                    "score": 22173
                  },
                  {
                    "overallRank": 51,
                    "subditRank": 11,
                    "player": "KARINA SARASATI SUWARTO",
                    "score": 21232
                  },
                  {
                    "overallRank": 55,
                    "subditRank": 12,
                    "player": "CINTIA AULIYA",
                    "score": 20781
                  },
                  {
                    "overallRank": 56,
                    "subditRank": 13,
                    "player": "BAYU WIDYASTANTO",
                    "score": 20727
                  },
                  {
                    "overallRank": 61,
                    "subditRank": 14,
                    "player": "ANALIA ROHMATUL CAHYANI",
                    "score": 20184
                  },
                  {
                    "overallRank": 62,
                    "subditRank": 15,
                    "player": "RINEKA LINGGA ANDANUMUSTI",
                    "score": 19959
                  },
                  {
                    "overallRank": 65,
                    "subditRank": 16,
                    "player": "TEGUH WAHYU WIDODO",
                    "score": 19695
                  },
                  {
                    "overallRank": 68,
                    "subditRank": 17,
                    "player": "ANDY SETYO BARMANTO",
                    "score": 19519
                  },
                  {
                    "overallRank": 71,
                    "subditRank": 18,
                    "player": "KENNY RITCHIE BARUS",
                    "score": 19338
                  },
                  {
                    "overallRank": 72,
                    "subditRank": 19,
                    "player": "JEFRI WIRADIPUTRA",
                    "score": 19332
                  },
                  {
                    "overallRank": 73,
                    "subditRank": 20,
                    "player": "SHOPAN J. ENDRAWAN",
                    "score": 19331
                  },
                  {
                    "overallRank": 74,
                    "subditRank": 21,
                    "player": "THAMRIN WIDAYA",
                    "score": 19323
                  },
                  {
                    "overallRank": 80,
                    "subditRank": 22,
                    "player": "ARIF NOTONEGORO",
                    "score": 18994
                  },
                  {
                    "overallRank": 83,
                    "subditRank": 23,
                    "player": "ALVIN IMANUEL",
                    "score": 18604
                  },
                  {
                    "overallRank": 93,
                    "subditRank": 24,
                    "player": "MUHAMMAD ARFAN RUDIYANTO",
                    "score": 17758
                  },
                  {
                    "overallRank": 95,
                    "subditRank": 25,
                    "player": "MOHAMMAD HENDRA LAKSONO",
                    "score": 17673
                  },
                  {
                    "overallRank": 99,
                    "subditRank": 26,
                    "player": "HADIYAN MUKHOLISIN",
                    "score": 17374
                  },
                  {
                    "overallRank": 106,
                    "subditRank": 27,
                    "player": "MUHAMAD IQBAL",
                    "score": 16968
                  },
                  {
                    "overallRank": 113,
                    "subditRank": 28,
                    "player": "MOHAMAD ANDY BAHARUDDIN",
                    "score": 16567
                  },
                  {
                    "overallRank": 128,
                    "subditRank": 29,
                    "player": "APRIYANTO WAHYU HANDOKO",
                    "score": 15879
                  },
                  {
                    "overallRank": 129,
                    "subditRank": 30,
                    "player": "MUSLIH",
                    "score": 15785
                  },
                  {
                    "overallRank": 131,
                    "subditRank": 31,
                    "player": "NIKMATUL HANIFAH SOFIA",
                    "score": 15737
                  },
                  {
                    "overallRank": 132,
                    "subditRank": 32,
                    "player": "DIAN LUFI HERNIATMOKO",
                    "score": 15735
                  },
                  {
                    "overallRank": 134,
                    "subditRank": 33,
                    "player": "IGNATIUS GANDA KURNIAWAN",
                    "score": 15464
                  },
                  {
                    "overallRank": 143,
                    "subditRank": 34,
                    "player": "ACHMAD DWINATA",
                    "score": 13386
                  },
                  {
                    "overallRank": 155,
                    "subditRank": 35,
                    "player": "JEFRI INVOLA SARAGIH",
                    "score": 2677
                  }
                ],
              },
            },
            {
              cutoff: "2026-08-22T00:00:00+07:00",
              results: {
                "subdit-1": [
                  {
                    overallRank: 5,
                    subditRank: 1,
                    player: "HIKMAH VICI PRATAMA",
                    score: 23509,
                  },
                  {
                    overallRank: 8,
                    subditRank: 2,
                    player: "MUHAMMAD RAMADHAN ZULFI",
                    score: 23410,
                  },
                  {
                    overallRank: 9,
                    subditRank: 3,
                    player: "SANDI EKA YUDHA",
                    score: 23240,
                  },
                  {
                    overallRank: 15,
                    subditRank: 4,
                    player: "ONY HUMARSENO",
                    score: 23096,
                  },
                  {
                    overallRank: 17,
                    subditRank: 5,
                    player: "EKA PURWANINGSIH",
                    score: 23030,
                  },
                  {
                    overallRank: 29,
                    subditRank: 6,
                    player: "ISNAINI NURUL KHASANAH",
                    score: 22571,
                  },
                  {
                    overallRank: 37,
                    subditRank: 7,
                    player: "PRATAMA NURSAFARUL SUPRAYOGI",
                    score: 22315,
                  },
                  {
                    overallRank: 39,
                    subditRank: 8,
                    player: "ACHMAD HAMBALI",
                    score: 22258,
                  },
                  {
                    overallRank: 42,
                    subditRank: 9,
                    player: "A`THFI RIJAL MUFIED",
                    score: 22084,
                  },
                  {
                    overallRank: 54,
                    subditRank: 10,
                    player: "DANIEL SAHALA HUTABARAT",
                    score: 21345,
                  },
                  {
                    overallRank: 55,
                    subditRank: 11,
                    player: "OKTI DIAN LINANDARI",
                    score: 21281,
                  },
                  {
                    overallRank: 58,
                    subditRank: 12,
                    player: "RAHMA UTAMI",
                    score: 21089,
                  },
                  {
                    overallRank: 63,
                    subditRank: 13,
                    player: "GONDO HIMAWAN",
                    score: 20572,
                  },
                  {
                    overallRank: 64,
                    subditRank: 14,
                    player: "DINA ALIFATUL MA`RIFAH",
                    score: 20480,
                  },
                  {
                    overallRank: 69,
                    subditRank: 15,
                    player: "GRISELDA LIVIA",
                    score: 20033,
                  },
                  {
                    overallRank: 71,
                    subditRank: 16,
                    player: "SIGIT WIBISONO",
                    score: 19857,
                  },
                  {
                    overallRank: 72,
                    subditRank: 17,
                    player: "ARDY EKO KARTONO",
                    score: 19704,
                  },
                  {
                    overallRank: 76,
                    subditRank: 18,
                    player: "ASVARY",
                    score: 19582,
                  },
                  {
                    overallRank: 80,
                    subditRank: 19,
                    player: "RONALDO REFORMER SILITONGA",
                    score: 19495,
                  },
                  {
                    overallRank: 87,
                    subditRank: 20,
                    player: "JENS NAKI",
                    score: 19268,
                  },
                  {
                    overallRank: 91,
                    subditRank: 21,
                    player: "MUHAMMAD IQBAL",
                    score: 18780,
                  },
                  {
                    overallRank: 99,
                    subditRank: 22,
                    player: "FERDINAND ANDRE GINTING MUNTHE",
                    score: 18352,
                  },
                  {
                    overallRank: 100,
                    subditRank: 23,
                    player: "TANTI BUDI SETYORINI",
                    score: 18210,
                  },
                  {
                    overallRank: 101,
                    subditRank: 24,
                    player: "LAIFA HUMAIRO`",
                    score: 18162,
                  },
                  {
                    overallRank: 112,
                    subditRank: 25,
                    player: "RIZQA NULHUSNA",
                    score: 17370,
                  },
                  {
                    overallRank: 132,
                    subditRank: 26,
                    player: "ERNITA YOLANDA BELVINSKY HUTABARAT",
                    score: 16167,
                  },
                  {
                    overallRank: 145,
                    subditRank: 27,
                    player: "JESSICA RAHMAWATI NUGROHO",
                    score: 15307,
                  },
                  {
                    overallRank: 158,
                    subditRank: 28,
                    player: "AGUS EKO PRIYONO",
                    score: 13367,
                  },
                  {
                    overallRank: 159,
                    subditRank: 29,
                    player: "RIO MONANDA PUTRA",
                    score: 13048,
                  },
                  {
                    overallRank: 169,
                    subditRank: 30,
                    player: "JANUAR NILA PRATIWI",
                    score: 1870,
                  },
                ],
                "subdit-2": [
                  {
                    overallRank: 1,
                    subditRank: 1,
                    player: "ABDUL ROKHIM",
                    score: 24969,
                  },
                  {
                    overallRank: 2,
                    subditRank: 2,
                    player: "MONICA VIVI KURNIAWATI",
                    score: 24072,
                  },
                  {
                    overallRank: 3,
                    subditRank: 3,
                    player: "ABDAN SYAKURO",
                    score: 23777,
                  },
                  {
                    overallRank: 10,
                    subditRank: 4,
                    player: "REZA PAHLEVIE",
                    score: 23214,
                  },
                  {
                    overallRank: 14,
                    subditRank: 5,
                    player: "SUNARKO",
                    score: 23128,
                  },
                  {
                    overallRank: 18,
                    subditRank: 6,
                    player: "ANTONIUS JONET BINARTO",
                    score: 22986,
                  },
                  {
                    overallRank: 20,
                    subditRank: 7,
                    player: "I PUTU AGUS JUNIARTHA",
                    score: 22969,
                  },
                  {
                    overallRank: 22,
                    subditRank: 8,
                    player: "NORMAN RAMADHAN",
                    score: 22959,
                  },
                  {
                    overallRank: 25,
                    subditRank: 9,
                    player: "LASER WILJONO",
                    score: 22889,
                  },
                  {
                    overallRank: 27,
                    subditRank: 10,
                    player: "ABDUL FATTAH",
                    score: 22649,
                  },
                  {
                    overallRank: 33,
                    subditRank: 11,
                    player: "IMAM SUTRISNO",
                    score: 22407,
                  },
                  {
                    overallRank: 43,
                    subditRank: 12,
                    player: "SURYA ADI PRASETYA NUGRAHA",
                    score: 22084,
                  },
                  {
                    overallRank: 45,
                    subditRank: 13,
                    player: "DWITA NEVITRIANI",
                    score: 21975,
                  },
                  {
                    overallRank: 46,
                    subditRank: 14,
                    player: "MUHAMMAD RIZQA NAFIS",
                    score: 21956,
                  },
                  {
                    overallRank: 49,
                    subditRank: 15,
                    player: "SYIFA ARIANDINI",
                    score: 21694,
                  },
                  {
                    overallRank: 50,
                    subditRank: 16,
                    player: "NANA SUPRIATNA",
                    score: 21655,
                  },
                  {
                    overallRank: 68,
                    subditRank: 17,
                    player: "MEIBRIAN ANDREAS",
                    score: 20074,
                  },
                  {
                    overallRank: 77,
                    subditRank: 18,
                    player: "RENDY KUI MOKOGINTA",
                    score: 19537,
                  },
                  {
                    overallRank: 79,
                    subditRank: 19,
                    player: "HANIFAH ATSARIYANA",
                    score: 19495,
                  },
                  {
                    overallRank: 81,
                    subditRank: 20,
                    player: "SETIADI DARMAWAN",
                    score: 19389,
                  },
                  {
                    overallRank: 85,
                    subditRank: 21,
                    player: "EVI MARYAM",
                    score: 19294,
                  },
                  {
                    overallRank: 88,
                    subditRank: 22,
                    player: "ADIP PRADIPTO ANINDYO",
                    score: 19057,
                  },
                  {
                    overallRank: 92,
                    subditRank: 23,
                    player: "YASTIADI ENGGAR PRABOWO",
                    score: 18752,
                  },
                  {
                    overallRank: 95,
                    subditRank: 24,
                    player: "YULIA ISLAMIATI",
                    score: 18648,
                  },
                  {
                    overallRank: 97,
                    subditRank: 25,
                    player: "ACHMAD LUTHFI",
                    score: 18533,
                  },
                  {
                    overallRank: 98,
                    subditRank: 26,
                    player: "MUHAMAD FAJRI YUSUF",
                    score: 18424,
                  },
                  {
                    overallRank: 110,
                    subditRank: 27,
                    player: "ILHAM TISWAN",
                    score: 17386,
                  },
                  {
                    overallRank: 117,
                    subditRank: 28,
                    player: "MOHAMMAD JUNUS",
                    score: 17022,
                  },
                  {
                    overallRank: 119,
                    subditRank: 29,
                    player: "M. OTRYADI NAUFAL",
                    score: 16912,
                  },
                  {
                    overallRank: 120,
                    subditRank: 30,
                    player: "MUHAMMAD LUTHFI",
                    score: 16870,
                  },
                  {
                    overallRank: 121,
                    subditRank: 31,
                    player: "AGUNG UTOMO",
                    score: 16862,
                  },
                  {
                    overallRank: 123,
                    subditRank: 32,
                    player: "NIA AULIA SITORUS",
                    score: 16731,
                  },
                  {
                    overallRank: 128,
                    subditRank: 33,
                    player: "ASMUNI HARIS",
                    score: 16440,
                  },
                  {
                    overallRank: 129,
                    subditRank: 34,
                    player: "SEPTIANA KURNIAWATI",
                    score: 16437,
                  },
                  {
                    overallRank: 133,
                    subditRank: 35,
                    player: "ALFIN RIZKY RACHMAWANTO",
                    score: 16166,
                  },
                  {
                    overallRank: 134,
                    subditRank: 36,
                    player: "SULARNO",
                    score: 16076,
                  },
                  {
                    overallRank: 135,
                    subditRank: 37,
                    player: "HISYAM KAZIM",
                    score: 16038,
                  },
                  {
                    overallRank: 137,
                    subditRank: 38,
                    player: "GITA ANISA UTAMI",
                    score: 15919,
                  },
                  {
                    overallRank: 142,
                    subditRank: 39,
                    player: "AZIZ KHOIRUL FIKRI",
                    score: 15596,
                  },
                  {
                    overallRank: 144,
                    subditRank: 40,
                    player: "GALANG RAMDHAN PRATAMA",
                    score: 15416,
                  },
                  {
                    overallRank: 148,
                    subditRank: 41,
                    player: "ADHITYA EKA PUTRA",
                    score: 14880,
                  },
                  {
                    overallRank: 149,
                    subditRank: 42,
                    player: "KHOIRINA SAFITRI",
                    score: 14518,
                  },
                  {
                    overallRank: 153,
                    subditRank: 43,
                    player: "WAHYU BUDIONO",
                    score: 14334,
                  },
                  {
                    overallRank: 160,
                    subditRank: 44,
                    player: "MUHAMMAD BAKTI ISLAMY",
                    score: 12737,
                  },
                  {
                    overallRank: 161,
                    subditRank: 45,
                    player: "MUHAMAD NASRUL MUHAIMIN",
                    score: 12326,
                  },
                  {
                    overallRank: 164,
                    subditRank: 46,
                    player: "YUNI ANGGRAINI",
                    score: 11349,
                  },
                  {
                    overallRank: 166,
                    subditRank: 47,
                    player: "DINI HARIAJI",
                    score: 10165,
                  },
                ],
                "subdit-3": [
                  {
                    overallRank: 4,
                    subditRank: 1,
                    player: "HAWWIN RIZKI HERLIANTO",
                    score: 23591,
                  },
                  {
                    overallRank: 12,
                    subditRank: 2,
                    player: "ARDIANSYAH ANDRE RIZAL FALAWI",
                    score: 23177,
                  },
                  {
                    overallRank: 19,
                    subditRank: 3,
                    player: "AULIA OKTAVELLA PURNAMASARI",
                    score: 22980,
                  },
                  {
                    overallRank: 21,
                    subditRank: 4,
                    player: "NOVITA VERA HARDIANTY HASIBUAN",
                    score: 22968,
                  },
                  {
                    overallRank: 26,
                    subditRank: 5,
                    player: "NURSYAHFITRI PURBA",
                    score: 22863,
                  },
                  {
                    overallRank: 35,
                    subditRank: 6,
                    player: "ATRI HARIS",
                    score: 22340,
                  },
                  {
                    overallRank: 38,
                    subditRank: 7,
                    player: "MUHAMMAD SYAIFUDIN",
                    score: 22298,
                  },
                  {
                    overallRank: 44,
                    subditRank: 8,
                    player: "TEGUH PAMUJI",
                    score: 22025,
                  },
                  {
                    overallRank: 47,
                    subditRank: 9,
                    player: "FAISAL AGUNG ABDILLAH",
                    score: 21948,
                  },
                  {
                    overallRank: 48,
                    subditRank: 10,
                    player: "ANDINI NURAINI",
                    score: 21895,
                  },
                  {
                    overallRank: 53,
                    subditRank: 11,
                    player: "DENI OKTA IRAWAN SEBAYANG",
                    score: 21372,
                  },
                  {
                    overallRank: 60,
                    subditRank: 12,
                    player: "RAYANA JANWAR",
                    score: 20802,
                  },
                  {
                    overallRank: 86,
                    subditRank: 13,
                    player: "JULI RACHMAWATI",
                    score: 19275,
                  },
                  {
                    overallRank: 94,
                    subditRank: 14,
                    player: "RADHITYA ARIE KENPRASOJO",
                    score: 18693,
                  },
                  {
                    overallRank: 103,
                    subditRank: 15,
                    player: "AMRI TARMIZI",
                    score: 18056,
                  },
                  {
                    overallRank: 104,
                    subditRank: 16,
                    player: "TRI PRAMUDAYA",
                    score: 17840,
                  },
                  {
                    overallRank: 105,
                    subditRank: 17,
                    player: "BRIAN PRADITAMA",
                    score: 17795,
                  },
                  {
                    overallRank: 107,
                    subditRank: 18,
                    player: "SABAT AWAN AGUSTI MAHARDIKA",
                    score: 17719,
                  },
                  {
                    overallRank: 108,
                    subditRank: 19,
                    player: "JULIA A. BUTARBUTAR",
                    score: 17591,
                  },
                  {
                    overallRank: 116,
                    subditRank: 20,
                    player: "YOGA PAMUNGKAS",
                    score: 17023,
                  },
                  {
                    overallRank: 125,
                    subditRank: 22,
                    player: "HERU WIDJAKSONO",
                    score: 16659,
                  },
                  {
                    overallRank: 127,
                    subditRank: 23,
                    player: "ROKY KOSTANTO",
                    score: 16521,
                  },
                  {
                    overallRank: 130,
                    subditRank: 24,
                    player: "DWI JOKO WIDODO",
                    score: 16387,
                  },
                  {
                    overallRank: 131,
                    subditRank: 25,
                    player: "VINA SARI",
                    score: 16223,
                  },
                  {
                    overallRank: 136,
                    subditRank: 26,
                    player: "NATALIA DESFRI HUTABARAT",
                    score: 15978,
                  },
                  {
                    overallRank: 138,
                    subditRank: 27,
                    player: "NASYAROBBY NUGRAHA PUTRA",
                    score: 15895,
                  },
                  {
                    overallRank: 151,
                    subditRank: 28,
                    player: "WAHYU RIO MAHENDRA",
                    score: 14457,
                  },
                  {
                    overallRank: 152,
                    subditRank: 29,
                    player: "IBRAHIM SALEH",
                    score: 14416,
                  },
                  {
                    overallRank: 156,
                    subditRank: 30,
                    player: "YAN SUSENO",
                    score: 13703,
                  },
                  {
                    overallRank: 163,
                    subditRank: 31,
                    player: "ERWIN ADINUGRAHA",
                    score: 11503,
                  },
                  {
                    overallRank: 165,
                    subditRank: 32,
                    player: "DESY DWI MARYATI",
                    score: 11338,
                  },
                  {
                    overallRank: 167,
                    subditRank: 33,
                    player: "WAHYUNING TRI UTAMI",
                    score: 9553,
                  },
                  {
                    overallRank: 168,
                    subditRank: 34,
                    player: "HERDYONO",
                    score: 6126,
                  },
                ],
                "subdit-4": [
                  {
                    overallRank: 31,
                    subditRank: 1,
                    player: "ADITYA HANNU CHRISTIAWAN",
                    score: 22450,
                  },
                  {
                    overallRank: 34,
                    subditRank: 2,
                    player: "ROBI ALHADI",
                    score: 22347,
                  },
                  {
                    overallRank: 41,
                    subditRank: 3,
                    player: "MUHAMMAD NAAFI` AKBAR MUHARAM",
                    score: 22095,
                  },
                  {
                    overallRank: 52,
                    subditRank: 4,
                    player: "REZA ARI MAULANA CAPAH",
                    score: 21390,
                  },
                  {
                    overallRank: 57,
                    subditRank: 5,
                    player: "MUHAMMAD DIKA ASSIDIKA HUSEIN",
                    score: 21206,
                  },
                  {
                    overallRank: 59,
                    subditRank: 6,
                    player: "LISA SAPUTRI",
                    score: 20831,
                  },
                  {
                    overallRank: 65,
                    subditRank: 7,
                    player: "USEP MUNAWAR SIDIQ",
                    score: 20302,
                  },
                  {
                    overallRank: 66,
                    subditRank: 8,
                    player: "TRI HERNAWATY",
                    score: 20220,
                  },
                  {
                    overallRank: 74,
                    subditRank: 9,
                    player: "RISMAWANTO",
                    score: 19664,
                  },
                  {
                    overallRank: 89,
                    subditRank: 10,
                    player: "VIKY AHMAD YUSUF",
                    score: 19028,
                  },
                  {
                    overallRank: 90,
                    subditRank: 11,
                    player: "AGA BAGOES ARDIANSYAH",
                    score: 18896,
                  },
                  {
                    overallRank: 113,
                    subditRank: 12,
                    player: "M. SYUKRAN HAKIM",
                    score: 17344,
                  },
                  {
                    overallRank: 114,
                    subditRank: 13,
                    player: "RANGGA AJIE DEWANTARA",
                    score: 17140,
                  },
                  {
                    overallRank: 115,
                    subditRank: 14,
                    player: "TITO SUHARTO",
                    score: 17040,
                  },
                  {
                    overallRank: 122,
                    subditRank: 15,
                    player: "AFIFAH RYZA ADININGSIH",
                    score: 16840,
                  },
                  {
                    overallRank: 146,
                    subditRank: 16,
                    player: "ANDIKA PRAYOGA",
                    score: 15054,
                  },
                  {
                    overallRank: 147,
                    subditRank: 17,
                    player: "RIAN BAGOES PAMUNGKAS",
                    score: 14919,
                  },
                  {
                    overallRank: 150,
                    subditRank: 18,
                    player: "MUHAMMAD WASIS WICAKSONO",
                    score: 14477,
                  },
                  {
                    overallRank: 154,
                    subditRank: 19,
                    player: "JULIAN FAINANDA ROCHSAS",
                    score: 14164,
                  },
                  {
                    overallRank: 162,
                    subditRank: 20,
                    player: "TEGUH WAHYUWIDIYANTO",
                    score: 11567,
                  },
                  {
                    overallRank: 170,
                    subditRank: 21,
                    player: "JUANTO ANDHIKA",
                    score: 1584,
                  },
                ],
                "subdit-5": [
                  {
                    overallRank: 6,
                    subditRank: 1,
                    player: "GEZHA YUNUS MAHENDRA",
                    score: 23441,
                  },
                  {
                    overallRank: 7,
                    subditRank: 2,
                    player: "GORBY SABRINA",
                    score: 23439,
                  },
                  {
                    overallRank: 11,
                    subditRank: 3,
                    player: "MARTINUS HERAWAN",
                    score: 23180,
                  },
                  {
                    overallRank: 13,
                    subditRank: 4,
                    player: "R. YANUAR ISTANTO",
                    score: 23146,
                  },
                  {
                    overallRank: 16,
                    subditRank: 5,
                    player: "MITA MUTIA REZA",
                    score: 23047,
                  },
                  {
                    overallRank: 23,
                    subditRank: 6,
                    player: "YOGA ADI PRADANA",
                    score: 22926,
                  },
                  {
                    overallRank: 24,
                    subditRank: 7,
                    player: "ELFA RISTA HANTALIS VICTORY",
                    score: 22905,
                  },
                  {
                    overallRank: 28,
                    subditRank: 8,
                    player: "NATASYA CHOTIJAH WULANDARI",
                    score: 22584,
                  },
                  {
                    overallRank: 30,
                    subditRank: 9,
                    player: "JEFRI INVOLA SARAGIH",
                    score: 22474,
                  },
                  {
                    overallRank: 32,
                    subditRank: 10,
                    player: "BAYU DWIANTO",
                    score: 22428,
                  },
                  {
                    overallRank: 36,
                    subditRank: 11,
                    player: "MARISSA",
                    score: 22327,
                  },
                  {
                    overallRank: 40,
                    subditRank: 12,
                    player: "BAYU PRATAMA PUTRA",
                    score: 22173,
                  },
                  {
                    overallRank: 51,
                    subditRank: 13,
                    player: "ARIF NOTONEGORO",
                    score: 21417,
                  },
                  {
                    overallRank: 56,
                    subditRank: 14,
                    player: "KARINA SARASATI SUWARTO",
                    score: 21232,
                  },
                  {
                    overallRank: 61,
                    subditRank: 15,
                    player: "CINTIA AULIYA",
                    score: 20781,
                  },
                  {
                    overallRank: 62,
                    subditRank: 16,
                    player: "BAYU WIDYASTANTO",
                    score: 20727,
                  },
                  {
                    overallRank: 67,
                    subditRank: 17,
                    player: "CAHYA ADHI KUSUMA",
                    score: 20184,
                  },
                  {
                    overallRank: 70,
                    subditRank: 18,
                    player: "RINEKA LINGGA ANDANUMUSTI",
                    score: 19959,
                  },
                  {
                    overallRank: 73,
                    subditRank: 19,
                    player: "TEGUH WAHYU WIDODO",
                    score: 19695,
                  },
                  {
                    overallRank: 75,
                    subditRank: 20,
                    player: "SHOPAN J. ENDRAWAN",
                    score: 19618,
                  },
                  {
                    overallRank: 78,
                    subditRank: 21,
                    player: "ANDY SETYO BARMANTO",
                    score: 19519,
                  },
                  {
                    overallRank: 82,
                    subditRank: 22,
                    player: "KENNY RITCHIE BARUS",
                    score: 19338,
                  },
                  {
                    overallRank: 83,
                    subditRank: 23,
                    player: "JEFRI WIRADIPUTRA",
                    score: 19332,
                  },
                  {
                    overallRank: 84,
                    subditRank: 24,
                    player: "THAMRIN WIDAYA",
                    score: 19323,
                  },
                  {
                    overallRank: 93,
                    subditRank: 25,
                    player: "RAY CHRISTIAN",
                    score: 18713,
                  },
                  {
                    overallRank: 96,
                    subditRank: 26,
                    player: "ALVIN IMANUEL",
                    score: 18604,
                  },
                  {
                    overallRank: 102,
                    subditRank: 27,
                    player: "ARGENTA VENIDA VIDICA VICI RIPTANSA",
                    score: 18081,
                  },
                  {
                    overallRank: 106,
                    subditRank: 28,
                    player: "MUHAMMAD ARFAN RUDIYANTO",
                    score: 17758,
                  },
                  {
                    overallRank: 111,
                    subditRank: 29,
                    player: "HADIYAN MUKHOLISIN",
                    score: 17374,
                  },
                  {
                    overallRank: 118,
                    subditRank: 30,
                    player: "MUHAMAD IQBAL",
                    score: 16968,
                  },
                  {
                    overallRank: 124,
                    subditRank: 31,
                    player: "DIAN LUFI HERNIATMOKO",
                    score: 16701,
                  },
                  {
                    overallRank: 126,
                    subditRank: 32,
                    player: "MOHAMAD ANDY BAHARUDDIN",
                    score: 16567,
                  },
                  {
                    overallRank: 139,
                    subditRank: 33,
                    player: "APRIYANTO WAHYU HANDOKO",
                    score: 15879,
                  },
                  {
                    overallRank: 140,
                    subditRank: 34,
                    player: "MUSLIH",
                    score: 15785,
                  },
                  {
                    overallRank: 141,
                    subditRank: 35,
                    player: "NIKMATUL HANIFAH SOFIA",
                    score: 15737,
                  },
                  {
                    overallRank: 143,
                    subditRank: 36,
                    player: "IGNATIUS GANDA KURNIAWAN",
                    score: 15464,
                  },
                  {
                    overallRank: 155,
                    subditRank: 37,
                    player: "BOVIT LEONARDO TAMPUBOLON",
                    score: 13710,
                  },
                  {
                    overallRank: 157,
                    subditRank: 38,
                    player: "ACHMAD DWINATA",
                    score: 13386,
                  },
                ],
              },
            },
          ],
        },

        {
          id: "crossroads",
          phase: "PHASE 2",
          name: "Crossroads",
          scheduleTitle: "Crossroads",
          type: "default",
          finalized: true,
        
          qualifiedPlayers: [
            "ADITYA HANNU CHRISTIAWAN",
            "AGA BAGOES ARDIANSYAH",
            "AULIA OKTAVELLA PURNAMASARI",
            "BAYU PRATAMA PUTRA",
            "DANIEL SAHALA HUTABARAT",
            "DENI OKTA IRAWAN SEBAYANG",
            "EREMIKA - UNIDENTIFIED",
            "FAISAL AGUNG ABDILLAH",
            "JENS NAKI",
            "JULIA A. BUTARBUTAR",
            "KENNY RITCHIE BARUS",
            "MUHAMMAD RAMADHAN ZULFI",
            "MUHAMMAD SYAIFUDIN",
            "MUHAMMAD WASIS WICAKSONO",
            "NURSYAHFITRI PURBA",
            "R. YANUAR ISTANTO",
            "RADHITYA ARIE KENPRASOJO",
            "TRI PRAMUDAYA",
            "VIKY AHMAD YUSUF",
          ],
        },
        {
          id: "signal-race",
          phase: "PHASE 4",
          name: "Signal Race",
          scheduleTitle: "Signal Race",
          type: "default",
          finalized: true,

          qualifiedPlayers: [
            "JENS NAKI",
            "MUHAMMAD RAMADHAN ZULFI",
          ],
        },
        {
          id: "the-code-lock",
          phase: "FINAL",
          name: "The Code Lock",
          scheduleTitle: "The Code Lock",
          type: "default",
          finalized: true,

          qualifiedPlayers: [
            "JENS NAKI",
            "MUHAMMAD RAMADHAN ZULFI",
          ],

          winner: "JENS NAKI",
        },
      ],
    },
  },
  {
    id: "fun-games_1",
    name: "Ball Relay",
    scoringCategory: "fun",
    theme: "fun",
    results: [
        "subdit-3",
        "subdit-5",
        "subdit-1",
        "subdit-2",
        "subdit-4",
      ],
  },
  {
    id: "fun-games_2",
    name: "Paku Botol",
    scoringCategory: "fun",
    theme: "fun",
    results: [
        "subdit-2",
        "subdit-4",
        "subdit-1",
        "subdit-3",
        "subdit-5",
      ],
  },
];

/*
 * Data ringkas untuk bagian "Jadwal terdekat" di halaman Home.
 *
 * Export ini tetap dipertahankan agar app/page.js yang sekarang
 * tidak perlu diubah dan tidak mengalami error.
 */
export const schedule = [
  {
    date: "10 Agustus 2026",
    time: "08.00–12.00 WIB",
    title: "Futsal Cup",
    location: "Lapangan Futsal",
    description:
      "Babak penyisihan Futsal Cup mempertemukan tim dari setiap bagian.",
  },
  {
    date: "11 Agustus 2026",
    time: "09.00–15.00 WIB",
    title: "Badminton Masters",
    location: "GOR",
    description:
      "Rangkaian pertandingan Badminton Masters dimulai dari babak penyisihan.",
  },
  {
    date: "12 Agustus 2026",
    time: "09.00–15.00 WIB",
    title: "Table Tennis Open",
    location: "Aula",
    description:
      "Pertandingan Table Tennis Open dilaksanakan sesuai pembagian jadwal.",
  },
];

/*
 * Kolom tanggal yang ditampilkan pada tabel Gantt.
 *
 * Tanggal tidak harus berurutan setiap hari. Kamu bisa menampilkan
 * hanya tanggal yang memang digunakan selama rangkaian Atlantik.
 */
export const scheduleDates = [
  "2026-08-03",
  "2026-08-04",
  "2026-08-05",
  "2026-08-06",
  "2026-08-10",
  "2026-08-11",
  "2026-08-12",
  "2026-08-13",
  "2026-08-18",
  "2026-08-19",
  "2026-08-20",
  "2026-08-24",
  "2026-08-26",
  "2026-08-27",
  "2026-08-31",
];

/*
 * Data utama halaman Jadwal.
 *
 * theme:
 * - sports
 * - strategic
 * - esports
 * - grand-champion
 * - online
 * - fun
 *
 * activeDates:
 * Menentukan sel mana yang diberi warna pada tabel Gantt.
 *
 * sessions:
 * Menentukan detail pertandingan yang tampil ketika sel diklik.
 *
 * Apabila tanggal ada di activeDates tetapi tidak ada di sessions,
 * panel detail akan menampilkan "Jadwal rinci belum tersedia".
 */
export const competitionSchedules = [
  {
    id: "futsal-cup",
    name: "Futsal Cup",
    category: "Sports",
    theme: "sports",
    activeDates: [
      "2026-08-10",
      "2026-08-11",
      "2026-08-18",
      "2026-08-19",
      "2026-08-26",
    ],
    sessions: {
      "2026-08-10": [
        {
          id: "futsal-10-1",
          startTime: "08:00",
          endTime: "09:00",
          title: "TAKESI vs PESPA",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal A",
        },
        {
          id: "futsal-10-2",
          startTime: "09:15",
          endTime: "10:15",
          title: "PIKSI vs PSPP",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal A",
        },
        {
          id: "futsal-10-3",
          startTime: "10:30",
          endTime: "11:30",
          title: "PEPSI vs TAKESI",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal A",
        },
      ],
      "2026-08-11": [
        {
          id: "futsal-11-1",
          startTime: "08:00",
          endTime: "09:00",
          title: "PESPA vs PIKSI",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal A",
        },
        {
          id: "futsal-11-2",
          startTime: "09:15",
          endTime: "10:15",
          title: "PSPP vs PEPSI",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal A",
        },
      ],
      "2026-08-18": [
        {
          id: "futsal-18-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Peringkat 1 Grup A vs Peringkat 2 Grup B",
          stage: "Semifinal",
          location: "Lapangan Futsal Utama",
        },
        {
          id: "futsal-18-2",
          startTime: "10:15",
          endTime: "11:15",
          title: "Peringkat 1 Grup B vs Peringkat 2 Grup A",
          stage: "Semifinal",
          location: "Lapangan Futsal Utama",
        },
      ],
      "2026-08-26": [
        {
          id: "futsal-26-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Lapangan Futsal Utama",
        },
        {
          id: "futsal-26-2",
          startTime: "10:15",
          endTime: "11:30",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Lapangan Futsal Utama",
        },
      ],
    },
  },
  {
    id: "volleyball-challenge",
    name: "Volleyball Challenge",
    category: "Sports",
    theme: "sports",
    activeDates: [
      "2026-08-12",
      "2026-08-13",
      "2026-08-19",
      "2026-08-20",
      "2026-08-27",
    ],
    sessions: {
      "2026-08-12": [
        {
          id: "volley-12-1",
          startTime: "08:00",
          endTime: "09:15",
          title: "TAKESI vs PSPP",
          stage: "Babak Penyisihan",
          location: "Lapangan Voli",
        },
        {
          id: "volley-12-2",
          startTime: "09:30",
          endTime: "10:45",
          title: "PESPA vs PEPSI",
          stage: "Babak Penyisihan",
          location: "Lapangan Voli",
        },
      ],
      "2026-08-13": [
        {
          id: "volley-13-1",
          startTime: "08:00",
          endTime: "09:15",
          title: "PIKSI vs TAKESI",
          stage: "Babak Penyisihan",
          location: "Lapangan Voli",
        },
        {
          id: "volley-13-2",
          startTime: "09:30",
          endTime: "10:45",
          title: "PSPP vs PESPA",
          stage: "Babak Penyisihan",
          location: "Lapangan Voli",
        },
      ],
      "2026-08-27": [
        {
          id: "volley-27-1",
          startTime: "09:00",
          endTime: "10:15",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Lapangan Voli",
        },
        {
          id: "volley-27-2",
          startTime: "10:30",
          endTime: "12:00",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Lapangan Voli",
        },
      ],
    },
  },
  {
    id: "badminton-masters",
    name: "Badminton Masters",
    category: "Sports",
    theme: "sports",
    activeDates: [
      "2026-08-11",
      "2026-08-12",
      "2026-08-18",
      "2026-08-24",
    ],
    sessions: {
      "2026-08-11": [
        {
          id: "badminton-11-1",
          startTime: "09:00",
          endTime: "09:45",
          title: "Pertandingan 1",
          stage: "Babak Penyisihan",
          location: "Lapangan Badminton 1",
        },
        {
          id: "badminton-11-2",
          startTime: "10:00",
          endTime: "10:45",
          title: "Pertandingan 2",
          stage: "Babak Penyisihan",
          location: "Lapangan Badminton 1",
        },
      ],
      "2026-08-12": [
        {
          id: "badminton-12-1",
          startTime: "09:00",
          endTime: "09:45",
          title: "Pertandingan 3",
          stage: "Babak Penyisihan",
          location: "Lapangan Badminton 1",
        },
      ],
      "2026-08-18": [
        {
          id: "badminton-18-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Lapangan Badminton Utama",
        },
      ],
      "2026-08-24": [
        {
          id: "badminton-24-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Lapangan Badminton Utama",
        },
        {
          id: "badminton-24-2",
          startTime: "14:15",
          endTime: "15:15",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Lapangan Badminton Utama",
        },
      ],
    },
  },
  {
    id: "table-tennis-open",
    name: "Table Tennis Open",
    category: "Sports",
    theme: "sports",
    activeDates: [
      "2026-08-12",
      "2026-08-13",
      "2026-08-20",
      "2026-08-24",
    ],
    sessions: {
      "2026-08-12": [
        {
          id: "table-tennis-12-1",
          startTime: "09:00",
          endTime: "09:40",
          title: "Pertandingan 1",
          stage: "Babak Penyisihan",
          location: "Aula",
        },
        {
          id: "table-tennis-12-2",
          startTime: "09:50",
          endTime: "10:30",
          title: "Pertandingan 2",
          stage: "Babak Penyisihan",
          location: "Aula",
        },
      ],
      "2026-08-20": [
        {
          id: "table-tennis-20-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Aula",
        },
      ],
      "2026-08-24": [
        {
          id: "table-tennis-24-1",
          startTime: "09:00",
          endTime: "09:45",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Aula",
        },
        {
          id: "table-tennis-24-2",
          startTime: "10:00",
          endTime: "10:45",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Aula",
        },
      ],
    },
  },
  {
    id: "fc-26-cup",
    name: "FC 26 Cup",
    category: "Esports",
    theme: "esports",
    activeDates: [
      "2026-08-03",
      "2026-08-04",
      "2026-08-05",
      "2026-08-18",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "fc26-03-1",
          startTime: "09:00",
          endTime: "09:45",
          title: "Pertandingan 1",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
        {
          id: "fc26-03-2",
          startTime: "10:00",
          endTime: "10:45",
          title: "Pertandingan 2",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-04": [
        {
          id: "fc26-04-1",
          startTime: "09:00",
          endTime: "09:45",
          title: "Pertandingan 3",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-05": [
        {
          id: "fc26-05-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Esports",
        },
      ],
      "2026-08-18": [
        {
          id: "fc26-18-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Ruang Esports",
        },
        {
          id: "fc26-18-2",
          startTime: "14:15",
          endTime: "15:15",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Ruang Esports",
        },
      ],
    },
  },
  {
    id: "mobile-legends-bang-bang",
    name: "Mobile Legends: Bang Bang",
    category: "Esports",
    theme: "esports",
    activeDates: [
      "2026-08-05",
      "2026-08-06",
      "2026-08-10",
      "2026-08-19",
    ],
    sessions: {
      "2026-08-05": [
        {
          id: "mlbb-05-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Match 1",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
        {
          id: "mlbb-05-2",
          startTime: "10:15",
          endTime: "11:15",
          title: "Match 2",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-06": [
        {
          id: "mlbb-06-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Match 3",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-10": [
        {
          id: "mlbb-10-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Esports",
        },
      ],
      "2026-08-19": [
        {
          id: "mlbb-19-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Ruang Esports",
        },
        {
          id: "mlbb-19-2",
          startTime: "14:15",
          endTime: "15:45",
          title: "Grand Final",
          stage: "Final",
          location: "Ruang Esports",
        },
      ],
    },
  },
  {
    id: "cscz-tactical-challenge",
    name: "CS:CZ Tactical Challenge",
    category: "Esports",
    theme: "esports",
    activeDates: [
      "2026-08-06",
      "2026-08-10",
      "2026-08-11",
      "2026-08-20",
    ],
    sessions: {
      "2026-08-06": [
        {
          id: "cscz-06-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Match 1",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-10": [
        {
          id: "cscz-10-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Match 2",
          stage: "Babak Penyisihan",
          location: "Ruang Esports",
        },
      ],
      "2026-08-11": [
        {
          id: "cscz-11-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Esports",
        },
      ],
      "2026-08-20": [
        {
          id: "cscz-20-1",
          startTime: "13:00",
          endTime: "14:00",
          title: "Perebutan Juara 3",
          stage: "Final",
          location: "Ruang Esports",
        },
        {
          id: "cscz-20-2",
          startTime: "14:15",
          endTime: "15:15",
          title: "Pertandingan Final",
          stage: "Final",
          location: "Ruang Esports",
        },
      ],
    },
  },
  {
    id: "chess-masters",
    name: "Chess Masters (Catur)",
    category: "Strategic Games",
    theme: "strategic",
    activeDates: [
      "2026-08-03",
      "2026-08-04",
      "2026-08-05",
      "2026-08-24",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "chess-03-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Babak Penyisihan — Sesi 1",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-04": [
        {
          id: "chess-04-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Babak Penyisihan — Sesi 2",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-05": [
        {
          id: "chess-05-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-24": [
        {
          id: "chess-24-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Final",
          stage: "Final",
          location: "Ruang Pertandingan",
        },
      ],
    },
  },
  {
    id: "capsa-masters",
    name: "Capsa Masters",
    category: "Strategic Games",
    theme: "strategic",
    activeDates: [
      "2026-08-10",
      "2026-08-11",
      "2026-08-12",
      "2026-08-26",
    ],
    sessions: {
      "2026-08-10": [
        {
          id: "capsa-10-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Penyisihan — Sesi 1",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-11": [
        {
          id: "capsa-11-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Penyisihan — Sesi 2",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-12": [
        {
          id: "capsa-12-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-26": [
        {
          id: "capsa-26-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Final",
          stage: "Final",
          location: "Ruang Pertandingan",
        },
      ],
    },
  },
  {
    id: "domino-gaple-masters",
    name: "Domino (Gaple) Masters",
    category: "Strategic Games",
    theme: "strategic",
    activeDates: [
      "2026-08-18",
      "2026-08-19",
      "2026-08-20",
      "2026-08-27",
    ],
    sessions: {
      "2026-08-18": [
        {
          id: "domino-18-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Penyisihan — Sesi 1",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-19": [
        {
          id: "domino-19-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Penyisihan — Sesi 2",
          stage: "Babak Penyisihan",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-20": [
        {
          id: "domino-20-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Semifinal",
          stage: "Semifinal",
          location: "Ruang Pertandingan",
        },
      ],
      "2026-08-27": [
        {
          id: "domino-27-1",
          startTime: "13:00",
          endTime: "14:30",
          title: "Babak Final",
          stage: "Final",
          location: "Ruang Pertandingan",
        },
      ],
    },
  },
  {
    id: "rapid-rush",
    name: "Rapid Rush",
    category: "Online Quiz",
    theme: "online",
    activeDates: ["2026-08-03", "2026-08-04", "2026-08-05"],
    sessions: {
      "2026-08-03": [
        {
          id: "rapid-rush-03-1",
          startTime: "08:00",
          endTime: "16:00",
          title: "Rapid Rush — Hari 1",
          stage: "Babak Seleksi",
          location: "Online",
        },
      ],
      "2026-08-04": [
        {
          id: "rapid-rush-04-1",
          startTime: "08:00",
          endTime: "16:00",
          title: "Rapid Rush — Hari 2",
          stage: "Babak Seleksi",
          location: "Online",
        },
      ],
      "2026-08-05": [
        {
          id: "rapid-rush-05-1",
          startTime: "08:00",
          endTime: "16:00",
          title: "Rapid Rush — Hari 3",
          stage: "Babak Seleksi",
          location: "Online",
        },
      ],
    },
  },
  {
    id: "mission-grand-champion",
    name: "Mission: Grand Champion",
    category: "Strategic Games",
    theme: "grand-champion",
    activeDates: ["2026-08-31"],
    sessions: {
      "2026-08-31": [
        {
          id: "grand-champion-31-1",
          startTime: "09:00",
          endTime: "10:00",
          title: "Crossroads",
          stage: "Phase 2",
          location: "Main Stage",
        },
        {
          id: "grand-champion-31-2",
          startTime: "10:15",
          endTime: "11:15",
          title: "Pressure Grid",
          stage: "Phase 3",
          location: "Main Stage",
        },
        {
          id: "grand-champion-31-3",
          startTime: "11:30",
          endTime: "12:30",
          title: "Signal Race",
          stage: "Phase 4",
          location: "Main Stage",
        },
        {
          id: "grand-champion-31-4",
          startTime: "14:00",
          endTime: "15:30",
          title: "Final Match",
          stage: "Final",
          location: "Main Stage",
        },
      ],
    },
  },
  {
    id: "fun-games",
    name: "Fun Games",
    category: "Lomba Rekreasi",
    theme: "fun",
    activeDates: ["2026-08-31"],
    sessions: {
      "2026-08-31": [
        {
          id: "fun-games-31-1",
          startTime: "08:00",
          endTime: "09:00",
          title: "Fun Games Session",
          stage: "Hari Puncak",
          location: "Area Utama",
        },
      ],
    },
  },
];

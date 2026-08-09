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
    category: "Sports",
    theme: "sports",
    location: "Lapangan Futsal",
    description:
      "Babak penyisihan Futsal Cup mempertemukan tim dari setiap bagian.",
  },
  {
    date: "11 Agustus 2026",
    time: "09.00–15.00 WIB",
    title: "Badminton Masters",
    category: "Sports",
    theme: "sports",
    location: "GOR",
    description:
      "Rangkaian pertandingan Badminton Masters dimulai dari babak penyisihan.",
  },
  {
    date: "12 Agustus 2026",
    time: "09.00–15.00 WIB",
    title: "Table Tennis Open",
    category: "Sports",
    theme: "sports",
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
      "2026-08-18",
      "2026-08-19",
      "2026-08-20",
      "2026-08-26",
      "2026-08-27",
    ],
    sessions: {
      "2026-08-18": [
        {
          id: "futsal-18-1",
          startTime: "16:30",
          endTime: "18:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-19": [
        {
          id: "futsal-19-1",
          startTime: "16:30",
          endTime: "18:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-20": [
        {
          id: "futsal-20-1",
          startTime: "16:30",
          endTime: "18:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-26": [
        {
          id: "futsal-26-1",
          startTime: "16:30",
          endTime: "18:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-27": [
        {
          id: "futsal-27-1",
          startTime: "16:30",
          endTime: "18:00",
          title: "Final",
          stage: "Babak Final",
          location: "Lapangan Futsal",
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
      "2026-08-18",
      "2026-08-19",
      "2026-08-20",
      "2026-08-26",
      "2026-08-27",
    ],
    sessions: {
      "2026-08-18": [
        {
          id: "volley-18-1",
          startTime: "06:30",
          endTime: "08:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-19": [
        {
          id: "volley-19-1",
          startTime: "06:30",
          endTime: "08:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-20": [
        {
          id: "volley-20-1",
          startTime: "06:30",
          endTime: "08:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-26": [
        {
          id: "volley-26-1",
          startTime: "06:30",
          endTime: "08:00",
          title: "Fase Grup",
          stage: "Babak Penyisihan",
          location: "Lapangan Futsal",
        },
      ],
      "2026-08-27": [
        {
          id: "volley-27-1",
          startTime: "06:30",
          endTime: "08:00",
          title: "Final",
          stage: "Babak Final",
          location: "Lapangan Futsal",
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
      "2026-08-06",
      "2026-08-10",
      "2026-08-11",
      "2026-08-12",
      "2026-08-13",
    ],
    sessions: {
      "2026-08-06": [
        {
          id: "badminton-06-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "PIKSI vs PESPA",
          stage: "Pertandingan I",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-06-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "PEPSI vs PSPP",
          stage: "Pertandingan II",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-10": [
        {
          id: "badminton-10-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "PEPSI vs PIKSI",
          stage: "Pertandingan III",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-10-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TAKESI vs PESPA",
          stage: "Pertandingan IV",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-11": [
        {
          id: "badminton-11-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan V",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-11-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan VI",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-12": [
        {
          id: "badminton-12-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan VII",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-12-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan VIII",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-13": [
        {
          id: "badminton-13-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan IX",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-13-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Pertandingan X",
          location: "Lapangan Badminton Lantai 16",
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
      "2026-08-06",
      "2026-08-10",
      "2026-08-11",
      "2026-08-12",
      "2026-08-13",
    ],
    sessions: {
      "2026-08-06": [
        {
          id: "table-tennis-06-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Liga",
          stage: "Babak Penyisihan",
          location: "Lantai 16",
        },
      ],
      "2026-08-10": [
        {
          id: "table-tennis-10-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Liga",
          stage: "Babak Penyisihan",
          location: "Lantai 16",
        },
      ],
      "2026-08-11": [
        {
          id: "table-tennis-11-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Liga",
          stage: "Babak Penyisihan",
          location: "Lantai 16",
        },
      ],
      "2026-08-12": [
        {
          id: "table-tennis-12-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Babak 4 Besar",
          stage: "Babak 4 Besar",
          location: "Lantai 16",
        },
      ],
      "2026-08-13": [
        {
          id: "table-tennis-13-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Babak Final",
          stage: "Final dan Perebutan Juara 3",
          location: "Lantai 16",
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
      "2026-08-18",
      "2026-08-19",
      "2026-08-20",
    ],
    sessions: {
      "2026-08-18": [
        {
          id: "fc26-18-1",
          startTime: "11:00",
          endTime: "11:25",
          title: "TIM A vs TIM B",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-18-2",
          startTime: "11:25",
          endTime: "11:50",
          title: "TIM C vs TIM D",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-18-3",
          startTime: "11:50",
          endTime: "12:15",
          title: "TIM A vs TIM E",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-18-4",
          startTime: "12:15",
          endTime: "12:40",
          title: "TIM B vs TIM C",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-19": [
        {
          id: "fc26-19-1",
          startTime: "11:00",
          endTime: "11:25",
          title: "TIM A vs TIM C",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-19-2",
          startTime: "11:25",
          endTime: "11:50",
          title: "TIM B vs TIM D",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-19-3",
          startTime: "11:50",
          endTime: "12:15",
          title: "TIM C vs TIM E",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-19-4",
          startTime: "12:15",
          endTime: "12:40",
          title: "TIM A vs TIM D",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-20": [
        {
          id: "fc26-20-1",
          startTime: "11:00",
          endTime: "11:25",
          title: "TIM B vs TIM E (Paralel)",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-20-2",
          startTime: "11:25",
          endTime: "11:50",
          title: "TIM D vs TIM E (Paralel)",
          stage: "Fase Liga",
          location: "Lantai 9 Ruang Aspirin",
        },
        {
          id: "fc26-20-3",
          startTime: "12:15",
          endTime: "12:40",
          title: "Peringkat 1 vs Peringkat 2",
          stage: "Babak Final",
          location: "Lantai 9 Ruang Aspirin",
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
      "2026-08-03",
      "2026-08-04",
      "2026-08-05",
      "2026-08-06",
      "2026-08-10",
      "2026-08-11",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "mlbb-03-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "PESPA vs PIKSI",
          stage: "Match 1",
          location: "Online",
        },
        {
          id: "mlbb-03-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "BANGDUPAK vs PEPSI",
          stage: "Match 2",
          location: "Online",
        },
      ],
      "2026-08-04": [
        {
          id: "mlbb-04-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "PEPSI vs TAKESI",
          stage: "Match 3",
          location: "Online",
        },
        {
          id: "mlbb-04-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "BANGDUPAK vs PESPA",
          stage: "Match 4",
          location: "Online",
        },
      ],
      "2026-08-05": [
        {
          id: "mlbb-05-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "BANGDUPAK vs PIKSI",
          stage: "Match 5",
          location: "Online",
        },
        {
          id: "mlbb-05-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PESPA vs TAKESI",
          stage: "Match 6",
          location: "Online",
        },
      ],
      "2026-08-06": [
        {
          id: "mlbb-06-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "BANGDUPAK vs TAKESI",
          stage: "Match 7",
          location: "Online",
        },
        {
          id: "mlbb-06-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PEPSI vs PIKSI",
          stage: "Match 8",
          location: "Online",
        },
      ],
      "2026-08-10": [
        {
          id: "mlbb-10-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "PIKSI vs TAKESI",
          stage: "Match 9",
          location: "Online",
        },
        {
          id: "mlbb-10-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PEPSI vs PESPA",
          stage: "Match 10",
          location: "Online",
        },
      ],
      "2026-08-11": [
        {
          id: "mlbb-11-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Peringkat 1 vs Peringkat 2",
          stage: "Babak Final",
          location: "Online",
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
      "2026-08-11",
      "2026-08-12",
      "2026-08-13",
      "2026-08-18",
      "2026-08-19",
      "2026-08-26",
    ],
    sessions: {
      "2026-08-11": [
        {
          id: "cscz-11-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "TAKESI vs PEPSI",
          stage: "Match 1",
          location: "Lantai 9 Ruang Kartin1",
        },
        {
          id: "cscz-11-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PSP vs PIKSI",
          stage: "Match 2",
          location: "Lantai 9 Ruang Kartin1",
        },
      ],
      "2026-08-12": [
        {
          id: "cscz-12-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "PEPSI vs PSPP",
          stage: "Match 3",
          location: "Lantai 9 Ruang Kartin1",
        },
        {
          id: "cscz-12-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "TAKESI vs PIKSI",
          stage: "Match 4",
          location: "Lantai 9 Ruang Kartin1",
        },
      ],
      "2026-08-13": [
        {
          id: "cscz-13-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "PSPP vs PSP",
          stage: "Match 5",
          location: "Lantai 9 Ruang Kartin1",
        },
        {
          id: "cscz-13-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PIKSI vs PEPSI",
          stage: "Match 6",
          location: "Lantai 9 Ruang Kartin1",
        },
      ],
      "2026-08-18": [
        {
          id: "cscz-18-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "TAKESI vs PSPP",
          stage: "Match 7",
          location: "Lantai 9 Ruang Kartin1",
        },
        {
          id: "cscz-18-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PSP vs PEPSI",
          stage: "Match 8",
          location: "Lantai 9 Ruang Kartin1",
        },
      ],
      "2026-08-19": [
        {
          id: "cscz-19-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "TAKESI vs PSP",
          stage: "Match 9",
          location: "Lantai 9 Ruang Kartin1",
        },
        {
          id: "cscz-19-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PSPP vs PIKSI",
          stage: "Match 10",
          location: "Lantai 9 Ruang Kartin1",
        },
      ],
      "2026-08-26": [
        {
          id: "cscz-26-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Peringkat 1 vs Peringkat 2",
          stage: "Babak Final",
          location: "Lantai 9 Ruang Kartin1",
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
      "2026-08-06",
      "2026-08-10",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "chess-03-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Grup — Sesi 1",
          stage: "Babak Penyisihan",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-04": [
        {
          id: "chess-04-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Grup — Sesi 2",
          stage: "Babak Penyisihan",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-05": [
        {
          id: "chess-05-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Grup - Sesi 3",
          stage: "Babak Penyisihan",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-06": [
        {
          id: "chess-06-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Grup - Sesi 4",
          stage: "Babak Penyisihan",
          location: "Lantai 9 Ruang Aspirin",
        },
      ],
      "2026-08-10": [
        {
          id: "chess-10-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Fase Grup - Sesi 5",
          stage: "Penentuan Juara",
          location: "Lantai 9 Ruang Aspirin",
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
      "2026-08-03",
      "2026-08-04",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "capsa-03-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Rotasi 1-2",
          stage: "Babak Penyisihan",
          location: "Lantai 15",
        },
      ],
      "2026-08-04": [
        {
          id: "capsa-04-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Rotasi 3-4 & Penutupan",
          stage: "Babak Penyisihan",
          location: "Lantai 15",
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
      "2026-08-03",
      "2026-08-04",
    ],
    sessions: {
      "2026-08-03": [
        {
          id: "domino-03-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Ronde 1-2",
          stage: "Babak Penyisihan",
          location: "Lantai 15",
        },
      ],
      "2026-08-04": [
        {
          id: "domino-04-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "Ronde 3 & Penentuan Juara",
          stage: "Babak Penyisihan",
          location: "Lantai 15",
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
          startTime: "TBA",
          endTime: "TBA",
          title: "Crossroads",
          stage: "Phase 2",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-2",
          startTime: "TBA",
          endTime: "TBA",
          title: "Pressure Grid",
          stage: "Phase 3",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-3",
          startTime: "TBA",
          endTime: "TBA",
          title: "Signal Race",
          stage: "Phase 4",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-4",
          startTime: "TBA",
          endTime: "TBA",
          title: "Visual Recall",
          stage: "Phase 5",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-5",
          startTime: "TBA",
          endTime: "TBA",
          title: "Final Match",
          stage: "Final",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
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
          startTime: "TBA",
          endTime: "TBA",
          title: "Fun Games Session",
          stage: "Hari Puncak",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
      ],
    },
  },
];

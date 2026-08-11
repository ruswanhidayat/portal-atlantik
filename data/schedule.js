/*
 * Data ringkas untuk bagian "Jadwal terdekat" di halaman Home.
 *
 * Export ini tetap dipertahankan agar app/page.js yang sekarang
 * tidak perlu diubah dan tidak mengalami error.
 */
export const schedule = [
  // {
  //   date: "10 Agustus 2026",
  //   time: "11.00–13.00 WIB",
  //   title: "Chess Masters (Catur)",
  //   category: "Sports",
  //   theme: "sports",
  //   location: "Lantai 9 Ruang Aspirin",
  //   description:
  //     "Fase akhir penentuan juara Chess Masters (Catur) - Atlantik tahun ini!",
  // },
  // {
  //   date: "10 Agustus 2026",
  //   time: "11.45–13.00 WIB",
  //   title: "Badminton Masters",
  //   category: "Sports",
  //   theme: "sports",
  //   location: "Lapangan Badminton Lantai 16",
  //   description:
  //     "Rangkaian pertandingan lanjutan Badminton Masters.",
  // },
  // {
  //   date: "11 Agustus 2026",
  //   time: "11.00–13.00 WIB",
  //   title: "CS:CZ Tactical Challenge",
  //   category: "Esports",
  //   theme: "esports",
  //   location: "Lantai 9 Ruang Kartin1",
  //   description:
  //     "Babak Penyisihan pertama akan segera dimulai!",
  // },
  {
    date: "12 Agustus 2026",
    time: "11.45–13.00 WIB",
    title: "Badminton Masters",
    category: "Sports",
    theme: "sports",
    location: "Lapangan Badminton Lantai 16",
    description:
      "Rangkaian pertandingan lanjutan Badminton Masters.",
  },
  {
    date: "12 Agustus 2026",
    time: "11.00–13.00 WIB",
    title: "CS:CZ Tactical Challenge",
    category: "Esports",
    theme: "esports",
    location: "Lantai 9 Ruang Kartin1",
    description:
      "Rangkaian lanjutan Babak Penyisihan sedang berlangsung, saksikan pertandingannya!",
  },
  {
    date: "12 Agustus 2026",
    time: "11.00–13.00 WIB",
    title: "Table Tennis Open",
    category: "Sports",
    theme: "sports",
    location: "Lantai 9 Ruang Aspirin",
    description:
      "Table Tennis Open memasuki Babak 4 Besar! Siapakah yang akan melaju ke Babak Final?",
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
  "2026-08-15",
  "2026-08-16",
  "2026-08-17",
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
          stage: "Match I",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-06-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "PEPSI vs PSPP",
          stage: "Match II",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-10": [
        {
          id: "badminton-10-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "PEPSI vs PIKSI",
          stage: "Match III",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-10-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TAKESI vs PESPA",
          stage: "Match IV",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-11": [
        {
          id: "badminton-11-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "PSPP vs PSP",
          stage: "Match V",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-11-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "TAKESI vs PIKSI",
          stage: "Match VI",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-12": [
        {
          id: "badminton-12-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "TAKESI vs PEPSI",
          stage: "Match VII",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-12-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "PSPP vs PIKSI",
          stage: "Match VIII",
          location: "Lapangan Badminton Lantai 16",
        },
      ],
      "2026-08-13": [
        {
          id: "badminton-13-1",
          startTime: "11:45",
          endTime: "13:00",
          title: "PSPP vs TAKESI",
          stage: "Match IX",
          location: "Lapangan Badminton Lantai 16",
        },
        {
          id: "badminton-13-2",
          startTime: "11:45",
          endTime: "13:00",
          title: "PSP vs PEPSI",
          stage: "Match X",
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
          title: "PEPSI vs PIKSI",
          stage: "Babak 4 Besar",
          location: "Lantai 16",
        },
        {
          id: "table-tennis-12-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "PESPA vs PSPP",
          stage: "Babak 4 Besar",
          location: "Lantai 16",
        },
      ],
      "2026-08-13": [
        {
          id: "table-tennis-13-1",
          startTime: "11:00",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Babak Final",
          location: "Lantai 16",
        },
        {
          id: "table-tennis-13-2",
          startTime: "11:00",
          endTime: "13:00",
          title: "TBA vs TBA",
          stage: "Perebutan Juara 3",
          location: "Lantai 16",
        },
      ],
    },
  },
  {
    id: "atlantik-run",
    name: "Atlantik Run 2026",
    category: "Sports",
    theme: "sports",
    activeDates: [
      "2026-08-15",
      "2026-08-16",
      "2026-08-17",
    ],
    sessions: {
      "2026-08-15": [
        {
          id: "atlantik-run-15-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Atlantik Run 2026 - Day 1",
          stage: "Race Period",
          location: "Mandiri",
        },
      ],
      "2026-08-16": [
        {
          id: "atlantik-run-16-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Atlantik Run 2026 - Day 2",
          stage: "Race Period",
          location: "Mandiri",
        },
      ],
      "2026-08-17": [
        {
          id: "atlantik-run-17-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Atlantik Run 2026 - Day 3",
          stage: "Race Period",
          location: "Mandiri",
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
    activeDates: [
      "2026-08-12",
      "2026-08-13",
      "2026-08-14",
      "2026-08-31",
    ],
    sessions: {
      "2026-08-12": [
        {
          id: "grand-champion-12-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Rapid Rush",
          stage: "Phase 1",
          location: "Online",
        },
      ],
      "2026-08-13": [
        {
          id: "grand-champion-13-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Rapid Rush",
          stage: "Phase 1",
          location: "Online",
        },
      ],
      "2026-08-14": [
        {
          id: "grand-champion-14-1",
          startTime: "00:01",
          endTime: "23:59",
          title: "Rapid Rush",
          stage: "Phase 1",
          location: "Online",
        },
      ],
      "2026-08-31": [
        {
          id: "grand-champion-31-1",
          startTime: "08:00",
          endTime: "15:00",
          title: "Crossroads",
          stage: "Phase 2",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-2",
          startTime: "08:00",
          endTime: "15:00",
          title: "Pressure Grid",
          stage: "Phase 3",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-3",
          startTime: "08:00",
          endTime: "15:00",
          title: "Signal Race",
          stage: "Phase 4",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-4",
          startTime: "08:00",
          endTime: "15:00",
          title: "Visual Recall",
          stage: "Phase 5",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
        {
          id: "grand-champion-31-5",
          startTime: "08:00",
          endTime: "15:00",
          title: "Final Match",
          stage: "Final",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
      ],
    },
  },
  {
    id: "merdeka-showcase",
    name: "Lomba Kebersihan dan Dekorasi Ruangan",
    category: "Lomba Rekreasi",
    theme: "fun",
    activeDates: [
      "2026-08-13",
      "2026-08-18",
      "2026-08-19",
      "2026-08-20",
      "2026-08-24",
      "2026-08-26",
      "2026-08-27",
      "2026-08-31",
    ],
    sessions: {
      "2026-08-13": [
        {
          id: "merdeka-showcase-13-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-18": [
        {
          id: "merdeka-showcase-18-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-19": [
        {
          id: "merdeka-showcase-19-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-20": [
        {
          id: "merdeka-showcase-20-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-24": [
        {
          id: "merdeka-showcase-24-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-26": [
        {
          id: "merdeka-showcase-26-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-27": [
        {
          id: "merdeka-showcase-27-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
        },
      ],
      "2026-08-31": [
        {
          id: "merdeka-showcase-31-1",
          startTime: "07:30",
          endTime: "17:00",
          title: "Periode Penilaian Lomba Kebersihan dan Dekorasi Ruangan",
          stage: "Penilaian",
          location: "Gedung Bhakti, Direktorat TIK",
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
          endTime: "15:00",
          title: "Fun Games Session",
          stage: "Hari Puncak",
          location: "Area Hari Puncak Peringatan HUT RI Dit TIK",
        },
      ],
    },
  },
];

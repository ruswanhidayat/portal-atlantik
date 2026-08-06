export const siteConfig = {
  name: "Atlantik 2026",
  theme: "Bersama, Bergerak, Berdampak",
  description:
    "Portal informasi resmi Atlantik 2026 untuk jadwal, pengumuman, dan seluruh rangkaian permainan.",
  rapidRushUrl: "#",
};

export const schedule = [
  {
    date: "Segera diumumkan",
    time: "—",
    title: "Pendaftaran pemain",
    location: "Online",
    description: "Informasi pendaftaran dan ketentuan pemain akan diumumkan melalui portal ini.",
  },
  {
    date: "Segera diumumkan",
    time: "—",
    title: "Rapid Rush",
    location: "Online",
    description: "Babak awal permainan Mission: Grand Champion.",
  },
  {
    date: "Segera diumumkan",
    time: "—",
    title: "Hari Puncak Atlantik 2026",
    location: "Segera diumumkan",
    description: "Rangkaian acara utama, permainan, dan pengumuman pemenang.",
  },
];

export const announcements = [
  {
    date: "6 Agustus 2026",
    title: "Portal Atlantik 2026 mulai disiapkan",
    summary: "Informasi jadwal, permainan, dan pengumuman resmi akan tersedia secara bertahap.",
    featured: true,
  },
  {
    date: "Segera hadir",
    title: "Pendaftaran Rapid Rush",
    summary: "Tautan pendaftaran dan akses permainan akan diumumkan di halaman Rapid Rush.",
    featured: false,
  },
];

export const games = [
  {
    slug: "rapid-rush",
    name: "Rapid Rush",
    category: "Online Quiz",
    status: "Segera hadir",
    shortDescription: "Permainan kuis cepat sebagai tahap awal seleksi pemain.",
    description:
      "Pemain menjawab sejumlah soal secara online dalam waktu yang telah ditentukan. Pemain dengan hasil terbaik berhak melanjutkan ke tahap berikutnya.",
    highlights: ["Dimainkan secara online", "Menggunakan nama asli", "Kecepatan dan ketepatan"],
    action: "external",
  },
  {
    slug: "mission-grand-champion",
    name: "Mission: Grand Champion",
    category: "Main Competition",
    status: "Segera hadir",
    shortDescription: "Kompetisi utama Atlantik 2026 dengan rangkaian permainan eliminasi.",
    description:
      "Mission: Grand Champion menguji ketangkasan berpikir, ketepatan, kecepatan, observasi, dan strategi pemain melalui beberapa fase permainan.",
    highlights: ["Permainan bertahap", "Format eliminasi", "Finalis terbaik"],
    action: "detail",
  },
  {
    slug: "fun-games",
    name: "Fun Games",
    category: "Entertainment",
    status: "Segera hadir",
    shortDescription: "Permainan ringan dan seru untuk memeriahkan Hari Puncak Atlantik 2026.",
    description:
      "Fun Games dirancang sebagai sesi hiburan yang melibatkan pemain dan pengunjung dalam suasana santai dan menyenangkan.",
    highlights: ["Seru dan ringan", "Partisipatif", "Terbuka sesuai ketentuan acara"],
    action: "detail",
  },
  {
    slug: "permainan-lainnya",
    name: "Permainan Lainnya",
    category: "Additional Games",
    status: "Segera diumumkan",
    shortDescription: "Permainan tambahan yang menjadi bagian dari rangkaian Atlantik 2026.",
    description:
      "Informasi permainan tambahan akan ditampilkan setelah konsep dan mekanisme permainan ditetapkan.",
    highlights: ["Informasi menyusul", "Bagian dari rangkaian acara"],
    action: "detail",
  },
];

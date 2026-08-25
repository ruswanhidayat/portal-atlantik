export const homepageData = {
  hero: {
    slides: [
      {
        id: "main",

        pill: "ATLANTIK 2026",

        title: [
          "Feel the vibe.",
          "Be part of the game.",
        ],

        description: null,

        primaryAction: {
          label: "Lihat permainan",
          href: "/permainan",
        },

        secondaryAction: {
          label: "Lihat jadwal",
          href: "/jadwal",
        },

        panel: {
          eyebrow: "Tema Atlantik 2026",
          useSiteTheme: true,
          description:
            "Bergerak bersama dalam semangat kolaborasi untuk menciptakan dampak yang lebih berarti.",
        },
      },

      {
        id: "gallery",

        pill: "ATLANTIK 2026",

        title: [
          "Relive the moments.",
          "Keep the memories.",
        ],

        description:
          "Lihat kembali berbagai momen dan keseruan ATLANTIK 2026.",

        primaryAction: {
          label: "Buka Gallery",
          href: "https://kemenkeu-my.sharepoint.com/:f:/r/personal/hendra_hadisaputro_kemenkeu_go_id/Documents/dokumentasi%20atlantik%202026?d=wa825e5d7508a4144b33d37055baf7bc6&csf=1&web=1&e=mZYmJS",
          external: true,
        },

        secondaryAction: null,

        panel: {
          eyebrow: "Dokumentasi Atlantik 2026",
          title: "Moments worth remembering.",
          description:
            "Temukan kembali momen kebersamaan, pertandingan, dan keseruan ATLANTIK 2026.",
        },
      },
    ],
  },

  announcements: {
    eyebrow: "Informasi terbaru",
    title: "Pengumuman",

    action: {
      label: "Lihat semua",
      href: "/pengumuman",
    },
  },

  games: {
    eyebrow: "Rangkaian acara",
    title: "Daftar permainan",

    action: {
      label: "Lihat semua",
      href: "/permainan",
    },
  },

  leaderboard: {
    eyebrow: "Klasemen Atlantik 2026",
    title: "Pantau persaingan menuju Juara Umum",

    description:
      "Ikuti perolehan poin lima Subdit dari seluruh cabang Sports, Strategic Games, Esports, Fun Games, dan Mission: Grand Champion.",

    action: {
      label: "Buka leaderboard",
      href: "/leaderboard",
    },
  },

  schedule: {
    eyebrow: "Agenda",
    title: "Jadwal terdekat",
    categoryFallback: "Jadwal pertandingan",

    action: {
      label: "Jadwal lengkap",
      href: "/jadwal",
    },
  },
};
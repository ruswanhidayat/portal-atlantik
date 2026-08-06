# Atlantik 2026 Portal — Tahap 2

Portal informasi Atlantik 2026 dengan halaman jadwal, pengumuman, permainan, dan Leaderboard Juara Umum.

## Menjalankan proyek

```bash
npm install
npm run dev
```

## Deployment ke Vercel

Import repository ke Vercel. Tidak diperlukan environment variable atau konfigurasi build tambahan.

## Mengubah nama Subdit dan hasil perlombaan

Buka `data/leaderboard.js`.

- Ubah `divisions` untuk mengganti nama lima Subdit.
- Isi `results` pada setiap cabang dengan ID Subdit berdasarkan urutan juara 1 sampai 5.

Contoh:

```js
{
  id: "futsal-cup",
  name: "Futsal Cup",
  category: "sports",
  results: ["subdit-2", "subdit-4", "subdit-1", "subdit-3", "subdit-5"],
}
```

Poin dan klasemen juara umum akan dihitung otomatis. Jika hasil belum tersedia, gunakan `results: []`.

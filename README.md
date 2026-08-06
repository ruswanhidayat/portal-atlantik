# Portal Atlantik 2026 — Tahap 4

Pembaruan tahap ini:

- desain halaman Leaderboard tetap dipertahankan;
- accordion hasil setiap cabang menampilkan Peringkat, Subdit, dan Status/Hasil;
- poin yang diperoleh ditampilkan sebagai keterangan di bawah status juara;
- warna kepala accordion mengikuti warna kartu pada menu Permainan;
- hasil cabang dan Leaderboard Juara Umum memakai satu sumber data yang sama;
- validasi mencegah ID Subdit tidak dikenal atau Subdit yang sama dimasukkan dua kali pada satu cabang.

## Mengisi hasil perlombaan

Buka `data/leaderboard.js`, kemudian isi properti `results` berdasarkan urutan juara 1–5.

```js
{
  id: "futsal-cup",
  name: "Futsal Cup",
  scoringCategory: "sports",
  theme: "sports",
  results: [
    "subdit-2",
    "subdit-4",
    "subdit-1",
    "subdit-3",
    "subdit-5",
  ],
}
```

Urutan array tersebut otomatis menghasilkan:

- detail hasil Futsal pada accordion;
- poin 15, 10, 7, 5, dan 3 sesuai kategori Sports;
- akumulasi poin pada Leaderboard Juara Umum.

Tidak perlu memasukkan total poin secara manual.

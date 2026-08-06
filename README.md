# Portal Atlantik 2026 — Tahap 3

Pembaruan tahap ini:

- halaman Permainan berisi seluruh cabang lomba;
- kartu permainan memakai warna berdasarkan kategori;
- kategori tampil di kiri atas setiap kartu;
- halaman detail tetap menggunakan data statis;
- homepage hanya menampilkan permainan unggulan (`featured: true`);
- Poppins digunakan untuk judul dan Open Sans untuk teks.

## Mengubah konten permainan

Semua data permainan berada di `data/site.js`. Ubah `shortDescription`, `description`, `status`, dan `highlights` sesuai informasi final.

Untuk menampilkan atau menyembunyikan sebuah permainan di homepage, atur:

```js
featured: true
```

Halaman `/permainan` tetap menampilkan seluruh data pada array `games`.

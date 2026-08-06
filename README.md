# Atlantik 2026 — Portal Tahap 1

Portal informasi statis untuk Atlantik 2026.

## Ruang lingkup tahap 1

- Beranda event
- Jadwal kegiatan
- Pengumuman
- Daftar permainan
- Detail permainan
- Tautan Rapid Rush

Belum termasuk database, login, leaderboard dinamis, profil pemain/tim, dan admin panel.

## Deploy langsung melalui GitHub + Vercel

1. Buat repository GitHub baru.
2. Upload seluruh isi folder proyek ini ke root repository.
3. Di Vercel, pilih **Add New > Project**.
4. Import repository tersebut.
5. Framework Preset akan terbaca sebagai **Next.js**.
6. Klik **Deploy** tanpa mengubah Build Command atau Output Directory.

## Mengubah konten

Seluruh data utama berada di:

`data/site.js`

Untuk memasang URL Rapid Rush, ubah:

```js
rapidRushUrl: "#",
```

menjadi URL deployment randomizer, misalnya:

```js
rapidRushUrl: "https://nama-randomizer.vercel.app",
```

Commit perubahan ke GitHub. Vercel akan melakukan deployment ulang otomatis.

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section">
      <div className="container narrow empty-state">
        <span className="eyebrow">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p>Halaman yang Anda cari belum tersedia atau telah dipindahkan.</p>
        <Link className="button primary" href="/">Kembali ke beranda</Link>
      </div>
    </section>
  );
}

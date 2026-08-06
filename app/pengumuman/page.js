import { announcements } from "@/data/announcements";

export const metadata = { title: "Pengumuman" };

export default function AnnouncementsPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Informasi resmi</span>
        <h1>Pengumuman</h1>
        <p className="lead">Seluruh pembaruan resmi Atlantik 2026 akan ditampilkan di halaman ini.</p>
        <div className="stack">
          {announcements.map((item) => (
            <article className="card announcement" key={item.title}>
              <span className="meta">{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import GameCard from "@/components/GameCard";
import { announcements, games, schedule, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">Portal resmi event</span>
            <h1>Feel the vibe.<br />See you in the game.</h1>
            <p>{siteConfig.description}</p>
            <div className="actions">
              <Link className="button primary" href="/permainan">Lihat permainan</Link>
              <Link className="button secondary" href="/jadwal">Lihat jadwal</Link>
            </div>
          </div>
          <div className="hero-panel">
            <span className="eyebrow">Tema Atlantik 2026</span>
            <h2>{siteConfig.theme}</h2>
            <p>Bergerak bersama dalam semangat kolaborasi untuk menciptakan dampak yang lebih berarti.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Informasi terbaru</span><h2>Pengumuman</h2></div>
            <Link className="text-link" href="/pengumuman">Lihat semua →</Link>
          </div>
          <div className="grid two">
            {announcements.slice(0, 2).map((item) => (
              <article className="card" key={item.title}>
                <span className="meta">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Rangkaian acara</span><h2>Daftar permainan</h2></div>
            <Link className="text-link" href="/permainan">Lihat semua →</Link>
          </div>
          <div className="grid two">
            {games.map((game) => <GameCard game={game} key={game.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Agenda</span><h2>Jadwal terdekat</h2></div>
            <Link className="text-link" href="/jadwal">Jadwal lengkap →</Link>
          </div>
          <div className="timeline">
            {schedule.slice(0, 3).map((item) => (
              <article className="timeline-item" key={item.title}>
                <div><strong>{item.date}</strong><span>{item.time}</span></div>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

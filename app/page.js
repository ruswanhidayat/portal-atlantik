import Link from "next/link";

import AnnouncementSlider from "@/components/AnnouncementSlider";
import GameCard from "@/components/GameCard";

import { announcements } from "@/data/announcements";
import { schedule } from "@/data/schedule";
import { siteConfig } from "@/data/site-config";
import { getFeaturedGames } from "@/lib/games";

export default function HomePage() {
  const featuredGames = getFeaturedGames();
  const homeAnnouncements = announcements.filter(
    (announcement) => announcement.showOnHome
  );
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

      <section className="section announcement-home-section">
        <div className="container">
          <div className="section-heading announcement-section-heading">
            <div>
              <span className="eyebrow">Informasi terbaru</span>
              <h2>Pengumuman</h2>
            </div>
      
            <Link className="text-link" href="/pengumuman">
              Lihat semua →
            </Link>
          </div>
      
          <AnnouncementSlider announcements={homeAnnouncements} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Rangkaian acara</span><h2>Daftar permainan</h2></div>
            <Link className="text-link" href="/permainan">Lihat semua →</Link>
          </div>
          <div className="grid two">
            {featuredGames.map((game) => (
              <GameCard game={game} key={game.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section leaderboard-home-section">
        <div className="container">
          <div className="leaderboard-home-card">
            <div>
              <span className="eyebrow">Klasemen Atlantik 2026</span>
              <h2>Pantau persaingan menuju Juara Umum</h2>
              <p>Ikuti perolehan poin lima Subdit dari seluruh cabang Sports, Strategic Games, Esports, Fun Games, dan Mission: Grand Champion.</p>
            </div>
            <Link className="button leaderboard-button" href="/leaderboard">Buka leaderboard →</Link>
          </div>
        </div>
      </section>

      <section className="section home-schedule-section">
        <div className="container">
          <div className="section-heading home-schedule-heading">
            <div>
              <span className="eyebrow">Agenda</span>
              <h2>Jadwal terdekat</h2>
            </div>
      
            <Link className="text-link" href="/jadwal">
              Jadwal lengkap →
            </Link>
          </div>
      
          <div className="home-schedule-list">
            {schedule.slice(0, 3).map((item, index) => (
              <Link
                className={`home-schedule-card home-schedule-card-${
                  item.theme || "sports"
                }`}
                href="/jadwal"
                key={`${item.title}-${item.date}`}
              >
                <div className="home-schedule-time">
                  <strong>{item.time}</strong>
                  <span>{item.date}</span>
                </div>
      
                <div className="home-schedule-content">
                  <span className="home-schedule-category">
                    {item.category || "Jadwal pertandingan"}
                  </span>
      
                  <h3>{item.title}</h3>
      
                  {item.location && (
                    <span className="home-schedule-location">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
      
                        <circle
                          cx="12"
                          cy="10"
                          r="2.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
      
                      {item.location}
                    </span>
                  )}
                </div>
      
                <span className="home-schedule-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

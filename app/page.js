import Link from "next/link";

import AnnouncementSlider from "@/components/AnnouncementSlider";
import GameCard from "@/components/GameCard";
import HeroSlider from "@/components/HeroSlider";

import { announcements } from "@/data/announcements";
import { homepageData } from "@/data/homepage";
import { schedule } from "@/data/schedule";
import { siteConfig } from "@/data/site-config";
import { getFeaturedGames } from "@/lib/games";

export default function HomePage() {
  const featuredGames = getFeaturedGames();

  const homeAnnouncements = announcements.filter(
    (announcement) => announcement.showOnHome
  );

  // const {
  //   hero,
  //   theme,
  //   announcements: announcementContent,
  //   games,
  //   leaderboard,
  //   schedule: scheduleContent,
  // } = homepageData;

  const {
    hero,
    announcements: announcementContent,
    games,
    leaderboard,
    schedule: scheduleContent,
  } = homepageData;

  return (
    <main className="home-page">
      {/* <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">{hero.pill}</span>

            <h1>
              {hero.title.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < hero.title.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {siteConfig.description && (
              <p>{siteConfig.description}</p>
            )}

            <div className="actions">
              <Link
                className="button primary"
                href={hero.primaryAction.href}
              >
                {hero.primaryAction.label}
              </Link>

              <Link
                className="button secondary"
                href={hero.secondaryAction.href}
              >
                {hero.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <span className="eyebrow">
              {theme.eyebrow}
            </span>

            <h2>{siteConfig.theme}</h2>

            <p>{theme.description}</p>
          </div>
        </div>
      </section> */}
      <HeroSlider
        slides={hero.slides}
        siteConfig={siteConfig}
      />

      <section className="section announcement-home-section">
        <div className="container">
          <div className="section-heading announcement-section-heading">
            <div>
              <span className="eyebrow">
                {announcementContent.eyebrow}
              </span>

              <h2>{announcementContent.title}</h2>
            </div>

            <Link
              className="text-link"
              href={announcementContent.action.href}
            >
              {announcementContent.action.label} →
            </Link>
          </div>

          <AnnouncementSlider
            announcements={homeAnnouncements}
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {games.eyebrow}
              </span>

              <h2>{games.title}</h2>
            </div>

            <Link
              className="text-link"
              href={games.action.href}
            >
              {games.action.label} →
            </Link>
          </div>

          <div className="grid two">
            {featuredGames.map((game) => (
              <GameCard
                game={game}
                key={game.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section leaderboard-home-section">
        <div className="container">
          <div className="leaderboard-home-card">
            <div>
              <span className="eyebrow">
                {leaderboard.eyebrow}
              </span>

              <h2>{leaderboard.title}</h2>

              <p>{leaderboard.description}</p>
            </div>

            <Link
              className="button leaderboard-button"
              href={leaderboard.action.href}
            >
              {leaderboard.action.label} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-schedule-section">
        <div className="container">
          <div className="section-heading home-schedule-heading">
            <div>
              <span className="eyebrow">
                {scheduleContent.eyebrow}
              </span>

              <h2>{scheduleContent.title}</h2>
            </div>

            <Link
              className="text-link"
              href={scheduleContent.action.href}
            >
              {scheduleContent.action.label} →
            </Link>
          </div>

          <div className="home-schedule-list">
            {schedule.slice(0, 3).map((item) => (
              <Link
                className={`home-schedule-card home-schedule-card-${
                  item.theme || "sports"
                }`}
                href={scheduleContent.action.href}
                key={`${item.title}-${item.date}`}
              >
                <div className="home-schedule-time">
                  <strong>{item.time}</strong>
                  <span>{item.date}</span>
                </div>

                <div className="home-schedule-content">
                  <span className="home-schedule-category">
                    {item.category ||
                      scheduleContent.categoryFallback}
                  </span>

                  <h3>{item.title}</h3>

                  {item.location && (
                    <span className="home-schedule-location">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
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

                <span
                  className="home-schedule-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

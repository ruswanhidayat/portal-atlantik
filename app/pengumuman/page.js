import Link from "next/link";

import { announcements } from "@/data/announcements";

export const metadata = {
  title: "Pengumuman",
};

export default function AnnouncementsPage() {
  return (
    <section className="page-section announcement-page">
      <div className="container narrow">
        <span className="eyebrow">Informasi resmi</span>
        <h1>Pengumuman</h1>

        <p className="lead">
          Seluruh pembaruan resmi Atlantik 2026 akan ditampilkan di halaman
          ini.
        </p>

        {announcements.length > 0 ? (
          <div className="announcement-list">
            {announcements.map((item) => {
              const content = (
                <>
                  <div className="announcement-list-date">
                    <span>{item.date}</span>
                  </div>

                  <div className="announcement-list-content">
                    <span
                      className={`announcement-category announcement-category-${item.theme}`}
                    >
                      {item.label}
                    </span>

                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                  </div>

                  {item.href && (
                    <span
                      className="announcement-list-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </>
              );

              if (item.href) {
                return (
                  <Link
                    className={`announcement-list-item announcement-theme-${item.theme}`}
                    href={item.href}
                    key={item.id}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <article
                  className={`announcement-list-item announcement-theme-${item.theme}`}
                  key={item.id}
                >
                  {content}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="announcement-empty-state">
            <h2>Belum ada pengumuman terbaru</h2>
            <p>
              Informasi resmi Atlantik 2026 akan ditampilkan di halaman ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

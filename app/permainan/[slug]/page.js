import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { getAllGames, getGameBySlug } from "@/lib/games";

export function generateStaticParams() {
  return getAllGames().map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  return {
    title: game?.name || "Permainan",
  };
}

export default async function GameDetailPage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const rapidRushReady =
    game.slug === "rapid-rush" &&
    siteConfig.rapidRushUrl !== "#";

  return (
    <section className="page-section">
      <div className="container narrow">
        <Link href="/permainan" className="back-link">
          ← Kembali ke daftar permainan
        </Link>

        <div className="detail-hero">
          <div className="card-topline">
            <span className="eyebrow">{game.category}</span>
            <span className="status">{game.status}</span>
          </div>

          <h1>{game.name}</h1>
          <p className="lead">{game.description}</p>

          {game.slug === "rapid-rush" &&
            (rapidRushReady ? (
              <a
                className="button primary"
                href={siteConfig.rapidRushUrl}
                target="_blank"
                rel="noreferrer"
              >
                Mulai Rapid Rush
              </a>
            ) : (
              <span className="button disabled">
                Tautan belum tersedia
              </span>
            ))}
        </div>

        <div className="card detail-card">
          <h2>Gambaran permainan</h2>

          <ul className="feature-list">
            {game.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

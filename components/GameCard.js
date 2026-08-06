import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <article className="card game-card">
      <div className="card-topline">
        <span className="eyebrow">{game.category}</span>
        <span className="status">{game.status}</span>
      </div>
      <h3>{game.name}</h3>
      <p>{game.shortDescription}</p>
      <Link className="text-link" href={`/permainan/${game.slug}`}>
        Lihat detail <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

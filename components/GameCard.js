import Link from "next/link";

import GameStatus from "@/components/GameStatus";

export default function GameCard({ game }) {
  return (
    <article
      className={`game-card game-card-${
        game.categoryKey || "default"
      }`}
    >
      <div className="card-topline">
        <span className="game-category">
          {game.category}
        </span>

        <GameStatus
          schedulePeriod={game.schedulePeriod}
        />
      </div>

      <h3>{game.name}</h3>

      <p>{game.shortDescription}</p>

      <Link
        className="text-link"
        href={`/permainan/${game.slug}`}
      >
        Lihat detail{" "}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
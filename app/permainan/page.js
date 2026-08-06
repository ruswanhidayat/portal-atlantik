import GameCard from "@/components/GameCard";
import { getAllGames } from "@/lib/games";

export const metadata = { title: "Permainan" };

export default function GamesPage() {
  const games = getAllGames();
  return (
    <section className="page-section">
      <div className="container">
        <span className="eyebrow">Explore the games</span>
        <h1>Daftar permainan</h1>
        <p className="lead">Temukan informasi dan mekanisme permainan dalam rangkaian Atlantik 2026.</p>
        <div className="grid two games-grid">
          {games.map((game) => <GameCard game={game} key={game.slug} />)}
        </div>
      </div>
    </section>
  );
}

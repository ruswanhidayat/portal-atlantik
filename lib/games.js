import { games } from "@/data/games";
import { competitionSchedules } from "@/data/schedule";
import { getCompetitionPeriod } from "@/lib/game-status";

function enrichGame(game) {
  const competition = competitionSchedules.find(
    (item) => item.id === game.slug
  );

  const period = getCompetitionPeriod(competition);

  return {
    ...game,
    schedulePeriod: period
      ? {
          start: period.start.toISOString(),
          end: period.end.toISOString(),
        }
      : null,
  };
}

export function getAllGames() {
  return games.map(enrichGame);
}

export function getFeaturedGames() {
  return games
    .filter((game) => game.featured)
    .map(enrichGame);
}

export function getGameBySlug(slug) {
  const game = games.find((game) => game.slug === slug);

  return game ? enrichGame(game) : undefined;
}
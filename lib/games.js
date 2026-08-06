import { games } from "@/data/games";

export function getAllGames() {
  return games;
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}

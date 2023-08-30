import { z } from 'zod';
import { gamePlatformsMatching, gameSortingMatching, gameCategories, gamesListSchema, gameSchema } from '.';

export type GamesList = z.infer<typeof gamesListSchema>;

export type Game = z.infer<typeof gameSchema>;

export type GamesListFilters = {
  platform?: keyof typeof gamePlatformsMatching;
  category?: (typeof gameCategories)[number];
  'sort-by'?: keyof typeof gameSortingMatching;
};

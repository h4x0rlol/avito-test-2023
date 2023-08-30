import { z } from 'zod';
import { gamePlatformsMatching, gameSortingMatching, gameCategories, gamesListSchema } from '.';

export type GamesList = z.infer<typeof gamesListSchema>;

export type GamesListFilters = {
  platform?: keyof typeof gamePlatformsMatching;
  category?: (typeof gameCategories)[number];
  'sort-by'?: keyof typeof gameSortingMatching;
};

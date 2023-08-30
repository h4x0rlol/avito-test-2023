import { z } from 'zod';
import { gamePlatformsMatching, gameSortingMatching, gameTags, gamesListSchema } from '.';

export type GamesList = z.infer<typeof gamesListSchema>;

export type GameListFilters = {
  platform: keyof typeof gamePlatformsMatching;
  tags: Array<(typeof gameTags)[number]>;
  sorting: keyof typeof gameSortingMatching;
};

import { z } from 'zod';
import { LOCALE } from '../utils';

export const gameIdSchema = z.coerce.number().int().nonnegative();

export const gamesListSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    release_date: z.coerce.date().transform(d => d.toLocaleDateString(LOCALE)),
    publisher: z.string(),
    genre: z.string(),
    thumbnail: z.string(),
  })
  .array();

export const gamePlatformsMatching = {
  pc: 'PC',
  browser: 'Browser',
  all: 'All',
} as const;
export const gamePlatformsOptions = (
  Object.keys(gamePlatformsMatching) as Array<keyof typeof gamePlatformsMatching>
).map(k => ({ value: k, label: gamePlatformsMatching[k] }));

export const gameTags = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
] as const;
export const gameTagsOptions = gameTags.map(t => ({ value: t, label: t }));

export const gameSortingMatching = {
  'release-date': 'Release date',
  popularity: 'Popularity',
  alphabetical: 'Alphabetical',
  relevance: 'Relevance',
} as const;
export const gameSortingOptions = (Object.keys(gameSortingMatching) as Array<keyof typeof gameSortingMatching>).map(
  k => ({ value: k, label: gameSortingMatching[k] }),
);

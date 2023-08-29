const GamePlatformsMatching = {
  pc: 'PC',
  browser: 'Browser',
  all: 'All',
} as const;
export const GamePlatformsOptions = (
  Object.keys(GamePlatformsMatching) as Array<keyof typeof GamePlatformsMatching>
).map(k => ({ value: k, label: GamePlatformsMatching[k] }));

const GameTags = [
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
export const GameTagsOptions = GameTags.map(t => ({ value: t, label: t }));

export const GameSortingMatching = {
  'release-date': 'Release date',
  popularity: 'Popularity',
  alphabetical: 'Alphabetical',
  relevance: 'Relevance',
} as const;
export const GameSortingOptions = (Object.keys(GameSortingMatching) as Array<keyof typeof GameSortingMatching>).map(
  k => ({ value: k, label: GameSortingMatching[k] }),
);

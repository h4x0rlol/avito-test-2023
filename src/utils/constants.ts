export const PATHS = {
  MAIN: '/',
  GAME: '/:id',
  NOT_FOUND: '*',
} as const;

export const API_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const MAX_RETIRES = 3;

export const MAX_SELECT_ITEMS = 50;

export const BREAKPOINTS = {
  laptop: '(min-width: 1024px)',
  tablet: '(min-width: 768px)',
} as const;

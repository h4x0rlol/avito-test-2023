export const PATHS = {
  MAIN: '/',
  GAME: '/:id',
  NOT_FOUND: '*',
} as const;

export const API_BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const MAX_RETIRES = 3;

export const CACHE_TIME_IN_SECOND = 60 * 5;

export const BREAKPOINTS = {
  laptop: '(min-width: 1024px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1440px)',
} as const;

export const LOCALES = {
  ru: 'ru',
  en: 'en',
} as const;

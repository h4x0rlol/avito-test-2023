import { z } from 'zod';
import { GamesListFilters } from '../api';

export function isFiltersEmpty(filters: GamesListFilters) {
  return (
    Object.entries(filters).filter(([_, value]) => !!value && !(Array.isArray(value) && value.length === 0)).length ===
    0
  );
}

export function isValidDate(date: unknown): date is Date {
  return z.coerce.date().safeParse(date).success;
}

export function formatDate(date: unknown, locale: string = 'ru') {
  if (isValidDate(date)) {
    return new Date(date).toLocaleDateString(locale);
  }

  return null;
}

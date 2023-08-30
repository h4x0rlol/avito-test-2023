import { z } from 'zod';

export function isValidDate(date: unknown): date is Date {
  return !!date && z.coerce.date().safeParse(date).success;
}

export function formatDate(date: unknown, locale: string = 'ru') {
  if (isValidDate(date)) {
    return new Date(date).toLocaleDateString(locale);
  }

  return null;
}

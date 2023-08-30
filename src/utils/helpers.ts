import { z } from 'zod';
import { LOCALES } from '.';

export function isValidDate(date: unknown): date is string | number | Date {
  // Because new Date(null) is valid
  if (date === null) {
    return false;
  }

  return z.coerce.date().safeParse(date).success;
}

export function formatDate(date: unknown, locale: keyof typeof LOCALES = LOCALES.ru) {
  if (isValidDate(date)) {
    return new Date(date).toLocaleDateString(locale);
  }

  return null;
}

export function isEmptyObject(obj: object): obj is Record<string, never> {
  return z.object({}).strict().safeParse(obj).success;
}

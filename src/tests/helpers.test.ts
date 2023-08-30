import { describe, expect, test } from 'vitest';
import { LOCALES, formatDate, isValidDate } from '../utils';

describe('Helpers tests', () => {
  test('Should return true, if argument (except null) can be coerced to Date', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate('2023-00-07')).toBe(false);
    expect(isValidDate('2023-06-07')).toBe(true);
    expect(isValidDate('2023-08-30T16:15:01.114Z')).toBe(true);
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(0)).toBe(true);
    expect(isValidDate(23132132121)).toBe(true);
  });

  test('Should return formatted date according to the locale, null if date is invalid', () => {
    expect(formatDate(null)).toBe(null);
    expect(formatDate(undefined)).toBe(null);
    expect(formatDate({})).toBe(null);
    expect(formatDate('2023-00-07')).toBe(null);
    expect(formatDate('2023-06-07')).toBe('07.06.2023');
    expect(formatDate('2023-06-07', LOCALES.ru)).toBe('07.06.2023');
    expect(formatDate('2023-06-07', LOCALES.en)).toBe('6/7/2023');
    expect(formatDate('2023-08-30T16:15:01.114Z')).toBe('30.08.2023');
    expect(formatDate(23132132121)).toBe('25.09.1970');
  });
});

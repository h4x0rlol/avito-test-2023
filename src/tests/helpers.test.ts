import { describe, expect, test } from 'vitest';
import { formatDate, isValidDate } from '../utils';

describe('Helpers tests', () => {
  test('isValidDate() test', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate('2023-00-07')).toBe(false);
    expect(isValidDate('2023-06-07')).toBe(true);
    expect(isValidDate('2023-08-30T16:15:01.114Z')).toBe(true);
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(23132132121)).toBe(true);
  });

  test('formatDate() test', () => {
    expect(formatDate(null)).toBe(null);
    expect(formatDate(undefined)).toBe(null);
    expect(formatDate({})).toBe(null);
    expect(formatDate('2023-00-07')).toBe(null);
    expect(formatDate('2023-06-07')).toBe('07.06.2023');
    expect(formatDate('2023-08-30T16:15:01.114Z')).toBe('30.08.2023');
    expect(formatDate(23132132121)).toBe('25.09.1970');
  });
});

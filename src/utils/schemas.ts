import { z } from 'zod';

export const gameIdSchema = z.coerce.number().int().nonnegative();

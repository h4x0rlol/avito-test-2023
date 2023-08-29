import { z } from 'zod';

const gamesListSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    release_date: z.coerce.date(),
    publisher: z.string(),
    genre: z.string(),
    thumbnail: z.string(),
  })
  .array();

export type GamesList = z.infer<typeof gamesListSchema>;

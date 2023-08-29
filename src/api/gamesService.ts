import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../utils';
import { GameListFilters, GamesList, gamesListSchema } from '.';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  tagTypes: ['Games'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: builder => ({
    getGamesList: builder.query<GamesList, GameListFilters>({
      query: filters => ({
        url: '/filter',
        params: {
          tag: filters.tags.join('.'),
          platform: filters.platform,
          'sort-by': filters.sorting,
        },
      }),
      transformResponse: response => {
        return gamesListSchema.parse(response);
      },
    }),
  }),
});

export const { useGetGamesListQuery } = gamesApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../utils';
import { GamesListFilters, GamesList, gamesListSchema, Game, gameSchema } from '.';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: builder => ({
    getGamesList: builder.query<GamesList, GamesListFilters>({
      query: filters => ({
        url: '/games',
        params: filters,
      }),
      transformResponse: response => {
        return gamesListSchema.parse(response);
      },
    }),
    getGameById: builder.query<Game, string>({
      query: id => ({
        url: '/game',
        params: { id },
      }),
      transformResponse: response => {
        return gameSchema.parse(response);
      },
    }),
  }),
});

export const { useGetGamesListQuery, useGetGameByIdQuery } = gamesApi;

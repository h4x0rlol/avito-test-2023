import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, CACHE_TIME_IN_SECOND, MAX_RETIRES } from '../utils';
import { GamesListFilters, GamesList, gamesListSchema, Game, gameSchema } from '.';
import { REHYDRATE } from 'redux-persist';

const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
      return headers;
    },
  }),
  {
    maxRetries: MAX_RETIRES,
  },
);

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: staggeredBaseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
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
      keepUnusedDataFor: CACHE_TIME_IN_SECOND,
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

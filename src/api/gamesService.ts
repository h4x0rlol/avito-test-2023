import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, CACHE_TIME_IN_SECOND, MAX_RETIRES, isEmptyObject } from '../utils';
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

export const gamesListApi = createApi({
  reducerPath: 'gamesListApi',
  baseQuery: staggeredBaseQuery,
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
  }),
});

// Separate API for whitelist to persistent store
export const gameApi = createApi({
  reducerPath: 'gameApi',
  keepUnusedDataFor: CACHE_TIME_IN_SECOND,
  baseQuery: staggeredBaseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      // Check if persisted state expired, because cant pass undefined as initial state
      // https://github.com/kamranahmedse/redux-persist-expire/issues/34
      if (typeof action.payload?.[reducerPath] === 'object' && isEmptyObject(action.payload?.[reducerPath])) {
        return undefined;
      }
      return action.payload?.[reducerPath];
    }
  },
  endpoints: builder => ({
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

export const { useGetGamesListQuery } = gamesListApi;
export const { useGetGameByIdQuery } = gameApi;

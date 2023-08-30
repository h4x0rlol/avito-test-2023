import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import { gamesListApi, gameApi } from '../api';
import gamesListFiltersReducer from './reducers/GamesListFiltersSlice';
import { CACHE_TIME_IN_SECOND } from '../utils';

const rootReducer = combineReducers({
  gamesListFiltersReducer,
  [gamesListApi.reducerPath]: gamesListApi.reducer,
  [gameApi.reducerPath]: gameApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [gameApi.reducerPath],
  transforms: [expireReducer(gameApi.reducerPath, { expireSeconds: CACHE_TIME_IN_SECOND, autoExpire: true })],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(gamesListApi.middleware, gameApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

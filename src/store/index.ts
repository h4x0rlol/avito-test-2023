import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { gamesApi } from '../api';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

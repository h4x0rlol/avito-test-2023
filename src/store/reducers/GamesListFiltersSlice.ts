import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GamesListFilters } from '../../api';

const initialState: GamesListFilters = {
  platform: undefined,
  category: undefined,
  'sort-by': undefined,
};

export const gamesListFiltersSlice = createSlice({
  name: 'gamesListFilters',
  initialState,
  reducers: {
    setPlatform(state, action: PayloadAction<GamesListFilters['platform']>) {
      state.platform = action.payload;
    },
    setCategory(state, action: PayloadAction<GamesListFilters['category']>) {
      state.category = action.payload;
    },
    setSorting(state, action: PayloadAction<GamesListFilters['sort-by']>) {
      state['sort-by'] = action.payload;
    },
  },
});

export default gamesListFiltersSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentRecipeAPI } from '../api/api';
import { CurrentRecipe, CurrentRecipeState } from '../types/types';

const initialState: CurrentRecipeState = {
  currentRecipe: null,
  isFetching: false,
  activeRecipe: {},
};

const currentRecipeSlice = createSlice({
  name: 'currentRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentRecipe.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        getCurrentRecipe.fulfilled,
        (state, action: PayloadAction<CurrentRecipe>) => {
          state.isFetching = false;
          state.currentRecipe = action.payload;
          state.activeRecipe = action.payload;
        }
      );
  },
});

export const getCurrentRecipe = createAsyncThunk(
  'currentRecipe/getCurrentRecipe',
  async function (id: string) {
    const response = await currentRecipeAPI.getCurrentRecipeRequest(id);

    return response.data.data.recipe;
  }
);

export default currentRecipeSlice.reducer;

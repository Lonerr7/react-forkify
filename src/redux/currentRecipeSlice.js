import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { currentRecipeAPI } from '../api/api';

const initialState = {
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
      .addCase(getCurrentRecipe.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentRecipe = action.payload;
        state.activeRecipe = action.payload;
      });
  },
});

export const getCurrentRecipe = createAsyncThunk(
  'currentRecipe/getCurrentRecipe',
  async function ({ id }) {
    const response = await currentRecipeAPI.getCurrentRecipeRequest(id);

    console.log(response.data.data.recipe);

    return response.data.data.recipe;
  }
);

export const {} = currentRecipeSlice.actions;
export default currentRecipeSlice.reducer;

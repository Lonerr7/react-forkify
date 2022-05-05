import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recipesAPI } from '../api/api';

const initialState = {
  recipesArr: null,
  isFetching: false,
  nothingFound: false,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearRecipes(state) {
      state.recipesArr = [];
    },
    getRecipesSuccess(state, action) {
      state.recipesArr = action.payload.recipesArr;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state, action) => {
        state.isFetching = true;
        // state.recipesArr = null;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.recipesArr = action.payload;
      });
  },
});

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async function ({ recipe }, { dispatch }) {
    const response = await recipesAPI.getRecipes(recipe);
    console.log(response);

    return response.data.data.recipes;
  }
);

export const { clearRecipes, getRecipesSuccess } = recipesSlice.actions;
export default recipesSlice.reducer;

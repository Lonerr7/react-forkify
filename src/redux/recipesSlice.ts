import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { recipesAPI } from '../api/api';
import { RecipeSmall, RecipesState } from '../types/types';

const initialState: RecipesState = {
  recipesArr: null,
  isFetching: false,
  currentPage: 1,
  totalItemsCount: 0,
};

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async function (recipe: string, { dispatch }) {
    dispatch(setRecipesToNull());

    const response = await recipesAPI.getRecipes(recipe);

    return response.data.data.recipes;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipesToNull(state) {
      state.recipesArr = null;
    },

    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        getRecipes.fulfilled,
        (state, action: PayloadAction<RecipeSmall[]>) => {
          state.isFetching = false;
          state.recipesArr = action.payload;
          state.totalItemsCount = action.payload.length;
        }
      );
  },
});

export const { setRecipesToNull, changePage } = recipesSlice.actions;
export default recipesSlice.reducer;

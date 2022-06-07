import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recipesAPI } from '../api/api';

const initialState = {
  recipesArr: null,
  isFetching: false,
  nothingFound: false,
  currentPage: 1,
  totalItemsCount: 0,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipesToNull(state) {
      state.recipesArr = null;
    },
    getRecipesSuccess(state, action) {
      state.recipesArr = action.payload.recipesArr;
    },
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.recipesArr = action.payload;
        state.totalItemsCount = action.payload.length;
      });
  },
});

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async function ({ recipe }, { dispatch }) {
    dispatch(setRecipesToNull());

    const response = await recipesAPI.getRecipes(recipe);

    return response.data.data.recipes;
  }
);

export const { setRecipesToNull, getRecipesSuccess, changePage } = recipesSlice.actions;
export default recipesSlice.reducer;

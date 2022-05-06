import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarkedRecipes: [],
  recipesIds: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarkedRecipe(state, action) {
      state.bookmarkedRecipes.push(action.payload.newBookmarkedRecipe);
      state.recipesIds.push(action.payload.newRecipeId);
    },
    deleteBookmarkedRecipe(state, action) {
      state.bookmarkedRecipes = state.bookmarkedRecipes.filter(
        (r) => r.id !== action.payload.id
      );
      state.recipesIds = state.recipesIds.filter(
        (id) => id !== action.payload.id
      );
    },
  },
});

export const { setBookmarkedRecipe, deleteBookmarkedRecipe } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;

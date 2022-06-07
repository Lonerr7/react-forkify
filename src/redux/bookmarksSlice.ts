import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookmarksState, CurrentRecipe } from '../types/types';

const initialState: BookmarksState = {
  bookmarkedRecipes: [],
  recipesIds: [],
};

type SetBookmarkedRecipePayload = {
  newBookmarkedRecipe: CurrentRecipe;
  newRecipeId: string;
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarkedRecipe(
      state,
      action: PayloadAction<SetBookmarkedRecipePayload>
    ) {
      state.bookmarkedRecipes.push(action.payload.newBookmarkedRecipe);
      state.recipesIds.push(action.payload.newRecipeId);
    },
    deleteBookmarkedRecipe(state, action: PayloadAction<string>) {
      state.bookmarkedRecipes = state.bookmarkedRecipes.filter(
        (r) => r.id !== action.payload
      );
      state.recipesIds = state.recipesIds.filter((id) => id !== action.payload);
    },
  },
});

export const { setBookmarkedRecipe, deleteBookmarkedRecipe } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;

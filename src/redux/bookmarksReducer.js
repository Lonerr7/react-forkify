const SET_BOOKMARKED_RECIPE = 'SET_BOOKMARKED_RECIPE';
const DELETE_BOOKMARKED_RECIPE = 'DELETE_BOOKMARKED_RECIPE';

const initialState = {
  bookmarkedRecipes: [],
  recipesIds: [],
};

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKMARKED_RECIPE:
      return {
        ...state,
        bookmarkedRecipes: [
          ...state.bookmarkedRecipes,
          action.newBookmarkedRecipe,
        ],
        recipesIds: [...state.recipesIds, action.id],
      };
    case DELETE_BOOKMARKED_RECIPE:
      return {
        ...state,
        bookmarkedRecipes: state.bookmarkedRecipes.filter(
          (r) => r.id !== action.id
        ),
        recipesIds: state.recipesIds.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export const setBookmarkedRecipeSuccess = (newBookmarkedRecipe, id) => ({
  type: SET_BOOKMARKED_RECIPE,
  newBookmarkedRecipe,
  id,
});

export const deleteBookmarkedRecipeSuccess = (id) => ({
  type: DELETE_BOOKMARKED_RECIPE,
  id,
});

export default bookmarksReducer;

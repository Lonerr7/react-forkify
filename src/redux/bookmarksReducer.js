const GET_RECIPES = 'GET_RECIPES';
const SET_BOOKMARKED_RECIPE = 'SET_BOOKMARKED_RECIPE';
const DELETE_BOOKMARKED_RECIPE = 'DELETE_BOOKMARKED_RECIPE';

const initialState = {
  recipes: null,
  bookmaredRecipes: [],
  recipesIds: [],
};

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.newRecipes,
      };
    case SET_BOOKMARKED_RECIPE:
      return {
        ...state,
        bookmaredRecipes: [
          ...state.bookmaredRecipes,
          action.newBookmarkedRecipe,
        ],
        recipesIds: [...state.recipesIds, action.id],
      };
    case DELETE_BOOKMARKED_RECIPE:
      return {
        ...state,
        bookmaredRecipes: state.bookmaredRecipes.filter(
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

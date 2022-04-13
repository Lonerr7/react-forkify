const GET_BOOKMARKED_RECIPES_AND_IDS = 'GET_BOOKMARKED_RECIPES_AND_IDS';
const SET_BOOKMARKED_RECIPE = 'SET_BOOKMARKED_RECIPE';
const DELETE_BOOKMARKED_RECIPE = 'DELETE_BOOKMARKED_RECIPE';

const initialState = {
  bookmarkedRecipes: [],
  recipesIds: [],
};

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKMARKED_RECIPES_AND_IDS:
      return {
        ...state,
        bookmarkedRecipes: action.recieps,
        recipesIds: action.ids,
      };
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

const setBookmarkedRecipeSuccess = (newBookmarkedRecipe, id) => ({
  type: SET_BOOKMARKED_RECIPE,
  newBookmarkedRecipe,
  id,
});

export const deleteBookmarkedRecipeSuccess = (id) => ({
  type: DELETE_BOOKMARKED_RECIPE,
  id,
});

const getBookmarkedRecipesAndIdsSuccess = (recieps, ids) => ({
  type: GET_BOOKMARKED_RECIPES_AND_IDS,
  recieps,
  ids,
});

export const setBookmarkedRecipe = (newBookmarkedRecipe, id) => (dispatch) => {
  if (localStorage.getItem('bookmarks')) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    const ids = JSON.parse(localStorage.getItem('bookmarksIds'));

    bookmarks.push(newBookmarkedRecipe);
    ids.push(id);

    localStorage.setItem(`bookmarks`, JSON.stringify(bookmarks));
    localStorage.setItem(`bookmarksIds`, JSON.stringify(ids));

    dispatch(setBookmarkedRecipeSuccess(newBookmarkedRecipe, id));
  } else {
    localStorage.setItem(`bookmarks`, JSON.stringify([newBookmarkedRecipe]));
    localStorage.setItem(`bookmarksIds`, JSON.stringify([id]));

    dispatch(setBookmarkedRecipeSuccess(newBookmarkedRecipe, id));
  }
};

export const deleteBookmarkedRecipe = (id) => (dispatch) => {
  const bookmarks = JSON.parse(localStorage.getItem(`bookmarks`));
  const ids = JSON.parse(localStorage.getItem('bookmarksIds'));

  const filteredBookmarks = bookmarks.filter((b) => b.id !== id);
  const filteredIds = ids.filter((bookmarkId) => bookmarkId !== id);

  localStorage.setItem(`bookmarks`, JSON.stringify(filteredBookmarks));
  localStorage.setItem(`bookmarksIds`, JSON.stringify(filteredIds));

  dispatch(deleteBookmarkedRecipeSuccess(id));
};

export const getBookmarkedRecipesAndIds = () => (dispatch) => {
  if (
    localStorage.getItem(`bookmarks`) &&
    localStorage.getItem(`bookmarksIds`)
  ) {
    const recipes = JSON.parse(localStorage.getItem(`bookmarks`));
    const recipesIds = JSON.parse(localStorage.getItem(`bookmarksIds`));

    dispatch(getBookmarkedRecipesAndIdsSuccess(recipes, recipesIds));
  } else {
    dispatch(getBookmarkedRecipesAndIdsSuccess([], []));
  }
};

export default bookmarksReducer;

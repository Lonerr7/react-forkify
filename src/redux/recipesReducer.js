import { recipesAPI } from '../api/api';

const GET_RECIPES = 'GET_RECIPES';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
  recipesArr: null,
  isFetching: false,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesArr: action.newRecipes,
        gotRecipes: action.gotRecipes,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

const getRecipesSuccess = (newRecipes) => ({
  type: GET_RECIPES,
  newRecipes,
});

const setIsFetchingSuccess = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const getRecipes = (searchWord) => async (dispatch) => {
  try {
    if (searchWord !== '') {
      // Reseting recipes to always dispaly preloader when searching for recipes
      dispatch(getRecipesSuccess(null));

      dispatch(setIsFetchingSuccess(true));
      const response = await recipesAPI.getRecipes(searchWord);
      dispatch(setIsFetchingSuccess(false));
      console.log(response.data.results);
      if (response.data.results !== 0) {
        dispatch(getRecipesSuccess(response.data.data.recipes));
      } else {
        // If no recipes found - display error message by checking if recipesArr.length === 0
        dispatch(getRecipesSuccess([]));
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default recipesReducer;

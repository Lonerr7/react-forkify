import { recipesAPI } from '../api/api';

const initialState = {
  recipes: null,
  gotRecipes: true,
};

// TODO: 1. gotRecipes - написать логику отображения в UI. 2. Отрисовать рецепты

const GET_RECIPES = 'GET_RECIPES';
const DID_GET_RECIPES = 'DID_GET_RECIPES';

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.newRecipes,
        gotRecipes: action.gotRecipes,
      };
    case DID_GET_RECIPES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const getRecipesSuccess = (newRecipes) => ({
  type: GET_RECIPES,
  newRecipes,
});

const didGetRecipes = (gotRecipes) => ({
  type: DID_GET_RECIPES,
  gotRecipes,
});

export const getRecipes = (searchWord) => async (dispatch) => {
  try {
    if (searchWord !== '') {
      const response = await recipesAPI.getRecipes(searchWord);
      console.log(response.data);
      if (response.data.results !== 0) {
        dispatch(getRecipesSuccess(response.data.data.recipes));
        dispatch(didGetRecipes(true));
      } else {
        dispatch(didGetRecipes(false));
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default recipesReducer;

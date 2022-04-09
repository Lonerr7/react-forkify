import { currentRecipeAPI } from '../api/api';
import { setIsFetchingSuccess } from './recipesReducer';

const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
const GET_CURRENT_RECIPE_ID = 'GET_CURRENT_RECIPE_ID';

const initialState = {
  currentRecipeId: null,
  currentRecipe: null,
};

const currentRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RECIPE_ID:
      return {
        ...state,
        currentRecipeId: action.recipeId,
      };
    case GET_CURRENT_RECIPE:
      return {
        ...state,
        currentRecipe: action.newRecipe,
      };
    default:
      return state;
  }
};

const getCurrentRecipeSuccess = (newRecipe) => ({
  type: GET_CURRENT_RECIPE,
  newRecipe,
});

export const getCurrentRecipeIdSuccess = (recipeId) => ({
  type: GET_CURRENT_RECIPE_ID,
  recipeId,
});

export const getCurrentRecipe = () => async (dispatch, getState) => {
  try {
    dispatch(getCurrentRecipeSuccess(null));
    dispatch(setIsFetchingSuccess(true));
    const response = await currentRecipeAPI.getCurrentRecipeRequest(
      getState().currentRecipe.currentRecipeId
    );
    dispatch(setIsFetchingSuccess(false));
    console.log(response.data);
    dispatch(getCurrentRecipeSuccess(response.data.data.recipe));
  } catch (error) {
    console.error(error);
  }
};

export default currentRecipeReducer;

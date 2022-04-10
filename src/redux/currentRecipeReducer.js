import { currentRecipeAPI } from '../api/api';

const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  currentRecipe: null,
  isFetching: false,
};

const currentRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RECIPE:
      return {
        ...state,
        currentRecipe: action.newRecipe,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

const getCurrentRecipeSuccess = (newRecipe) => ({
  type: GET_CURRENT_RECIPE,
  newRecipe,
});

const toggleIsFetchingSuccess = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getCurrentRecipe = (id) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingSuccess(true));
    const response = await currentRecipeAPI.getCurrentRecipeRequest(id);
    dispatch(toggleIsFetchingSuccess(false));
    dispatch(getCurrentRecipeSuccess(response.data.data.recipe));
  } catch (error) {
    console.error(error);
  }
};

export default currentRecipeReducer;

import { currentRecipeAPI } from '../api/api';

const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_ACTIVE_RECIPE = 'SET_ACTIVE_RECIPE';

const initialState = {
  currentRecipe: null,
  isFetching: false,
  activeRecipe: {},
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
    case SET_ACTIVE_RECIPE:
      return {
        ...state,
        activeRecipe: action.activeRecipe,
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

const setActiveRecipeSuccess = (activeRecipe) => ({
  type: SET_ACTIVE_RECIPE,
  activeRecipe,
});

export const getCurrentRecipe = (id) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingSuccess(true));
    const response = await currentRecipeAPI.getCurrentRecipeRequest(id);
    dispatch(toggleIsFetchingSuccess(false));
    dispatch(getCurrentRecipeSuccess(response.data.data.recipe));
    dispatch(setActiveRecipeSuccess(response.data.data.recipe));
  } catch (error) {
    console.error(error);
  }
};

export default currentRecipeReducer;

import axios from 'axios';
import {
  GetCurrentRecipeReturnType,
  GetRcipesReturnType,
} from '../types/types';

const apiKey = '6ae0ecdc-2a38-468b-a09f-30f3032fc5a5';

const axiosInstance = axios.create({
  baseURL: 'https://forkify-api.herokuapp.com/api/v2/recipes',
});

export const recipesAPI = {
  getRecipes(recipe: string) {
    return axiosInstance.get<GetRcipesReturnType>(
      `?search=${recipe}&key=${apiKey}`
    );
  },
};

export const currentRecipeAPI = {
  getCurrentRecipeRequest(id: string) {
    return axiosInstance.get<GetCurrentRecipeReturnType>(
      `/${id}?key=${apiKey}`
    );
  },
};

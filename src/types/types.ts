export type RecipeSmall = {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
};

export type RecipesState = {
  recipesArr: null | RecipeSmall[];
  isFetching: boolean;
  currentPage: number;
  totalItemsCount: number;
};

type Ingredient = {
  quantity: number;
  unit: string;
  description: string;
};

export type CurrentRecipe = {
  publisher: string;
  ingredients: Ingredient[];
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
};

export type CurrentRecipeState = {
  currentRecipe: null | CurrentRecipe;
  isFetching: boolean;
  activeRecipe: CurrentRecipe | {};
};

export type GetRcipesReturnType = {
  status: string;
  results: number;
  data: {
    recipes: RecipeSmall[];
  };
};

export type GetCurrentRecipeReturnType = {
  status: string;
  data: {
    recipe: CurrentRecipe;
  };
};

export type BookmarksState = {
  bookmarkedRecipes: CurrentRecipe[];
  recipesIds: string[];
};

import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from '../Recipe';

const RecipeContainer = () => {
  const currentRecipe = useSelector(
    (state) => state.currentRecipe.currentRecipe
  );
  const isFetching = useSelector((state) => state.currentRecipe.isFetching);

  return <Recipe currentRecipe={currentRecipe} isFetching={isFetching} />;
};

export default RecipeContainer;

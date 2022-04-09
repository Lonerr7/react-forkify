import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Recipe from '../Recipe';
import { useMatch } from 'react-router-dom';
import { getCurrentRecipeIdSuccess } from '../../../../redux/currentRecipeReducer';

const RecipeContainer = ({ setCurrentRecipeId, currentRecipe }) => {
  const match = useMatch('/react-forkify/:id');
  console.log(match);
  const id = match ? match.params.id : '';

  useEffect(() => {
    setCurrentRecipeId(id);
    // eslint-disable-next-line
  }, [id]);

  return <Recipe currentRecipe={currentRecipe} />;
};

const mapStateToProps = (state) => ({
  currentRecipe: state.currentRecipe.currentRecipe,
});

const dispatchToProps = {
  setCurrentRecipeId: getCurrentRecipeIdSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(RecipeContainer);

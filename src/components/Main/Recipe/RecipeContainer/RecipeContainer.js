import React from 'react';
import { connect } from 'react-redux';
import Recipe from '../Recipe';

const RecipeContainer = ({ currentRecipe, isFetching }) => {
  return <Recipe currentRecipe={currentRecipe} isFetching={isFetching} />;
};

const mapStateToProps = (state) => ({
  currentRecipe: state.currentRecipe.currentRecipe,
  isFetching: state.currentRecipe.isFetching,
});

export default connect(mapStateToProps, null)(RecipeContainer);

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import App from './App';
import { clearRecipes } from './redux/recipesSlice';
// import { getBookmarkedRecipesAndIds } from './redux/bookmarksReducer';

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log(`App unmount`);
      dispatch(clearRecipes());
    };

    // eslint-disable-next-line
  }, []);

  return <App />;
};

export default AppContainer;

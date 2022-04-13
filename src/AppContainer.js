import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { getBookmarkedRecipesAndIds } from './redux/bookmarksReducer';

const AppContainer = ({ getBookmarkedRecipesAndIds }) => {
  useEffect(() => {
    getBookmarkedRecipesAndIds();

    // eslint-disable-next-line
  }, []);

  return <App />;
};

const dispatchToProps = {
  getBookmarkedRecipesAndIds,
};

export default connect(null, dispatchToProps)(AppContainer);

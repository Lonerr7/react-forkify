import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm';
import { getRecipes } from '../../../../redux/recipesReducer';

const SearchFormContainer = ({ getRecipes }) => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const btnSearchHandler = (search) => {
    getRecipes(search);
    setSearch('');
  };

  return (
    <SearchForm
      search={search}
      onSearchChange={onSearchChange}
      btnSearchHandler={btnSearchHandler}
    />
  );
};

const mapStateToProps = (state) => ({});

const dispatchToProps = {
  getRecipes,
};

export default connect(mapStateToProps, dispatchToProps)(SearchFormContainer);

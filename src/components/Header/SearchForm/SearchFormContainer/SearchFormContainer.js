import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { getRecipes } from '../../../../redux/recipesSlice';
import { useDispatch } from 'react-redux';

const SearchFormContainer = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const btnSearchHandler = (search) => {
    dispatch(getRecipes({recipe: search}));
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

export default SearchFormContainer;

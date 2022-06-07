import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { getRecipes } from '../../../../redux/recipesSlice';
import { useAppDispatch } from '../../../../hooks/hooks';

const SearchFormContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const btnSearchHandler = (search: string) => {
    dispatch(getRecipes(search));
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

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../../redux/recipesSlice';
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import SearchError from '../../common/SearchError/SearchError';
import SearchResult from './SearchResult/SearchResult';
import s from './SearchResults.module.scss';

const SearchResults = () => {
  const recipes = useSelector((state) => state.recipes.recipesArr);
  const isFetching = useSelector((state) => state.recipes.isFetching);
  const currentPage = useSelector((state) => state.recipes.currentPage);
  const totalItemsCount = useSelector((state) => state.recipes.totalItemsCount);
  const dispatch = useDispatch();
  const itemsPerPage = 7;

  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes =
    recipes && recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const changePageHandler = (newPage) => {
    dispatch(changePage(newPage));
  };

  const elements = currentRecipes
    ? currentRecipes.map((r) => (
        <SearchResult
          key={r.id}
          id={r.id}
          img={r.image_url}
          title={r.title}
          subtitle={r.publisher}
        />
      ))
    : '';

  const elementsAndPagination = (
    <>
      {elements}
      <Pagination
        recipesPerPage={itemsPerPage}
        totalRecipesCount={totalItemsCount}
        onPageChange={changePageHandler}
        currentPage={currentPage}
      />
    </>
  );

  return (
    <ul className={s.searchResults}>
      {/*If no recipes found - display error message by checking if recipesArr.length === 0 */}
      {recipes?.length === 0 ? <SearchError /> : ''}

      {isFetching ? <Preloader /> : elementsAndPagination}
    </ul>
  );
};

export default SearchResults;

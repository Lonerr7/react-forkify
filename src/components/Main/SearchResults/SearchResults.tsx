import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changePage } from '../../../redux/recipesSlice';
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import SearchError from '../../common/SearchError/SearchError';
import SearchResult from './SearchResult/SearchResult';
import s from './SearchResults.module.scss';

const SearchResults: React.FC = () => {
  const recipes = useAppSelector((state) => state.recipes.recipesArr);
  const isFetching = useAppSelector((state) => state.recipes.isFetching);
  const currentPage = useAppSelector((state) => state.recipes.currentPage);
  const totalItemsCount = useAppSelector(
    (state) => state.recipes.totalItemsCount
  );
  const dispatch = useAppDispatch();
  const itemsPerPage = 7;

  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes =
    recipes && recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const changePageHandler = (newPage: number) => {
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

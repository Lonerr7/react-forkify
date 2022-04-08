import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';
import SearchError from '../../common/SearchError/SearchError';
import SearchResult from './SearchResult/SearchResult';
import s from './SearchResults.module.scss';

const SearchResults = ({ recipes, isFetching }) => {
  const elements = recipes
    ? recipes.map((r) => (
        <SearchResult
          key={r.id}
          id={r.id}
          img={r.image_url}
          title={r.title}
          subtitle={r.publisher}
        />
      ))
    : '';

  return (
    <ul className={s.searchResults}>
      {/*If no recipes found - display error message by checking if recipesArr.length === 0 */}
      {recipes?.length === 0 ? <SearchError /> : elements}

      {!isFetching ? '' : <Preloader />}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesArr,
  isFetching: state.recipes.isFetching,
});

export default connect(mapStateToProps, null)(SearchResults);

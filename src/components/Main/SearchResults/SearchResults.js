import SearchResult from './SearchResult/SearchResult';
import s from './SearchResults.module.scss';

const SearchResults = () => {
  return (
    <ul className={s.searchResults}>
      <SearchResult
        id="d2d"
        img="https://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
        title="CAULIFLOWER PIZZA CRUST (WITH BBQ CHICKEN PIZZA)"
        subtitle="CLOSET COOKING"
      />
    </ul>
  );
};

export default SearchResults;

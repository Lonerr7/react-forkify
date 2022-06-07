import { useSelector } from 'react-redux';
import SearchResult from '../SearchResults/SearchResult/SearchResult';

const Bookmarks = () => {
  const bookmarkedRecipes = useSelector(
    (state) => state.bookmarks.bookmarkedRecipes
  );

  const items = bookmarkedRecipes.map((r) => (
    <SearchResult
      key={r.id}
      id={r.id}
      img={r.image_url}
      title={r.title}
      subtitle={r.publisher}
    />
  ));

  return (
    <ul className="bookmarks">
      {bookmarkedRecipes.length !== 0 ? (
        items
      ) : (
        <p className="bookmarks__error">Empty</p>
      )}
    </ul>
  );
};

export default Bookmarks;

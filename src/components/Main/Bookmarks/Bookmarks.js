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

  return <ul className="bookmarks">{items}</ul>;
};

export default Bookmarks;

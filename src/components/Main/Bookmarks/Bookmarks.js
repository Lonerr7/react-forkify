import { connect } from 'react-redux';
import SearchResult from '../SearchResults/SearchResult/SearchResult';

const Bookmarks = ({ bookmarkedRecipes }) => {
  const items = bookmarkedRecipes.map((r) => (
    <SearchResult
      key={r.id}
      id={r.id}
      img={r.image_url}
      title={r.title}
      subtitle={r.publisher}
    />
  ));

  return <ul className='bookmarks'>{items}</ul>;
};

const mapStateToProps = (state) => ({
  bookmarkedRecipes: state.bookmarks.bookmarkedRecipes,
});

export default connect(mapStateToProps, null)(Bookmarks);

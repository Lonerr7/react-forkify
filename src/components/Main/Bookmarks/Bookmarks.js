import { connect } from 'react-redux';
import SearchResult from '../SearchResults/SearchResult/SearchResult';
import s from './Bookmarks.module.scss';

const Bookmarks = ({ bookmaredRecipes }) => {
  const items = bookmaredRecipes.map((r) => (
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
  bookmaredRecipes: state.bookmarks.bookmaredRecipes,
});

export default connect(mapStateToProps, null)(Bookmarks);

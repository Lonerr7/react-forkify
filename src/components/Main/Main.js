import s from './Main.module.scss';
import SearchResults from './SearchResults/SearchResults';
import RecipeContainer from './Recipe/RecipeContainer/RecipeContainer';
import Bookmarks from './Bookmarks/Bookmarks';

const Main = () => {
  return (
    <main className={s.main}>
      <SearchResults />
      <RecipeContainer />
    </main>
  );
};

export default Main;

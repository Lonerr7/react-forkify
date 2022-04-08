import s from './Main.module.scss';
import SearchResults from './SearchResults/SearchResults';
import Recipe from './Recipe/Recipe';

const Main = () => {
  return (
    <main className={s.main}>
      <SearchResults />
      <Recipe />
    </main>
  );
};

export default Main;

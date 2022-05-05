import s from './SearchResult.module.scss';

const SearchResult = ({
  img,
  title,
  subtitle,
  id,
  getCurrentRecipe,
  activeRecipe,
}) => {
  return (
    <li className={s.searchResult} onClick={() => getCurrentRecipe(id)}>
      <img className={s.searchResult__img} src={img} alt="recipe pic" />
      <div className={s.searchResult__textBox}>
        <h4 className={s.searchResult__title}>{title}</h4>
        <p className={s.searchResult__subtitle}>{subtitle}</p>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => ({
  activeRecipe: state.currentRecipe.activeRecipe,
});

export default SearchResult;

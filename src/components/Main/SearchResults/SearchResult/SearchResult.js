import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRecipe } from '../../../../redux/currentRecipeSlice';
import s from './SearchResult.module.scss';

const SearchResult = ({ img, title, subtitle, id }) => {
  const dispatch = useDispatch();
  const activeRecipe = useSelector((state) => state.currentRecipe.activeRecipe);

  return (
    <li
      className={
        activeRecipe.id === id
          ? `${s.searchResult} ${s.active}`
          : s.searchResult
      }
      onClick={() => dispatch(getCurrentRecipe({ id }))}
    >
      <img className={s.searchResult__img} src={img} alt="recipe pic" />
      <div className={s.searchResult__textBox}>
        <h4 className={s.searchResult__title}>{title}</h4>
        <p className={s.searchResult__subtitle}>{subtitle}</p>
      </div>
    </li>
  );
};

export default SearchResult;

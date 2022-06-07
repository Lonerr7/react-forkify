import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getCurrentRecipe } from '../../../../redux/currentRecipeSlice';
import { CurrentRecipe } from '../../../../types/types';
import s from './SearchResult.module.scss';

type SearchResultProps = {
  id: string;
  img: string;
  title: string;
  subtitle: string;
};

const SearchResult: React.FC<SearchResultProps> = ({
  img,
  title,
  subtitle,
  id,
}) => {
  const dispatch = useAppDispatch();
  const activeRecipe = useAppSelector(
    (state) => state.currentRecipe.activeRecipe
  ) as CurrentRecipe;

  return (
    <li
      className={
        activeRecipe.id === id
          ? `${s.searchResult} ${s.active}`
          : s.searchResult
      }
      onClick={() => dispatch(getCurrentRecipe(id))}
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

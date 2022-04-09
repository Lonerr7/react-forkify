import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './SearchResult.module.scss';
import { getCurrentRecipe } from '../../../../redux/currentRecipeReducer';

const SearchResult = ({ img, title, subtitle, id, getCurrentRecipe }) => {
  return (
    <li className={s.searchResult}>
      <NavLink
        className={s.searchResult__link}
        to={`/react-forkify/${id}`}
        onClick={getCurrentRecipe}
      >
        <img className={s.searchResult__img} src={img} alt="recipe pic" />
        <div className={s.searchResult__textBox}>
          <h4 className={s.searchResult__title}>{title}</h4>
          <p className={s.searchResult__subtitle}>{subtitle}</p>
        </div>
      </NavLink>
    </li>
  );
};

const dispatchToProps = {
  getCurrentRecipe,
};

export default connect(null, dispatchToProps)(SearchResult);

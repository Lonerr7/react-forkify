import s from './SearchError.module.scss';
import { IoWarningOutline } from 'react-icons/io5';

const SearchError = () => {
  return (
    <div className={s.searchError}>
      <IoWarningOutline className={s.searchError__icon} />
      <div className={s.searchError__textBox}>
        <p className={s.searchError__text}>No recipes found for your query!</p>
        <p className={s.searchError__text}>Please try again</p>
      </div>
    </div>
  );
};

export default SearchError;

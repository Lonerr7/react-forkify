import s from './SearchForm.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = ({ search, onSearchChange, btnSearchHandler }) => {
  return (
    <div className={s.searchForm}>
      <input
        className={s.searchForm__input}
        type="text"
        placeholder="Search over 1,000,000 recipes..."
        value={search}
        onChange={onSearchChange}
      />
      <button
        className={s.searchForm__btn}
        onClick={() => btnSearchHandler(search)}
      >
        <AiOutlineSearch className={s.searchForm__icon} />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchForm;

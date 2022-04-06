import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BiBookmark } from 'react-icons/bi';

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.header__logo} src={logo} alt="logo" />
      <form className={s.header__searchForm}>
        <input
          className={s.header__searchInput}
          type="text"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button className={s.header__searchBtn}>
          <AiOutlineSearch className={s.header__searchIcon} />
          <span>Search</span>
        </button>
      </form>
      <nav className={s.header__nav}>
        <ul className={s.header__list}>
          <li className={s.header__listItem}>
            <button className={s.header__listBtn}>
              <HiOutlinePencilAlt className={s.header__pencilSearchIcon} />
              <span>ADD RECIPE</span>
            </button>
          </li>
          <li className={s.header__listItem}>
            <button className={s.header__listBtn}>
              <BiBookmark className={s.header__bookmarkIcon} />
              <span>BOOKMARKS</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Controls from './Controls/Controls';
import SearchFormContainer from './SearchForm/SearchFormContainer/SearchFormContainer';
import Bookmarks from '../Main/Bookmarks/Bookmarks';
// import Bookmarks from '../Main/Bookmarks/Bookmarks';

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.header__logo} src={logo} alt="logo" />
      <SearchFormContainer />
      <Controls />
    </div>
  );
};

export default Header;

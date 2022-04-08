import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Controls from './Controls/Controls';
import SearchFormContainer from './SearchForm/SearchFormContainer/SearchFormContainer';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to="/react-forkify">
        <img className={s.header__logo} src={logo} alt="logo" />
      </NavLink>
      <SearchFormContainer />
      <Controls />
    </div>
  );
};

export default Header;

import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Controls from './Controls/Controls';
import SearchFormContainer from './SearchForm/SearchFormContainer/SearchFormContainer';

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <img className={s.header__logo} src={logo} alt="logo" />
      <SearchFormContainer />
      <Controls />
    </div>
  );
};

export default Header;

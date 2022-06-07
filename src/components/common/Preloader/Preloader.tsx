import s from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.gif';

const Preloader: React.FC = () => {
  return (
    <div className={s.preloader__box}>
      <img className={s.preloader} src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;

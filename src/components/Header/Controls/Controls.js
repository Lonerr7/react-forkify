import s from './Controls.module.scss';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BiBookmark } from 'react-icons/bi';

const Controls = () => {
  return (
    <nav className={s.controls}>
      <ul className={s.controls__list}>
        <li className={s.controls__listItem}>
          <button className={s.controls__listBtn}>
            <HiOutlinePencilAlt className={s.controls__pencilSearchIcon} />
            <span>ADD RECIPE</span>
          </button>
        </li>
        <li className={s.controls__listItem}>
          <button className={s.controls__listBtn}>
            <BiBookmark className={s.controls__bookmarkIcon} />
            <span>BOOKMARKS</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Controls;

import s from './Controls.module.scss';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BiBookmark } from 'react-icons/bi';
import Bookmarks from '../../Main/Bookmarks/Bookmarks';

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
        <li className='controls__listItem'>
          <button className='controls__listBtn'>
            <BiBookmark className={s.controls__bookmarkIcon} />
            <span>BOOKMARKS</span>
          </button>
          <Bookmarks />
        </li>
      </ul>
    </nav>
  );
};

export default Controls;

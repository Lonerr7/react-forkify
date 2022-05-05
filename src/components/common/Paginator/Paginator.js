import { useState } from 'react';
import Pagination from 'react-js-pagination';
import s from './Paginator.module.scss';

const Paginator = ({ totalItems }) => {
  const items = totalItems ? totalItems : 0;
  // console.log(items);

  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        onChange={handlePageChange}
        totalItemsCount={items}
        pageRangeDisplayed={10}
      />
    </div>
  );
};

export default Paginator;

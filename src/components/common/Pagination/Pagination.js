import React from 'react';
import s from './Pagination.module.scss';

const Pagination = ({
  recipesPerPage,
  totalRecipesCount,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipesCount / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberElements = pageNumbers.map((el) => (
    <li className={s.pagination__item} key={el}>
      <button
        onClick={() => {
          onPageChange(el);
        }}
        className={el === currentPage ? `${s.pagination__btn} ${s.active}` : s.pagination__btn}
      >
        {el}
      </button>
    </li>
  ));

  return (
    <nav className={s.pagination}>
      <ul className={s.pagination__list}>{pageNumberElements}</ul>
    </nav>
  );
};

export default Pagination;

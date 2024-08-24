import React, { FC } from "react";
import twFocusClass from "@utils/twFocusClass";

export interface PaginationProps {
  loading: boolean;
  currentPage: number;
  maxPage: number;
  handleLoadData: (page : number) => void,
  className?: string;
}

const Pagination: FC<PaginationProps> = ({ 
  className = "",
  loading,
  currentPage,
  maxPage,
  handleLoadData
}) => {

  const getPage = () => {
    const pageGenerated = [];

    for (let i = 0; i < maxPage; i++) {
      pageGenerated.push(
        <li
          key={`page-${i}`}
          className={`
          ${currentPage === i ? 
            `inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`: 
            `inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 cursor-pointer
            text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleLoadData(i);
          }}
          aria-current="page"
        >
          <a className="page-link" href="#">
            {i + 1}
          </a>
        </li>
      );
    }

    if (pageGenerated.length === 0) {
      pageGenerated.push(
        <li
          key="page-0"
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
          onClick={(e) => {
            e.preventDefault();
            handleLoadData(0);
          }}
          aria-current="page"
        >
            1
        </li>
      );
    }

    return pageGenerated;
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 rtl:space-x-reverse text-base font-medium ${className}`}
    >
      {loading ? (
        <div className="flex justify-center">
          <span>Cargando...</span>
        </div>
      ) : (
        <ul>
          {getPage()}
        </ul>        
      )}
    </nav>
  );
};

export default Pagination;

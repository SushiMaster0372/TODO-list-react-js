import React from "react";
import { getPagesArray } from "../../../utils/pages";
import classes from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div>
      <div className={classes.page__wrapper}>
        {pagesArray.map((p) => (
          <div
            onClick={() => changePage(p)}
            key={p}
            className={
              page === p
                ? `${classes.current__page__item} ${classes.page__item}`
                : classes.page__item
            }
          >
            <span>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

import React from "react";
import classes from "./DeleteButton.module.css";

const DeleteButton = ({ ...props }) => {
  return (
    <button {...props} className={classes.deleteBtn}>
      <i className="fa-solid fa-xmark"></i>
    </button>
  );
};

export default DeleteButton;

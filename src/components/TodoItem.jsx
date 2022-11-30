import React from "react";
import DeleteButton from "./UI/DeleteButton/DeleteButton";

const TodoItem = ({ item, handleDelete }) => {
  return (
    <div
      className={
        "item__container " +
        (item.completed ? "background-blue" : "background-green")
      }
    >
      <div className="item__content">
        <h4>
          {item.id}. {item.title}
        </h4>
      </div>
      <div className="hidden-button">
        <DeleteButton onClick={() => handleDelete(item)} />
      </div>
    </div>
  );
};

export default TodoItem;

import React from "react";
import DeleteButton from "./UI/DeleteButton/DeleteButton";

const TodoItem = ({ item, handleDelete, handleCompleted, setModal }) => {
  const doDelete = (item) => {
    setModal(true);
    handleDelete(item);
  };

  return (
    <div
      onDoubleClick={() => handleCompleted(item.id)}
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
        <DeleteButton onClick={() => doDelete(item)} />
      </div>
    </div>
  );
};

export default TodoItem;

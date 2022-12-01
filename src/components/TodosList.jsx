import React from "react";
import TodoItem from "./TodoItem";
import Loader from "./UI/Loader/Loader";

const TodosList = ({
  todos,
  title,
  handleDelete,
  handleCompleted,
  isLoading,
}) => {
  return (
    <div className={"todos__container " + (isLoading ? "loading" : "")}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content__container">
          <h2>{title}</h2>
          <div className="todos__wrapper">
            {todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodosList;

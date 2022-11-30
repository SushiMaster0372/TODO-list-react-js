import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, title, handleDelete }) => {
  return (
    <div className="todos__container">
      <div className="content__container">
        <h2>{title}</h2>
        <div className="todos__wrapper">
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodosList;
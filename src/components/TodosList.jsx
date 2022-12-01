import React from "react";
import TodoItem from "./TodoItem";
import Pagination from "./UI/Pagination/Pagination";

const TodosList = ({
  todos,
  title,
  handleDelete,
  handleCompleted,
  totalPages,
  page,
  changePage,
}) => {
  if (!todos.length)
    return (
      // <h1 className="todos__container center-in-right-wrapper">
      //   Todo List is empty
      // </h1>
      changePage(page + 1)
    );
  return (
    <div className="todos__container ">
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
        <div className="pagination__container">
          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
          />
        </div>
      </div>
    </div>
  );
};

export default TodosList;

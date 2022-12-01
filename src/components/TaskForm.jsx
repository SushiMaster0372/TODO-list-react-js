import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const TaskForm = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", completed: false });

  const addNewTodos = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, id: Date.now() };
    create(newTodo);
    setTodo({ ...todo, title: "" });
  };

  return (
    <div className="form__container">
      <form className="content__container">
        <h2>Add todo</h2>
        <div className="task-form">
          <MyInput
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            type="text"
            placeholder="New task..."
          />
          <div className="add-todo-button">
            <MyButton onClick={addNewTodos}>Create new task</MyButton>
          </div>
        </div>
      </form>
      <hr />
      <div className="info__wrapper">
        <div className="info__content">
          <h5>Double click todo and set state of it</h5>
          <div className="completed-tasks">
            <div className="square"></div>
            <span>Completed tasks</span>
          </div>
          <div className="not-completed-tasks">
            <div className="square"></div>
            <span>Not completed tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;

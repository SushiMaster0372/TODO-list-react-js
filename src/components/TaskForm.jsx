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
    </div>
  );
};

export default TaskForm;

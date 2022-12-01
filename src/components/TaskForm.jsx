import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const TaskForm = ({ create, value, onChange }) => {
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
      <hr />
      <div className="select_container">
        <h5>You can set number of shown todos</h5>
        <MySelect
          value={value}
          onChange={onChange}
          defaultValue="Amount of todos"
          options={[
            { value: 5, name: 5 },
            { value: 10, name: 10 },
            { value: 25, name: 25 },
            { value: 100, name: 100 },
            { value: 200, name: 200 },
          ]}
        />
      </div>
    </div>
  );
};

export default TaskForm;

import { useEffect, useState } from "react";
import TodoService from "./API/TodoService";
import "./App.css";
import Head from "./components/Head";
import TaskForm from "./components/TaskForm";
import TodosList from "./components/TodosList";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [todos, setTodos] = useState([]);

  const [fetchTodos, isTodosLoading, error] = useFetching(async () => {
    const response = await TodoService.getAllTodos();
    setTodos(response.data);
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = (todoItem) => {
    setTodos(todos.filter((item) => item.id !== todoItem.id));
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleCompleted = (id) => {
    const newTodos = [...todos];
    newTodos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Head />
      <div className="content">
        <TaskForm create={createTodo} />
        <TodosList
          todos={todos}
          title="Todos List"
          handleDelete={removeTodo}
          handleCompleted={handleCompleted}
          isLoading={isTodosLoading}
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import TodoService from "./API/TodoService";
import "./App.css";
import Head from "./components/Head";
import TaskForm from "./components/TaskForm";
import TodosList from "./components/TodosList";
import { useFetching } from "./hooks/useFetching";
import Loader from "./components/UI/Loader/Loader";
import { getPagesCount } from "./utils/pages";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchTodos, isTodosLoading, error] = useFetching(
    async (selectedNumber, page) => {
      const response = await TodoService.getAllTodos(selectedNumber, page);
      setTodos(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, selectedNumber));
    }
  );

  useEffect(() => {
    fetchTodos(selectedNumber, page);
    console.log(1);
  }, [selectedNumber]);

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

  const changePage = (page) => {
    setPage(page);
    fetchTodos(selectedNumber, page);
  };

  return (
    <div className="container">
      <Head />
      <div className="content">
        <TaskForm
          create={createTodo}
          value={selectedNumber}
          onChange={(number) => setSelectedNumber(number)}
        />
        {error ? (
          <h1 className="todos__container center-in-right-wrapper">
            Error was found
          </h1>
        ) : isTodosLoading ? (
          <div className="todos__container center-in-right-wrapper">
            <Loader />
          </div>
        ) : (
          <TodosList
            todos={todos}
            title="Todos List"
            handleDelete={removeTodo}
            handleCompleted={handleCompleted}
            totalPages={totalPages}
            page={page}
            changePage={changePage}
          />
        )}
      </div>
    </div>
  );
}

export default App;

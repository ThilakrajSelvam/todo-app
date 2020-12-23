import React, { useState } from "react";
import "./App.css";
import TodoDetail from "./component/detail/TodoDetail";
import TodoList from "./component/list/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSave = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleComplete = (taskId) => {
    const todoList = todos.map((todo) =>
      todo.taskId === taskId ? { ...todo, isDone: !todo.isDone } : todo
    );
    console.log(todoList);
    setTodos(todoList);
  };

  const handleDelete = (taskId) => {
    const todoList = todos.filter((todo) => todo.taskId !== taskId);
    setTodos(todoList);
  };

  return (
    <div className="app_container">
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      ></TodoList>
      <TodoDetail onSave={handleSave}></TodoDetail>
    </div>
  );
}

export default App;

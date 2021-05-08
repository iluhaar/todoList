import React, { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "Sample of todo", complete: false },
  { text: "Sample of completed todo", complete: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const clearingTodos: ClearTodos = () => {
    localStorage.removeItem('newtodo')
  }
  const refreshTodos = () => {
    const lsTodos = localStorage.getItem('newtodo');
    console.log(lsTodos)
    // setTodos(lsTodos);
  }

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
    localStorage.setItem('newtodo', newTodo);
  };
  return (
    <React.Fragment>
      {" "}
      <div className="app">
        <h1>Todo app</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className="buttonsMain">
          <AddTodoForm addTodo={addTodo} />
          <button onClick={clearingTodos}>Clear local todos</button>
          <button onClick={refreshTodos}> Get from local storage</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

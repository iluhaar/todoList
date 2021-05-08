import React, { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

const initialTodos: Array<Todo> = [{ text: "Sample of todo", complete: true }];

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

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
      localStorage.setItem('newtodo', newTodo);
    };
  return (
    <React.Fragment>
      {" "}
      <div className="kekshpek">
        <h1>Todo app</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </React.Fragment>
  );
};

export default App;

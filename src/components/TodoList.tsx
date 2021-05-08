import React from 'react';
import { TodoListItem } from './TodoListItem';
import "./../TodoList.css"
 

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}


export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <div className="todoContainer">
        <div className="todoBlock">
            <ul>{todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            })}
            </ul>
        </div>
        </div>)
}
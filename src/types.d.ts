type Todo = {
    text: string;
    complete: boolean;
}
type ToggleTodo = (selectedTodo:Todo) => void;
type ClearTodos = () => void;
type RefreshTodos = () => void;
type AddTodo = (newTodo: string) => void;
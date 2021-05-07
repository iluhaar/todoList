import React, { ChangeEvent, FormEvent, useState } from 'react';
interface AddTodoFormProps {
    addTodo:AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ( {addTodo} ) => {
    const [newTodo, setTodo] = useState("");
    const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setTodo("");
    }
    return (
        <form>
            <input type="text" placeholder="Type here.." value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}> Add </button>
        </form>
    )
}
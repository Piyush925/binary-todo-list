import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, strikeTodo } from "./todoSlice";
import './todo.css'
import TodoItem from './TodoItem';

export default function Todo() {
    const [todoInput, setTodoInput] = useState("");

    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todoInput));
    };

    const handleTodoDone = (id, checked) => {
        dispatch(strikeTodo({ id, checked }));
    };

    const handleRemoveDone = (id) => {
        dispatch(removeTodo(id));
    };

    const handleChange = (e) => setTodoInput(e.target.value)

    return (
        <div className='todo-list'>
            <h1>Add Your Item</h1>
            <form className="todo-form" onSubmit={handleAddTodo}>
                <input type="text" onChange={handleChange} />
                <button type="submit">+</button>
            </form>
            <div className="Todos">
                {count > 0 &&
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            isDone={todo.striked}
                            onCheck={handleTodoDone}
                            removeItem={handleRemoveDone}
                        />
                    ))}
                {count === 0 && <p>No todos</p>}
            </div>
        </div>
    )
}
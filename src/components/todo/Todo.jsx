import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext, Provider as TodosProvider } from '../../state/context/todosContext';


import Checkbox from '../checkbox/Checkbox';
import './todo.css'

const Todo = ({ todo }) => {

    const { state, markTaskAsDone, markTaskAsUndone, fetchTodos, deleteTodo } = useContext(TodosContext);

    const handleDeleteTodo = async (todo) => {
        const res = await deleteTodo(todo.id, Cookies);
        if (res) {
            await fetchTodos(Cookies);
        }
    }

    const handleDone = async (todo) => {
        if (todo.completed) {
            const res = await markTaskAsUndone({
                id: todo.id,
                completed: false,
            });
            if (res) {
                await fetchTodos(Cookies);
            }
        } else {
            const res = await markTaskAsDone({
                id: todo.id,
                completed: true,
            });
            if (res) {
                await fetchTodos(Cookies);
            }
        }
    }

    return (
        <div className='todo'>
            <Checkbox id={todo.id} key={todo.id + todo.title}
                name="todo"
                label={todo.title}
                checked={todo.completed}
                onClick={() => handleDone(todo)}
            />
            <div id={todo.id} onClick={() => handleDeleteTodo(todo)} className="delete-btn">
                <img src="/delete.png" />
            </div>
        </div>
    );
};

export default Todo;
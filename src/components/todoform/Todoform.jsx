import React, { useEffect, useState, useContext } from 'react';
import { Context as TodosContext, Provider as TodosProvider } from '../../state/context/todosContext';
import Cookies from 'js-cookie';
import './todoform.css';

const Todoform = () => {
  const { createTodo, fetchTodos } = useContext(TodosContext);
  const [todo, settodo] = useState('');

  useEffect(() => {
    (async () => {
      await fetchTodos(Cookies);
    })();
  }, []);

  const handleChange = (e) => {
    settodo(e.currentTarget.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo) {
      const res = await createTodo({ title: todo }, Cookies);
      settodo('');
      await fetchTodos(Cookies);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='form-input' value={todo} type="text" onChange={handleChange} placeholder="Add a new todo" />
    </form>
  );
};

export default () => {
  return (
    <Todoform />
  )
};
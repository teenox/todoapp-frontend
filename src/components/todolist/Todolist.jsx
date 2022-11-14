import React, { useEffect, useState, useContext } from 'react';
import { Context as TodosContext, Provider as TodosProvider } from '../../state/context/todosContext';
import Todo from '../todo/Todo';
import Cookies from 'js-cookie';

const Todolist = ({ handleToggle, deleteTask }) => {
  const { state, fetchTodos } = useContext(TodosContext);

  useEffect(() => {
    (async () => {
      await fetchTodos(Cookies);
    })();
  }, []);

  return (
    <div>
      {state.todos.length === 0 ? 'Enter new todo' :
        state.todos.map((todo, i) => {
          i++;
          return (
            <Todo key={todo.id} todo={todo} handleToggle={handleToggle} deleteTask={deleteTask} />
          )
        })
      }
    </div>
  );
};

export default () => {
  return (
    <Todolist />
  )
};
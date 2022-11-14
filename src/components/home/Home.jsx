import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext, Provider as TodosProvider } from '../../state/context/todosContext';

//components
import Header from "../header/Header";
import Todolist from "../todolist/Todolist";
import Todoform from '../todoform/Todoform';

function Home() {
  const { state, fetchTodos } = useContext(TodosContext);
  const [todolist, setToDoList] = useState(state.todos);

  useEffect(() => {
    (async () => {
      await fetchTodos(Cookies);
    })();
  }, []);

  return (
    <div className="App">
      <Header title="Todo List" />
      <Todoform />
      <Todolist />
    </div>
  );
}

export default () => {
  return (
    <TodosProvider>
      <Home />
    </TodosProvider>
  )
};

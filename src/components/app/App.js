import React from 'react';
import { Provider } from '../../state/context/todosContext';

//components
import Home from '../home/Home'

export default () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
};
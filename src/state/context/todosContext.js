import createDataContext from './createDataContext';
import todosReducer from '../reducers/todos';
import { createTodo, fetchTodos, createTask, markTaskAsUndone, markTaskAsDone, deleteTodo } from '../actions/todos';

export const initialState = {
  createTodoError: '',
  fetchTodosError: '',
  todos: []
};

export const { Context, Provider } = createDataContext(
  todosReducer,
  { createTodo, fetchTodos, createTask,markTaskAsUndone, markTaskAsDone, deleteTodo },
  initialState
);
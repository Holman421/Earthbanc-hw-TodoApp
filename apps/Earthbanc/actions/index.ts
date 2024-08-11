import { createTodo } from "./createTodo";
import { deleteTodo } from "./deleteTodo";
import { getTodos } from "./getTodos";
import { toggleTodoIsDone } from "./toggleTodoIsDone";

type Actions = {
  createTodo: typeof createTodo;
  deleteTodo: typeof deleteTodo;
  getTodos: typeof getTodos;
  toggleTodoIsDone: typeof toggleTodoIsDone;
};

const actions: Actions = {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodoIsDone,
};

export default actions;

import TodoListContainer from "apps/Earthbanc/components/TodoListContainer";
import { db } from "apps/Earthbanc/prisma/db";

export default async function page() {
  let todos;
  try {
    todos = await db.todo.findMany();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return <div>Error fetching todos</div>;
  }

  todos.sort((a, b) => a.title.localeCompare(b.title));

  return <TodoListContainer todos={todos} />;
}

import TodoDetailCard from "apps/Earthbanc/components/TodoDetailCard";
import { db } from "prisma/db";

type TodoDetailProps = {
  params: {
    id: string;
  };
};

export default async function TodoDetail({ params }: TodoDetailProps) {
  let todo;
  try {
    todo = await db.todo.findUnique({
      where: {
        id: params.id,
      },
    });
  } catch (err) {
    console.error("Error fetching todo:", err);
    return <div>Error fetching todo</div>;
  }

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return <TodoDetailCard todo={todo} />;
}

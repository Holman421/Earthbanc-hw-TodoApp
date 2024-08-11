"use server";

import { revalidatePath } from "next/cache";
import { db } from "../prisma/db";

export async function toggleTodoIsDone(todoId: string) {
  const todo = await db.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  revalidatePath(`/todos`);

  const updatedTodo = await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      isDone: !todo.isDone,
    },
  });

  return updatedTodo;
}

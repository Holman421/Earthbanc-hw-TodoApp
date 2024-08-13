"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../config/db";

export async function deleteTodo(todoId: string, redirectUrl?: string) {
  const todo = await db.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  revalidatePath(`/todos`);

  await db.todo.delete({
    where: {
      id: todoId,
    },
  });

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return todo;
}

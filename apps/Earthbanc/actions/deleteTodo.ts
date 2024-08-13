"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../../prisma/db";
import { redirect } from "next/navigation";

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

  console.log(redirectUrl);

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return todo;
}

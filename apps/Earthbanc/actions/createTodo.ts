"use server";

import { revalidatePath } from "next/cache";
import { db } from "../prisma/db";

type createTodoError = {
  titleError?: string;
  descriptionError?: string;
  priorityError?: string;
  databaseError?: string;
  isSuccessful?: boolean;
};

export async function createTodo(
  formState: createTodoError,
  formData: FormData
): Promise<createTodoError> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as Priority | null;

  const titleError = title === "";
  const titleLengthError = title.length > 20;
  const descriptionError = description === "";
  const priorityError = priority === null;

  if (titleError || descriptionError || priorityError) {
    return {
      titleError: titleError
        ? "Title is required"
        : titleLengthError
        ? "Title needs to be less than 20 characters"
        : "",
      descriptionError: descriptionError ? "Description is required" : "",
      priorityError: priorityError ? "Priority is required" : "",
      databaseError: "",
      isSuccessful: false,
    };
  }

  const todo = {
    title: title,
    description: description,
    priority: priority,
  };

  try {
    await db.todo.create({
      data: {
        ...todo,
      },
    });
    revalidatePath(`/todos`);
    return {
      titleError: "",
      descriptionError: "",
      priorityError: "",
      databaseError: "",
      isSuccessful: true,
    };
  } catch (error) {
    console.log(error);
    return {
      titleError: "",
      descriptionError: "",
      priorityError: "",
      databaseError: "An unknown error occurred",
      isSuccessful: false,
    };
  }
}

import { db } from "../config/db";

export async function getTodos() {
  try {
    const todos = await db.todo.findMany();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Error fetching todos");
  }
}

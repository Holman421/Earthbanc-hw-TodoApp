// "use client";

import SearchTodos from "apps/Earthbanc/components/SearchTodos";
import TodoList from "apps/Earthbanc/components/TodoList";
import { db } from "apps/Earthbanc/prisma/db";
// import React, { useState } from "react";


export default async function page() {
  //   const [searchValue, setSearchValue] = useState("");

  let todos;
  try {
    todos = await db.todo.findMany();
    console.log("Todos:", todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return <div>Error fetching todos</div>;
  }

  //   const filteredTodos = todos.filter(
  //     (todo) =>
  //       todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       todo.description.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  return (
    <div>
      {/* <SearchTodos searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      <TodoList todos={todos} />
    </div>
  );
}

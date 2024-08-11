"use client";

import SearchTodos from "apps/Earthbanc/components/SearchTodos";
import TodoList from "apps/Earthbanc/components/TodoList";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "apps/Earthbanc/actions/getTodos";
import React, { useState } from "react";

export default function Page() {
  const [searchValue, setSearchValue] = useState("");

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching todos</div>;
  }

  if (!todos) {
    return <div>No todos found</div>;
  }

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <SearchTodos searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={filteredTodos} />
    </div>
  );
}

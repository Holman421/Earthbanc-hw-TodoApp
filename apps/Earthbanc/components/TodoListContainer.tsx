"use client";

import React, { useState } from "react";
import TodoCard from "./TodoCard";
import styled from "styled-components";
import { Todo } from "@prisma/client";
import SearchTodos from "./SearchTodos";
import TodoListPagination from "./TodoListPagination";
import Button from "./Button";
import Link from "next/link";

const TodoListContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 350px;
  margin: 0 auto;
`;

const PageHeading = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: 700;
`;

const EmptyListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

type TodoListContainerProps = {
  todos: Todo[];
};

const TODOS_PER_PAGE = 3;

export default function TodoListContainer({ todos }: TodoListContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const startIndex = (currentPage - 1) * TODOS_PER_PAGE;
  const endIndex = startIndex + TODOS_PER_PAGE;
  const totalPages = Math.ceil(filteredTodos.length / TODOS_PER_PAGE);
  const currentTodos = filteredTodos.slice(startIndex, endIndex);

  return (
    <TodoListContainerWrapper>
      <PageHeading>Todo List</PageHeading>
      <SearchTodos searchValue={searchValue} setSearchValue={setSearchValue} />

      {currentTodos.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}

      {currentTodos.length === 0 && (
        <EmptyListContainer>
          <div>Your todo list is currently empty</div>
          <Link href="/createTodo">
            <Button>Create a new todo</Button>
          </Link>
        </EmptyListContainer>
      )}

      <TodoListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </TodoListContainerWrapper>
  );
}

"use client";

import SearchTodos from "apps/Earthbanc/components/SearchTodos";
import TodoList from "apps/Earthbanc/components/TodoList";
import { useState } from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
`;

const dummyTodos: Todo[] = [
  {
    id: 1,
    title: "Learn React",
    description: "Study the basics of React.js",
    isDone: false,
    priority: "HIGH",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Write Code",
    description: "Write some example code for the project",
    isDone: false,
    priority: "MEDIUM",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Test Application",
    description: "Test the application thoroughly",
    isDone: true,
    priority: "LOW",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Deploy Application",
    description: "Deploy the application to the server",
    isDone: false,
    priority: "HIGH",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Learn TypeScript",
    description: "Study the basics of TypeScript",
    isDone: false,
    priority: "MEDIUM",
    createdAt: new Date(),
  },
  {
    id: 6,
    title: "Learn Next.js",
    description: "Study the basics of Next.js",
    isDone: false,
    priority: "LOW",
    createdAt: new Date(),
  },
];

const Heading = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
`;

export default function Index() {
  const [searchValue, setSearchValue] = useState("");

  const filteredTodos = dummyTodos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledPage>
      <Heading>Earthbanc Todo App</Heading>
      <SearchTodos searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={filteredTodos} />
    </StyledPage>
  );
}

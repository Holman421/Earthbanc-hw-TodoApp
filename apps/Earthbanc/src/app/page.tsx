"use client";

import SearchTodos from "apps/Earthbanc/components/SearchTodos";
import TodoList from "apps/Earthbanc/components/TodoList";
import Link from "next/link";
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

const Heading = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
`;

export default function Index() {
  return (
    <StyledPage>
      <Heading>Earthbanc Todo App</Heading>
      <Link href="/createTodo">Create Todo</Link>
      <Link href="/todos">Search Todos</Link>
    </StyledPage>
  );
}

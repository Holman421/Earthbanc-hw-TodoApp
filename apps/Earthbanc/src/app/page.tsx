"use client";

import NavLink from "apps/Earthbanc/components/Navlink";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
`;

export default function Index() {
  return (
    <>
      <Heading>Earthbanc Todo App</Heading>
      <NavLink heading="Create Todo" url="/createTodo" />
      <NavLink heading="Search Todos" url="/todos" />
    </>
  );
}

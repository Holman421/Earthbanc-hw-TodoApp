"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NavLink from "./Navlink";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Heading = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavLink heading="Todo App" url="/" fontSize="1.75rem" />
      <NavLinks>
        <NavLink heading="Create Todo" url="/createTodo" />
        <NavLink heading="View Todos" url="/todos" />
      </NavLinks>
    </NavbarContainer>
  );
}

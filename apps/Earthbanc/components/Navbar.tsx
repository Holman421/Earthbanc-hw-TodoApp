"use client";

import React from "react";
import styled from "styled-components";
import NavLink from "./Navlink";
import Link from "next/link";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const MainAppLink = styled(Link)`
  font-size: 1.75rem;
  color: black;
  text-decoration: none;
  transition: all 0.2s;
  font-weight: 700;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <MainAppLink href="/">Todo App</MainAppLink>
      <NavLinksContainer>
        <NavLink heading="Create Todo" url="/createTodo" />
        <NavLink heading="View Todos" url="/todos" />
      </NavLinksContainer>
    </NavbarContainer>
  );
}

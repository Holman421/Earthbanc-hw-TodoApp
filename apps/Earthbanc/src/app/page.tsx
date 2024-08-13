"use client";

import Button from "apps/Earthbanc/components/Button";
import SecondaryButton from "apps/Earthbanc/components/SecondaryButton";
import TodosAnimation from "apps/Earthbanc/components/TodosAnimation";
import Link from "next/link";
import styled from "styled-components";

const HeadingContainer = styled.div`
  position: absolute;
  left: clamp(2rem, 10%, 10rem);
  top: 30%;

  @media (max-width: 1050px) {
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 700;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  max-width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export default function Index() {
  return (
    <>
      <HeadingContainer>
        <Heading>Todo App</Heading>
        <Description>
          Boost your productivity effortlessly with Todo app. Your ultimate
          to-do app for mastering tasks and staying on track.
        </Description>
        <ButtonsContainer>
          <Link href={"/createTodo"}>
            <Button>Create Todo</Button>
          </Link>
          <Link href={"/todos"}>
            <SecondaryButton>View your Todos</SecondaryButton>
          </Link>
        </ButtonsContainer>
      </HeadingContainer>
      <TodosAnimation />
    </>
  );
}

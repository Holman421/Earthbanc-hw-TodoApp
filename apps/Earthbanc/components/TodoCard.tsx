import React, { startTransition } from "react";
import styled, { css } from "styled-components";
import ImportanceTag from "./ImportanceTag";
import Link from "next/link";
import { Todo } from "@prisma/client";
import DeleteButton from "./DeleteButton";
import actions from "../actions";

const TodoCardContainer = styled.div<{ isDone: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.4rem;
  border-radius: 0.5rem;
  background-color: white;

  position: relative;
  overflow: hidden;
  width: 350px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h2,
  p {
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  }
  h2 {
    font-size: 1.25rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  gap: .7rem;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IsDoneFlag = styled.div<{ isDone: boolean }>`
  background-color: #7ba8c6;
  height: 100%;
  width: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  ${(props) =>
    props.isDone
      ? css`
          background-color: #28a745;
        `
      : css`
          background-color: #dc3545;
        `};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 1rem;
`;

const Button = styled.button`
  background-color: #f1f1f1;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #e8e8e8;
  }
  &:active {
    transform: scale(0.95);
  }
  border: 1px solid #5f5f5f;
`;

export default function TodoCard({
  id,
  title,
  description,
  isDone,
  priority,
  createdAt,
}: Todo) {
  const handleToggleTodoIsDone = () => {
    startTransition(async () => {
      await actions.toggleTodoIsDone(id);
    });
  };

  const handleDeleteTodo = () => {
    startTransition(async () => {
      await actions.deleteTodo(id);
    });
  };

  return (
    <TodoCardContainer isDone={isDone}>
      <HeadingContainer>
        <h2>{title}</h2>
        <ImportanceTag priority={priority} />
        <ButtonWrapper>
          <DeleteButton onClick={handleDeleteTodo} showText={false} />
        </ButtonWrapper>
      </HeadingContainer>
      <p>{createdAt.toLocaleDateString("cs-CZ")}</p>
      <ButtonContainer>
        <Button>
          <Link href={`/todoDetail/${id}`}>View detail</Link>
        </Button>
        <Button onClick={handleToggleTodoIsDone}>
          {isDone ? "Uncomplete" : "Complete"}
        </Button>
      </ButtonContainer>
      <IsDoneFlag isDone={isDone} />
    </TodoCardContainer>
  );
}

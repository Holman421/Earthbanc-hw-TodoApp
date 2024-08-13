"use client";

import { Todo } from "@prisma/client";
import React, { startTransition } from "react";
import styled, { css } from "styled-components";
import ImportanceTag from "./ImportanceTag";
import { feedbackColors } from "../config/colors";
import DeleteButton from "./DeleteButton";
import actions from "../actions";
import Button from "./Button";

type TodoDetailCardProps = {
  todo: Todo;
};

const TodoDetailPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const PageHeading = styled.h1`
  font-size: 1.75rem;
  margin: 2rem 0;
  font-weight: 700;
`;

const DetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  max-width: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  word-wrap: break-word;
`;

const HeadingContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
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
          background-color: ${feedbackColors.positive};
        `
      : css`
          background-color: ${feedbackColors.negative};
        `};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export default function TodoDetailCard({
  todo: { id, title, priority, description, createdAt, isDone },
}: TodoDetailCardProps) {
  const handleToggleTodoIsDone = () => {
    startTransition(async () => {
      await actions.toggleTodoIsDone(id);
    });
  };

  const handleDeleteTodo = () => {
    startTransition(async () => {
      await actions.deleteTodo(id, "/todos");
    });
  };
  return (
    <TodoDetailPage>
      <PageHeading>Todo Detail</PageHeading>
      <DetailCardContainer>
        <HeadingContainer>
          <Heading>{title}</Heading>
          <ImportanceTag priority={priority} />
        </HeadingContainer>
        <Description>{description}</Description>
        <DateContainer>
          <strong>Created At:</strong>
          {new Date(createdAt).toLocaleDateString("cs-CZ")}
        </DateContainer>
        <IsDoneFlag isDone={isDone} />
        <ButtonsContainer>
          <Button onClick={handleToggleTodoIsDone}>
            {isDone ? "Mark as undone" : "Mark as Done"}
          </Button>
          <DeleteButton text="Delete" onClick={handleDeleteTodo} />
        </ButtonsContainer>
      </DetailCardContainer>
    </TodoDetailPage>
  );
}

"use client";

import { Todo } from "@prisma/client";
import React from "react";
import styled from "styled-components";
import ImportanceTag from "./ImportanceTag";

type TodoDetailCardProps = {
  todo: Todo;
};

const DetailCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const PageHeading = styled.h1`
  font-size: 1.75rem;
  margin: 2rem 0;
`;

const DetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 400px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  font-size: 0.9rem;
`;

const IsDoneFlag = styled.div<{ isDone: boolean }>`
  background-color: ${(props) => (props.isDone ? "#28a745" : "#dc3545")};
  height: 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export default function TodoDetailCard({ todo }: TodoDetailCardProps) {
  return (
    <DetailCardWrapper>
      <PageHeading>Todo Detail</PageHeading>
      <DetailCardContainer>
        <Heading>{todo.title}</Heading>
        <Description>{todo.description}</Description>
        <InfoContainer>
          <InfoItem>
            <strong>Priority:</strong>{" "}
            <ImportanceTag priority={todo.priority} />
          </InfoItem>
          <InfoItem>
            <strong>Created At:</strong>{" "}
            {new Date(todo.createdAt).toLocaleDateString("cs-CZ")}
          </InfoItem>
        </InfoContainer>
        <IsDoneFlag isDone={todo.isDone} />
      </DetailCardContainer>
    </DetailCardWrapper>
  );
}

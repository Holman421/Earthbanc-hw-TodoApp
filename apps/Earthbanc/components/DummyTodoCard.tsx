import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import ImportanceTag from "./ImportanceTag";
import { Priority } from "@prisma/client";
import { formatDate } from "../utils/formatDate";

const DummyTodoCardContainer = styled.div<{
  isDone: boolean;
  margin: string;
  zIndex: number;
}>`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.4rem;
  border-radius: 0.5rem;
  background-color: white;
  position: absolute;
  transform: rotateY(20deg) rotateX(5deg);
  margin: ${(props) => props.margin};
  z-index: ${(props) => props.zIndex};
  overflow: hidden;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  h2,
  p {
    display: block;
    width: fit-content;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: ${(props) => (props.isDone ? "100%" : "0")};
      height: 2px;
      background-color: black;
      transition: width 0.3s ease-in-out;
      transform: translateY(-50%);
    }
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
  gap: 0.7rem;
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
  transition: all 0.3s;
  ${(props) =>
    props.isDone
      ? css`
          background-color: #28a745;
        `
      : css`
          background-color: #dc3545;
        `};
`;

const DummyButton = styled.div`
  background-color: #f1f1f1;
  padding: 0.2rem 0.8rem;
  border: none;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #5f5f5f;
`;

const DummyDeleteButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  border: 1px solid #5f5f5f;
`;

type TodoCardProps = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  priority: Priority;
  createdAt: Date;
  margin: string;
  zIndex: number;
};

const DummyTodoCard = forwardRef<HTMLDivElement, TodoCardProps>(
  function DummyTodoCard(
    { title, isDone, priority, createdAt, margin, zIndex },
    ref
  ) {
    return (
      <DummyTodoCardContainer
        ref={ref}
        isDone={isDone}
        margin={margin}
        zIndex={zIndex}
      >
        <HeadingContainer>
          <h2>{title}</h2>
          <ImportanceTag priority={priority} />
          <DummyDeleteButton>x</DummyDeleteButton>
        </HeadingContainer>
        <p>{formatDate(createdAt)}</p>
        <ButtonContainer>
          <DummyButton>View detail</DummyButton>
          <DummyButton>{isDone ? "Uncomplete" : "Complete"}</DummyButton>
        </ButtonContainer>
        <IsDoneFlag isDone={isDone} />
      </DummyTodoCardContainer>
    );
  }
);

export default DummyTodoCard;

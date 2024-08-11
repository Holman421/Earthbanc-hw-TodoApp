"use client";

import { db } from "apps/Earthbanc/prisma/db";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type TodoDetailProps = {
  params: {
    id: string;
  };
};

type PriorityProps = {
  priority: "HIGH" | "MEDIUM" | "LOW" | string;
};

type IsDoneProps = {
  isDone: boolean;
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  margin: 0 0 8px 0;
`;

const Priority = styled.span<PriorityProps>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.priority) {
      case "HIGH":
        return "#ff4d4d";
      case "MEDIUM":
        return "#ffcc00";
      case "LOW":
        return "#66ff66";
      default:
        return "#ccc";
    }
  }};
  color: #fff;
`;

const CreatedAt = styled.p`
  font-size: 0.8em;
  color: #666;
`;

const IsDone = styled.p<IsDoneProps>`
  font-size: 0.9em;
  color: ${(props) => (props.isDone ? "green" : "red")};
`;

export default async function TodoDetail({ params }: TodoDetailProps) {
  let todo;
  try {
    todo = await db.todo.findUnique({
      where: {
        id: params.id,
      },
    });
  } catch (err) {
    console.error("Error fetching todo:", err);
    return <div>Error fetching todo</div>;
  }

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <Card>
      <Title>{todo.title}</Title>
      <Description>{todo.description}</Description>
      <Priority priority={todo.priority}>{todo.priority}</Priority>
      <CreatedAt>
        Created at: {new Date(todo.createdAt).toLocaleString()}
      </CreatedAt>
      <IsDone isDone={todo.isDone}>
        {todo.isDone ? "Completed" : "Not Completed"}
      </IsDone>
    </Card>
  );
}

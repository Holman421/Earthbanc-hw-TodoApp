"use client";

import React from "react";
import { useFormState } from "react-dom";
import styled from "styled-components";
import { createTodo } from "../actions/createTodo";

const Container = styled.div`
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 3rem;
  width: clamp(15rem, 100%, 60rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: clamp(10rem, 600%, 35rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 3rem 3rem 3rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function NewTodoForm() {
  const [formState, action] = useFormState(createTodo, {
    titleError: "",
    descriptionError: "",
    priorityError: "",
    databaseError: "",
    isSuccessful: false,
  });

  const hasError =
    formState.titleError ||
    formState.descriptionError ||
    formState.priorityError;

  return (
    <Container>
      <Title>New Todo</Title>
      <Form action={action}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" />
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" />
        <Label htmlFor="priority">Priority</Label>
        <Select name="priority">
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </Select>
        <Button type="submit">Create</Button>
      </Form>
      {hasError && (
        <div>
          {formState.titleError && <div>{formState.titleError}</div>}
          {formState.descriptionError && (
            <div>{formState.descriptionError}</div>
          )}
          {formState.priorityError && <div>{formState.priorityError}</div>}
        </div>
      )}
      {formState.isSuccessful && <div>Tým byl úspěšně zaregistrován</div>}
    </Container>
  );
}

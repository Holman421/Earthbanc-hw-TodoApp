"use client";

import React from "react";
import { useFormState } from "react-dom";
import styled from "styled-components";
import AttentionBlock from "./AttentionBlock";
import actions from "../actions";

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
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  width: clamp(10rem, 600%, 35rem);
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
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
  const [formState, action] = useFormState(actions.createTodo, {
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

  const renderMessages = () => {
    const renderError = (error: string | undefined) => {
      return error ? (
        <AttentionBlock text={error} sentiment="negative" />
      ) : null;
    };

    if (hasError) {
      return (
        <>
          {renderError(formState.titleError)}
          {renderError(formState.descriptionError)}
          {renderError(formState.priorityError)}
        </>
      );
    }

    if (formState.isSuccessful) {
      return (
        <AttentionBlock
          text="Todo was successfully created!"
          sentiment="positive"
        />
      );
    }

    return null;
  };

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
      {renderMessages()}
    </Container>
  );
}

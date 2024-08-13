"use client";

import actions from "apps/Earthbanc/actions";
import AttentionBlock from "apps/Earthbanc/components/AttentionBlock";
import Button from "apps/Earthbanc/components/Button";
import SecondaryButton from "apps/Earthbanc/components/SecondaryButton";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 0 2rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

const PositiveFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;
`;

export default function page() {
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
        <PositiveFeedbackContainer>
          <AttentionBlock
            text="Todo was successfully created!"
            sentiment="positive"
          />
          <Link href="/todos">
            <SecondaryButton>View new todo</SecondaryButton>
          </Link>
        </PositiveFeedbackContainer>
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

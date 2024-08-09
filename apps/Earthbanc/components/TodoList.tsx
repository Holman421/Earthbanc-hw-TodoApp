import React, { useState } from "react";
import TodoCard from "./TodoCard";
import styled from "styled-components";
import Button from "./Button";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 350px;
  font-size: 0.8rem;
`;

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos: dummyTodos }: TodoListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 3;

  const startIndex = (currentPage - 1) * todosPerPage;
  const endIndex = startIndex + todosPerPage;
  const currentTodos = dummyTodos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dummyTodos.length / todosPerPage);

  return (
    <TodoListContainer>
      <TodosContainer>
        {currentTodos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </TodosContainer>
      <PaginationContainer>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </PaginationContainer>
    </TodoListContainer>
  );
}

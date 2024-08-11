import React from "react";
import styled from "styled-components";
import Button from "./Button";

const TodosPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  font-size: 0.8rem;
`;

type TodosPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const TodosPagination: React.FC<TodosPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages === 0 || totalPages === 1) {
    return null;
  }

  return (
    <TodosPaginationContainer>
      <Button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </TodosPaginationContainer>
  );
};

export default TodosPagination;

"use client";

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  showText?: boolean;
}

const StyledButton = styled.button<{ showText: boolean }>`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: darkred;
  }

  ${({ showText }) =>
    !showText &&
    `
    padding: 0;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
  `}
`;

const DeleteButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  showText = true,
}) => {
  return (
    <StyledButton onClick={onClick} showText={showText}>
      {showText ? text : "x"}
    </StyledButton>
  );
};

export default DeleteButton;

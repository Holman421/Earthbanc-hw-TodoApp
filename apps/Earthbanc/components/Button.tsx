import styled from "styled-components";

const Button = styled.button`
  background-color: #f1f1f1;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #e8e8e8;
  }
  &:active {
    transform: scale(0.95);
  }
  border: 1px solid #5f5f5f;
`;

export default Button;
import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: #00a9b5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  &:hover {
    background-color: #008c95;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default Button;

import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

export default SecondaryButton;

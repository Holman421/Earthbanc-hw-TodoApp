import React from "react";
import styled from "styled-components";
import { tagColors } from "../config/colors";

const ImportanceTagContainer = styled.div<{ priority: Priority }>`
  background-color: ${(props) => tagColors[props.priority]};
  padding: 0.15rem 0.5rem;
  border-radius: 1.5rem;
  font-size: 0.8rem;
`;

type ImportanceTagProps = {
  priority: Priority;
};

export default function ImportanceTag({ priority }: ImportanceTagProps) {
  const priorityText =
    priority.charAt(0).toUpperCase() + priority.slice(1).toLocaleLowerCase();

  return (
    <ImportanceTagContainer priority={priority}>
      {priorityText}
    </ImportanceTagContainer>
  );
}

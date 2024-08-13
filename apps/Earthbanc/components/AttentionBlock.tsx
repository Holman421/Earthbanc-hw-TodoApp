import React from "react";
import styled, { keyframes, css } from "styled-components";
import { feedbackColors } from "../config/colors";

interface AttentionBlockProps {
  text: string;
  sentiment: "positive" | "neutral" | "negative";
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const getColor = (sentiment: "positive" | "neutral" | "negative") => {
  switch (sentiment) {
    case "positive":
      return "#28a745";
    case "neutral":
      return "#ffc107";
    case "negative":
      return "#dc3545";
    default:
      return "#ffffff";
  }
};

const Block = styled.div<{ sentiment: "positive" | "neutral" | "negative" }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  background-color: ${({ sentiment }) => getColor(sentiment)};
  animation: ${fadeIn} 0.5s ease-in-out;
  font-size: 0.9rem;
  color: white;

  ${({ sentiment }) =>
    sentiment === "positive" &&
    css`
      border: 1px solid ${feedbackColors.positive};
    `}

  ${({ sentiment }) =>
    sentiment === "neutral" &&
    css`
      border: 1px solid ${feedbackColors.neutral};
    `}

  ${({ sentiment }) =>
    sentiment === "negative" &&
    css`
      border: 1px solid ${feedbackColors.negative};
    `}
`;

const AttentionBlock: React.FC<AttentionBlockProps> = ({ text, sentiment }) => {
  return <Block sentiment={sentiment}>{text}</Block>;
};

export default AttentionBlock;

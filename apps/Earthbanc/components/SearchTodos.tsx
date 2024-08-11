import React from "react";
import styled from "styled-components";

type SearchTodosProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const SeachTodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
`;

export default function SearchTodos({
  searchValue,
  setSearchValue,
}: SearchTodosProps) {
  return (
    <SeachTodosContainer>
      <label>Search Todos</label>
      <SearchInput
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></SearchInput>
    </SeachTodosContainer>
  );
}

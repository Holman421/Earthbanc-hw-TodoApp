import React from "react";
import styled from "styled-components";

type SearchTodosProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const SeachTodosContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  width: 350px;
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

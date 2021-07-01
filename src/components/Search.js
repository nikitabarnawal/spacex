import React from "react";

import InputWithLabel from "./InputWithLabel";
import styled from "styled-components";

const SearchWrapper = styled.div`
  margin-left: auto;
  margin-top: 2%;
  width: 25%;

`;

const Search = ({ search, onSearchInput }) => (
    <SearchWrapper>
        <InputWithLabel
            id="search"
            value={search}
            isFocused
            onInputChange={onSearchInput}
        >
            <strong style={{ color: "white" }}>Search</strong>
        </InputWithLabel>
    </SearchWrapper>

);

export default Search;
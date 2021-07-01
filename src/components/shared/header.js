import styled from "styled-components";
import theme from "../../variables";
import React, { useState, useEffect } from "react";
import Navigation from "../navigation";
import Logo, { LogoWrapper } from "../logo";
import Wrapper, { WrapperFrame } from "../../layout/wrapper";
import Search from "../Search";

const HeaderWrapper = styled.header`
  background-color: ${theme.blackTransparent};
  position: fixed;
  width: 100%;
  z-index: 100;

  ${LogoWrapper} {
    padding: 10px 0;
  }

  ${WrapperFrame} {
    display: flex;
    align-items: center;
  }
`;

const Header = (props) => {
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo background={"transparent"} color={theme.white} />
          <Search
            isFocused
            search={props.searchInput}
            onSearchInput={props.handleSearchInput}
          />
          <Navigation />
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

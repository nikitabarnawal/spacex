import * as React from "react";
import theme from "../../variables";
import App from "../../App";

import NavItem from "./nav-item";
import styled from "styled-components";

import Burger, { BurgerMenu } from "./burger";
import { device } from "../../helpers";

import { Link } from "react-router-dom";

const navData = [
  { home: "rockets" },
  { launches: "launches" },
  { rockets: "launches" },
];

const NavList = styled.ul`
  color: white;
  display: none;

  @media ${device.laptop} {
    display: inline-flex;
  }
`;

const NavWrapper = styled.nav`
  margin-left: auto;

  ${BurgerMenu} {
    @media ${device.laptop} {
      display: none;
    }
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  padding: "20px",
};

const navigation = () => {
  return (
    <>
      <NavWrapper>
        <NavList>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/launches" style={linkStyle}>Launches</Link>
          <Link to="/rockets" style={linkStyle}>Rockets</Link>
        </NavList>
        <Burger />
      </NavWrapper>
    </>
  );
};

export default navigation;

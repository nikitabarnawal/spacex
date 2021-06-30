import * as React from "react";
import styled from "styled-components";

export const WrapperFrame = styled.div`
    display: flex;
    flex-wrap: wrap;
  
`;

const gridWrapper = (props) => <WrapperFrame>{props.children}</WrapperFrame>;

export default gridWrapper;

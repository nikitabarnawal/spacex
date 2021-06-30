import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../helpers';
import Image from '../image';
import Lockup from '../lockup';

const LaunchCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  // display: block;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;
  @media ${device.laptop} {
    width: 30%;
  }
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;
  margin-top: auto;
  
  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

function Launchcard(props) {
  const [active, setActive] = useState(false);

  const changeLike = () => {
    setActive(!active)
  }

  return (
    <LaunchCard>
      <ImagContainer>
        <Image url={props.image} />
      </ImagContainer>

      <Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
    </LaunchCard>
  )
}

export default Launchcard
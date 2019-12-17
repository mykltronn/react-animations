import React from 'react'
import styled from 'styled-components';

import AnimatedList from './Animated/AnimatedList';

function PlaceOne(props) {
  return (
    <PlaceOneStyled>
      <h2>It's place one!</h2>
      <AnimatedList>
        <p>Some generic description about the about page. About.</p>
        <p>Some generic description about the about page. About.</p>
        <p>Some generic description about the about page. About.</p>
        <p>Some generic description about the about page. About.</p>
      </AnimatedList>
    </PlaceOneStyled>
  )
}

const PlaceOneStyled = styled.div`
  display: flex; 
  flex: 1;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: red;
`;

export default PlaceOne;

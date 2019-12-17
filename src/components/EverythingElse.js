import React from 'react';
import styled from 'styled-components';

// Router
import { Route, Redirect } from 'react-router-dom';

// Children
import PlaceTwo from './PlaceTwo';
import PlaceOne from './PlaceOne';
import AnimatedSwitch from './Animated/AnimatedSwitch';
import PlaceThree from './PlaceThree';


const AnimatedSwitchStyled = styled(AnimatedSwitch)`
  flex: 1;
  display: flex;
`;

function EverythingElse(props) {
  return (
    <AnimatedSwitchStyled>
      <Route path="/place1">
        <PlaceOne />
      </Route>

      <Route path="/place2">
        <PlaceTwo />
      </Route>

      <Route path="/place3">
        <PlaceThree />
      </Route>

      <Redirect to="/place1" />
    </AnimatedSwitchStyled>
  )
}

export default EverythingElse;

import React from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import EverythingElse from './components/EverythingElse';

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <SideBar />
        <EverythingElse />
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

// const AnimatedSwitchStyled = styled(AnimatedSwitch)`
//   display: flex; 
//   flex: 1;
//   position: relative;

//   div {
//     position: absolute;
//     display: flex; 
//     flex: 1;
//   }
// `

const PlaceBase = styled.div`
  display: flex; 
  flex: 1;
  justify-content: center;
  align-items: center;

  color: white;
`;


const PlaceOneStyled = styled(PlaceBase)`
  background-color: red;
`;

const PlaceTwoStyled = styled(PlaceBase)`
  background-color: blue;
`;

const PlaceThreeStyled = styled(PlaceBase)`
  background-color: green;
`;

export default App;

import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedModal from './Animated/AnimatedModal';

function PlaceThree(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen)

  return (
    <PlaceThreeStyled>
      <ButtonStyled onClick={toggleModal}>Open</ButtonStyled>
      <AnimatedModal isVisible={modalOpen} toggleVisibility={toggleModal}>
        <StyledDiv>
          <h2>All of that modal content.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum recusandae nulla laborum alias quos quis, magni aspernatur asperiores laboriosam ex illo deleniti voluptas molestiae labore error. Eaque temporibus voluptas exercitationem.</p>
          <ButtonStyled onClick={toggleModal}>Close</ButtonStyled>
        </StyledDiv>
      </AnimatedModal>
    </PlaceThreeStyled>
  )
}

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;

  p {
    padding: 1rem;
  }
`;

const PlaceThreeStyled = styled.div`
  display: flex; 
  flex: 1;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: green;
`;

const ButtonStyled = styled.button`
  border-radius: 4px;
  background-color: blue;
  color: white;
  padding: 1rem 2rem
`;

export default PlaceThree;

import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SideBarStyled = styled.aside`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      border: 1px solid black;
      padding: 2rem 0;
      text-align: center;
    }
  }
`;

export default function SideBar() {
  return (
    <SideBarStyled>
      <h2>The Sidebar</h2>
      <div>
        <Link to="/place1">Place 1 </Link>
        <Link to="/place2">Place 2 </Link>
        <Link to="/place3">Place 3 </Link>
      </div>
    </SideBarStyled>
  )
}
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Navbar = props => (
  <div>
    <StyledNav>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/links'>Links</Link>
      </li>
      <li>
        <Link to='/modal'>Modal</Link>
      </li>
      <li>
        <Link to='/404'>Not Found</Link>
      </li>
    </StyledNav>
  </div>
)

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    text-decoration: none;
    cursor: pointer;
  }
`

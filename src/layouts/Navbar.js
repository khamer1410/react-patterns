import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Navbar = props => (
  <Wrapper>
    <StyledNav>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/links'>Links</Link>
      </li>
      <li>
        <Link to='/modal'>Modal</Link>
      </li>
      <li>
        <Link to='/conditional-rendering'>Conditional rendering</Link>
      </li>
      <li>
        <Link to='/404'>Not Found</Link>
      </li>
    </StyledNav>
  </Wrapper>
)

const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  flex-direction: column;
`

const StyledNav = styled.ul`
  list-style: none;
  li {
    padding: 5px;
  }
  li a {
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
`

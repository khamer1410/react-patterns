import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <Wrapper>
    <StyledNav>
      <li>
        <Link to='/'>Intro</Link>
      </li>
      <li>
        <Link to='/components-demo'>Components demo</Link>
      </li>
      <li>
        <Link to='/conditional-rendering'>Conditional rendering</Link>
      </li>
      <li>
        <Link to='/private'>Private route</Link>
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
  padding: 0;
  li {
    list-style: none;
    padding: 15px 0;
  }
  li a {
    color: rgba(0,0,0, 0.4);
    cursor: pointer;
    text-align: left;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 2px;
    padding-left: 15px;
    transition: 0.8s;

    &:hover {
      color: rgba(0,0,0, 0.8);
    }
  }
`

import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import routes from 'config/routes'
import { LINKS_NAMES } from 'config/const'

export const Navbar = () => {
  const NavbarLinks = routes.filter(route => LINKS_NAMES.find(name => name === route.name))

  return (
    <Wrapper>
      <StyledNav>
        {NavbarLinks.map(link => {
          return (
            <StyledLink key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </StyledLink>
          )
        })
        }
        {/** Add dummy path for not found scenario */}
        <StyledLink>
          <Link to='/404'>Not Found</Link>
        </StyledLink>
      </StyledNav>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  flex-direction: column;
`

const StyledNav = styled.ul`
  padding: 0;
`
const StyledLink = styled.li`
    list-style: none;
    padding: 15px 0;

  a {
    color: ${({ isActive }) => isActive ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)'};
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
`;

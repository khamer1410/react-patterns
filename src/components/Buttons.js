import styled from 'styled-components';


export const LoginButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 1px white;

  background: transparent;
  color: white;

  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  transition: 0.8s;

  :hover {
    background: #222;
  }
`;

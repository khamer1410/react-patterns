import styled from 'styled-components';


export const CircleButton = styled.button`
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

export const Button = styled.button`
  font-size: 1em;
  font-weight: 400;
  color: white;
  padding: 1em;
  margin: ${({ margin }) => margin ? margin : 0};
  min-width: 300px;

  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;

  background-color: #084c5d;
  background-image: linear-gradient(to bottom,rgba(255,255,255,0.4),rgba(255,255,255,0));
  background-repeat: no-repeat;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.3);
  transition: .4s;

  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
    background-position: 0 -15px;
  }

  &:active {
    transform: translateY(4px);
    background-position: 0 -60px;
  }
`
Button.defaultProps = {
  margin: '5px'
}

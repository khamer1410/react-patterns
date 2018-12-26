import styled from 'styled-components';
import background from 'assets/blue-blank.jpg'

const Main = styled.div`
  grid-area: main;
  min-height: 100vh;
  padding: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${background});
  background-size: cover;
  `

export default Main

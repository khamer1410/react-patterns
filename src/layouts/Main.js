import styled from 'styled-components';
import blueBackground from 'assets/blue-blank.jpg'
import darkBackground from 'assets/dark-background.jpg'
import { WithThemeConsumer } from 'utils/ThemeProvider'
import { THEME_CLASSIC, THEME_MODERN } from 'config/const'

const backgroundByTheme = {
  [THEME_CLASSIC]: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${blueBackground})`,
  [THEME_MODERN]: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${darkBackground})`,
}

const fontColorByTheme = {
  [THEME_CLASSIC]: 'initial',
  [THEME_MODERN]: 'white'
}

const Main = styled.div`
  grid-area: main;
  min-height: 100vh;
  padding: 15px;
  color: ${({ theme }) => fontColorByTheme[theme]};
  background: ${({ theme }) => backgroundByTheme[theme]};
  background-size: cover;
  `

export default WithThemeConsumer(Main)

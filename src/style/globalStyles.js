import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeConsumer } from "utils/ThemeProvider";
import { THEME_CLASSIC, THEME_MODERN } from 'config/const'

const themeFonts = {
  [THEME_CLASSIC]: 'Century',
  [THEME_MODERN]: 'sans-serif',
}

export const GlobalStyles = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <RawGlobalStyles theme={theme} />
    )}
  </ThemeConsumer>
)

const RawGlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => themeFonts[props.theme]};
  }

  * {
    box-sizing: border-box;
  }
`

RawGlobalStyles.defaultProps = {
  theme: THEME_CLASSIC
}

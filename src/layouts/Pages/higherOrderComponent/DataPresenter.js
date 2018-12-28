import React from 'react';

import styled from 'styled-components'
import { THEME_CLASSIC, THEME_MODERN } from 'config/const'

const DataPresenter = ({ theme }) => (
  <div>
    <ThemePresenter theme={theme}>Current theme is <code>{theme}</code></ThemePresenter>
    <h3>All correct, just displaying some funny animals {'\u{1F436}'} </h3>
  </div>
)


const ThemePresenter = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: ${({ theme }) => {
    const backgroundByTheme = {
      [THEME_CLASSIC]: 'linear-gradient(rgba(255,255,255, 0.5), rgba(60,167,208, 0.5))',
      [THEME_MODERN]: 'linear-gradient(rgba(255,255,255, 0.5), rgba(245,0,0, 0.5))',
    }
    return backgroundByTheme[theme]
  }};
`

export default DataPresenter

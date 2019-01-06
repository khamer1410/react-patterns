import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { THEME_CLASSIC, THEME_MODERN } from 'config/const'
import { WithThemeConsumer } from 'utils/ThemeProvider'

const defaultProps = {
  theme: THEME_CLASSIC
}

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.string,
}

const InfoBox = ({ title, children, theme, ...props }) => (
  <InfoWrapper theme={theme} {...props}>
    {title && <Heading>{title}</Heading>}
    {children}
  </InfoWrapper>
)

InfoBox.defaultProps = defaultProps
InfoBox.propTypes = propTypes

export default WithThemeConsumer(InfoBox)

// styled components
const backgroundByTheme = {
  [THEME_CLASSIC]: 'linear-gradient(rgba(255,255,255, 0.5), rgba(60,167,208, 0.5))',
  [THEME_MODERN]: 'linear-gradient(rgba(255,255,255, 0.5), rgba(245,0,0, 0.5))',
}

const InfoWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => backgroundByTheme[theme]};
`
const Heading = styled.h4`
  margin: 0;
`

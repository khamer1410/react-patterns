import React, { Component } from 'react'
import logo from 'logo.svg'
import styled, { keyframes } from 'styled-components'

import { CircleButton } from 'components/Buttons'
import { Modal } from 'components/Modal'
import { ToggleButton } from 'components/ToggleButton'
import LoginPage from 'layouts/Pages/Login'
import { getCurrentUser, logout } from 'utils/authentication'
import { WithThemeConsumer } from "utils/ThemeProvider"
import { THEME_CLASSIC, THEME_MODERN } from 'config/const'

class Header extends Component {
  state = {
    isHeaderModalOpen: false,
    isUserLogged: false,
  }

  componentDidMount() {
    const isLogged = Boolean(getCurrentUser());
    this.setState({ isUserLogged: isLogged })
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isHeaderModalOpen: !prevState.isHeaderModalOpen,
    }))
  }

  logoutUser = () => {
    logout()
    this.setState({ isUserLogged: false })
  }

  userLoggedHandler = () => {
    this.setState({
      isUserLogged: true,
      isHeaderModalOpen: false
    })
  }

  switchTheme = () => {
    const { theme, setTheme } = this.props

    const newTheme = theme === THEME_CLASSIC ? THEME_MODERN : THEME_CLASSIC

    setTheme(newTheme)
  }

  render() {
    const { isHeaderModalOpen } = this.state
    const { theme } = this.props

    const isClassicTheme = theme === THEME_CLASSIC

    return (
      <Wrapper theme={theme}>
        <Logo src={logo} alt="logo" />
        <Title>Welcome to React patterns playground</Title>
        <ToggleButton
          onClick={this.switchTheme}
          label='Switch theme'
          name='theme-switcher'
          id='theme-switcher'
          isActive={!isClassicTheme}
        />

        {this.state.isUserLogged
          ? <CircleButton onClick={this.logoutUser} children='Log out' />
          : <CircleButton onClick={this.toggleModal} children='Log in' />
        }
        <Modal
          header={<h1>Login page</h1>}
          show={isHeaderModalOpen}
          onClose={this.toggleModal}
        >
          <LoginPage callback={this.userLoggedHandler} />
        </Modal>
      </Wrapper>);
  }
}

export default WithThemeConsumer(Header)

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  background-color: #222;
  background: ${({ theme }) => headerBackgroundThemes[theme]};
  padding: 10px;
  color: white;
`

const headerBackgroundThemes = {
  [THEME_CLASSIC]: 'linear-gradient(45deg, #222 30%, #00cbff)',
  [THEME_MODERN]: 'linear-gradient(45deg, #c50000 30%, #222)'
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 70px;
`
const Title = styled.h1`
  flex: 1;
  font-size: 1.5em;
`

import React, { Component } from 'react'
import logo from 'logo.svg'
import styled from 'styled-components'
import 'style/App.css'

import { CircleButton } from 'components/Buttons'
import { Modal } from 'components/Modal'
import LoginPage from 'components/Login'
import { getCurrentUser, logout } from 'utils/authentication'
export class Header extends Component {
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

  render() {
    const { isHeaderModalOpen } = this.state

    return (
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React patterns playground</h1>
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

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  background-color: #222;
  background: linear-gradient(45deg, #222 30%, #00cbff);
  padding: 10px;
  color: white;
`


import React, { Component } from 'react'
import logo from 'logo.svg'
import styled from 'styled-components'
import 'style/App.css'

import { LoginButton } from 'components/Buttons'
import { Modal } from 'components/Modal'
import LoginPage from 'components/Login'

export class Header extends Component {
  state = {
    isHeaderModalOpen: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isHeaderModalOpen: !prevState.isHeaderModalOpen,
    }))
  }

  render() {
    const { isHeaderModalOpen } = this.state

    return (
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React patterns playground</h1>
        <LoginButton onClick={this.toggleModal}>
          Log in
        </LoginButton>
        <Modal
          header={<h1>Login page</h1>}
          show={isHeaderModalOpen}
          onClose={this.toggleModal}
        >
          <LoginPage callback={this.toggleModal} />
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


import React from 'react'
import styled from 'styled-components'
import { Modal } from 'components/Modal'

import { login } from 'utils/authentication'

// TODO: Add name input

export const HeaderModal = props => {
  const loginBtnHandler = () => {
    login()
    props.onClose()
  }

  return (
    <Modal {...props} header={<h1>Login page</h1>}>
      <Wrapper>
        <p>Please log in to see extended content</p>

        <button onClick={loginBtnHandler}>
          Login
      </button>
      </Wrapper>
    </Modal>);
}

export default HeaderModal

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

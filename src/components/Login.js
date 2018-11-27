import React from 'react';
import styled from 'styled-components'

import { login } from 'utils/authentication'
import { Button } from 'components/Buttons'

export const LoginPage = props => {
  const loginBtnHandler = () => {
    login()
    props.callback && props.callback()
  }

  return (
    <Wrapper {...props}>
      <p>Please log in to see extended content</p>

      <Button onClick={loginBtnHandler}>
        Login
      </Button>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

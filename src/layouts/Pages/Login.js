import React from 'react';
import styled from 'styled-components'

import { login } from 'utils/authentication'
import { Button } from 'components/Buttons'

export const LoginPage = ({ location, history, callback, ...props }) => {
  const redirect = location && location.state && location.state.from

  const loginClickHandler = () => {
    login()
    redirect && history.push(redirect)
    callback && callback()
  }

  return (
    <Wrapper {...props}>
      <p>Please log in to see extended content</p>
      <Button onClick={loginClickHandler}>
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

import React from 'react'
import logo from 'logo.svg'
import styled from 'styled-components'
import 'style/App.css'

export const Header = props => (
  <Wrapper>
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React patterns playground</h1>
  </Wrapper>
)

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  background-color: #222;
  background: linear-gradient(45deg, #222 30%, #00cbff);
  padding: 10px;
  color: white;
`


import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import './App.css'
import { Navbar } from "layouts/Navbar"
import { Header } from 'layouts/Header'
import ModalPage from 'layouts/ModalPage'
import NotFound from 'components/NotFound'
import ConditionalRendering from 'layouts/ConditionalRendering'

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/links' component={Links} />
            <Route path='/modal' component={ModalPage} />
            <Route path='/conditional-rendering' component={ConditionalRendering} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </Container>
    )
  }
}

const Main = styled.div`
  grid-area: main;
  min-height: 100vh;
  padding: 10px;
  background: url('navy-background.jpg'), silver;
`

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header"
    "nav main main main main";
`

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Links = () => (
  <div>
    <h2>Links</h2>
  </div>
)

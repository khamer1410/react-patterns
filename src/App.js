import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import './App.css'
import { Navbar } from "layouts/Navbar"
import { Header } from 'layouts/Header'
import DemoPage from 'layouts/componentsDemo/DemoPage';
import NotFound from 'components/NotFound'
import ConditionalRendering from 'layouts/ConditionalRendering'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path='/' component={Links} />
            <Route path='/components-demo' component={DemoPage} />
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
  grid-template-columns: 200px auto;
  grid-template-areas:
    "header header"
    "nav main";
`

const Links = () => (
  <div>
    <h2>Links</h2>
  </div>
)

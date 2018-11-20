import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import styled from 'styled-components'
import 'style/App.css'
import { Navbar } from "layouts/Navbar"
import { Header } from 'layouts/Header'
import DemoPage from 'layouts/componentsDemo/DemoPage'
import NotFound from 'components/NotFound'
import ConditionalRendering from 'layouts/ConditionalRendering'
import { getCurrentUser } from 'utils/authentication'


// TODO: move routes to separate config
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
            <PrivateRoute path='/private' component={NotFound} />
            {/* 404# scenarios */}
            <Route component={NotFound} />
          </Switch>
        </Main>
      </Container>
    )
  }
}

const Links = () => (
  <div>
    <h2>Links</h2>
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      getCurrentUser()
        ? <Component {...props} />
        : <Redirect to='/components-demo' />
    )}
  />
)

// Styled components
const Main = styled.div`
  grid-area: main;
  min-height: 100vh;
  padding: 10px;
  background: silver;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas:
    "header header"
    "nav main";
`

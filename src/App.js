import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import styled from 'styled-components'
import Navbar from 'layouts/Navbar'
import Header from 'layouts/Header'
import Main from 'layouts/Main'

import { getCurrentUser } from 'utils/authentication'
import routes from 'config/routes'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            {routes.map(({ privateRoute, name, ...props }) => (
              privateRoute
                ? <PrivateRoute {...props} key={name} />
                : <Route {...props} key={name} />
            ))}
          </Switch>
        </Main>
      </Container>
    )
  }
}

const PrivateRoute = ({ component: Component, redirect, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      getCurrentUser()
        ? <Component {...props} />
        : <Redirect to={{
          pathname: redirect,
          state: { from: props.location }
        }} />
    )}
  />
)

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas:
    "header header"
    "nav main";
`

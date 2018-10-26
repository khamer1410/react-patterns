import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';
import './App.css'
import { Navbar } from "layouts/Navbar";
import { Header } from 'layouts/Header'
import ModalPage from 'layouts/ModalPage'
import NotFound from 'components/NotFound'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Background>
            <Navbar />
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/links' component={Links} />
              <Route path='/modal' component={ModalPage} />
              <Route component={NotFound} />
            </Switch>
          </Background>
        </Router>
      </div>
    )
  }
}

export default App


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

const Background = styled.div`
  min-height: 100vh;
  background: url('navy-background.jpg'), silver;
`

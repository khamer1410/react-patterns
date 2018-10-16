import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import './App.css'
import { Header } from 'layouts/Header'
import ModalPage from 'layouts/ModalPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
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

const Main = props => (
  <div>
    <div>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/links'>Links</Link>
        </li>
        <li>
          <Link to='/'>name</Link>
        </li>
        <li>
          <Link to='/modal'>Modal</Link>
        </li>
      </ul>
    </div>
    <Route path='/home' component={Home} />
    <Route path='/links' component={Links} />
    <Route path='/modal' component={ModalPage} />
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

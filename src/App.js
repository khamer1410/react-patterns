import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { Navbar } from "layouts/Navbar";
import { Header } from 'layouts/Header'
import ModalPage from 'layouts/ModalPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Navbar />
            <hr />
            <Route path='/home' component={Home} />
            <Route path='/links' component={Links} />
            <Route path='/modal' component={ModalPage} />
          </div>
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

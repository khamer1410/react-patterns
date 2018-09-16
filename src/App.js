import React, { Component } from 'react'
// import { Header } from 'layouts/Header.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path='/home' component={Home} />
          {/* <Header/> */}
          <div>
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/'>name</Link>
              </li>
              <li>
                <Link to='/'>name</Link>
              </li>
            </ul>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
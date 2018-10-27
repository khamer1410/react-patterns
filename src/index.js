import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom"

import Content from 'Content'

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <Content />
    </Router>
  </Fragment>
)

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

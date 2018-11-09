import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom"

import App from 'App'

const AppContainer = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </Fragment>
)

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`
ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()

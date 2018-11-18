import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from "react-router-dom"

import App from 'App'
import { GlobalStyles } from 'style/globalStyles'

const AppContainer = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </Fragment>
)


ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from "react-router-dom"

import App from 'App'
import { GlobalStyles } from 'style/globalStyles'
import ThemeProvider from "utils/ThemeProvider";

const AppContainer = () => (
  <>
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </>
)


ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import store from 'store/store'

import App from 'App'
import { GlobalStyles } from 'style/globalStyles'
import ThemeProvider from "utils/ThemeProvider";
import { ROUTER_BASE_PATH_NAME } from 'config/const';


const AppContainer = () => (
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyles />
      <Router basename={ROUTER_BASE_PATH_NAME}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
)


ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()

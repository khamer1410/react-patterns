import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const AppConfig = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<AppConfig />, document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './i18n' // Import the i18n configuration

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

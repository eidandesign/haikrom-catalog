import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DesignSystem from './DesignSystem.jsx'
import './index.css'

const isDS = window.location.search.includes('ds')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isDS ? <DesignSystem /> : <App />}
  </React.StrictMode>,
)

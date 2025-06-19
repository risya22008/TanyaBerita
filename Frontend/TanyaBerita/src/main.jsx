// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Pastikan ini mengarah ke App.jsx
import './styles/variables.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
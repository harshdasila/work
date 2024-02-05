import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TawkMessengerReact propertyId='65c0f3c28d261e1b5f5c8f16' />
  </React.StrictMode>,
)

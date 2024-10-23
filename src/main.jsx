import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SubmittedProvider from './contexts/submitted-context.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubmittedProvider>
      <App />
    </SubmittedProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/tokens.css'
import './styles/global.css'
import App from './App'

// Active déjà deux comportements de React Router v7
// (sans ça, il affiche des avertissements dans la console)
const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={routerFuture}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

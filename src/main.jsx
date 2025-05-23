import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Toaster siempre al final de tu árbol */}
    <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
  </StrictMode>,
)

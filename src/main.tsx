import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/core/i18n'
import { App } from './App.tsx'
import '@/core/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

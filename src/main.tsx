import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { route } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)

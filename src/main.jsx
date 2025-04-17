import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import routes from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './utility/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={routes}>

</RouterProvider>
  </AuthProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient } from 'react-query'
import { RouterProvider } from 'react-router'
import { createBrowserRouter, Router } from 'react-router-dom'
import { CarDetail } from './components/car-detail/CarDetail.jsx'
import { Catalog } from './components/Catalog.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/', // Переход на страницу
    element: <Catalog /> // то что будет отображать страница
  },
  {
    path: '/car/:id',
    element: <CarDetail />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)

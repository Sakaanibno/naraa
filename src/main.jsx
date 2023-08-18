import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/about/index.jsx'
import Home from './pages/home/index.jsx'
import Uilchilgee from './pages/uilchilgee/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/uilchilgee',
        element: <Uilchilgee />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

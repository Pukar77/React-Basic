import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/About.jsx'
import Home from './components/home.jsx'
import Login from './components/login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
   path:'/',
   element: <Home/>
  },

  {
   path:"/aboutus",
   element:<About/>
  },

  {
   path:"/login",
   element:<Login/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
   
  </StrictMode>
)

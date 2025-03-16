import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
const App = () => {
  const route=createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  }])
  return <RouterProvider router={route}/>
}

export default App

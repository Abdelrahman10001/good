import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Notfound from './Component/Notfound/Notfound';



let routers = createBrowserRouter([
  {
                                      
    element: <Layout />, children: [
      // { index: true, element: <Home /> },
      // Delete the Layout path and put the empty path to home 
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound/> },
    ]
  }
])

export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>

  </>
}

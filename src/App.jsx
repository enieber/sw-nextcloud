import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Production from './pages/Productions';

const Routers = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/productions',
    element: <Production name="João" />,
    name: 'production'
  }
]

const router = createBrowserRouter(Routers);

function App() {
  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App

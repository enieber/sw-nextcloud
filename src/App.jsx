import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import ImageProject from './components/images/Projects';
import './sass/home.scss'

const Home = () => {
  return (
    <section className="container">
      <h1>Produção Cooperativista</h1>
      <p>Nessa sessão você poderá acompanhar toda sua produção cooperativista</p>
      <div className="container-image">
        <ImageProject />
      </div>
      <div>
      <a
        className="button"
        href={Routers.find(item => item.name.includes('production')).path}
      >Começar</a>
      </div>
    </section>
  )
}

const Production = (props) => {
  const { name } = props;

  return (
    <section>
      <h2>{`Produção Cooperativista - ${name}`}</h2>
    </section>
  )
}

const Routers = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/production',
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

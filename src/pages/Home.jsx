import React from 'react'
import ImageProject from '../components/images/Projects';
import '../sass/home.scss'

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
        href={'/productions'}
      >Começar</a>
      </div>
    </section>
  )
}

export default Home;

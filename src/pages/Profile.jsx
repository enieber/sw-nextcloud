import React from 'react';
import Api from '../api/api';

import '../sass/production.scss';

const Production = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Api.get("/profile")
      .then(response => {
        setData(response.data)
        setError(null)
      })
      .catch(err => {
        setError(err.message);
        setData([]);
      })
  }, [])

  if (error) {
    return (
      <section className="container">
        <h2>{error}</h2>  
      </section>
    )
  }   


  return (
    <section className="container">
      <h2>{`Dados do Perfil`}</h2>
      <div className="productions">
        <h3>{data.name}</h3>
        <span>Matricula: {data.registry_number}</span>
        <span>Data de registro: {data.registry_date}</span>
      </div>
    </section>
  )
}

export default Production;


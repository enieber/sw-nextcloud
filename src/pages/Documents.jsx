import React from 'react';
import Api from '../api/api';

import '../sass/production.scss';

const Documents = (props) => {

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Api.get("/documents")
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
      <h2>{`Documentos`}</h2>
      <div className="productions">
        {data.map(({ name, file, id }) => {
          return (
            <div key={id} className="item">
              <div>
              <h4>{name}</h4>              
              </div>
              <div>
               <a href={file} target="blank">Downdoad</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Documents;


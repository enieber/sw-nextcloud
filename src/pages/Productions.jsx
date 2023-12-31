import React from 'react';
import Api from '../api/api';

import '../sass/production.scss';

const Production = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Api.get("/productions")
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
      <h2>{`Produção Cooperativista`}</h2>
      <div className="productions">
        {data.map(({ value, date, file, id }) => {
          return (
            <div key={id} className="item">
              <div>
              <h4>{date}</h4>              
              </div>
            <div>{value}</div>
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

export default Production;


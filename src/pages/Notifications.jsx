import React from 'react';
import Api from '../api/api';

import '../sass/production.scss';

const Documents = () => {

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Api.get("/notifications")
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
      <h2>{`Comunicados`}</h2>
      <div className="productions">
        {data.map(({ id, title, content, date, time }) => {
          return (
            <div key={id} className="item">
              <div>
              <h4>{title}</h4>              
              <p>{content}</p>
              </div>
              <span>{`${date} - ${time}`}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Documents;


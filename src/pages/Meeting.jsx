import React from 'react';
import Api from '../api/api';

import '../sass/production.scss';

const Documents = (props) => {

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Api.get("/meetings")
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
      <h2>{`Assembleias`}</h2>
      <div className="productions">
        {data.map(({ place, type, files, date, time, id }) => {
          return (
            <div key={id} className="item">
              <div>
              <h4>{`Assembleia - ${type} `}</h4>              
              <span>{place}</span>
              </div>
              <span>{`${date} - ${time}`}</span>
              <div>
              {files.map(file => {
                return (
                <div key={file.name}>
                  <span>{file.name}</span>
               <a href={file.link} target="blank">Downdoad</a>
                  </div>
                )
              })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Documents;


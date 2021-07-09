import React, { useState, useEffect } from 'react';

const Characters = () => {
  // Estados
  const [character, setCharacter] = useState([])

  // Llamado a la API
  useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacter(data.results))

  }, [])

  return (
    <div className="container">
      <div className="characters">
        {
          character.map(item => (
            <div className="box" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="character">
                <h3 className="name">{item.name}</h3>
                <div className="character-item">
                  {
                    item.status == "Alive"
                      ? <span className="st-alive" />
                      : item.status == "Dead"
                        ? <span className="st-dead" />
                        : <span className="st-unknown" />
                  }
                  <p className="specie">{item.status} - {item.species}</p>
                </div>
                <label className="subtitle">Gender</label>
                <p className="gender">{item.gender}</p>
                <label className="subtitle">Origin</label>
                <p className="origin">{item.origin.name}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Characters;
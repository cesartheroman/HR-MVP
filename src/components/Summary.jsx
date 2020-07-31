import React from 'react';

const Summary = ({ pokemon, description, updateParty }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateParty(pokemon);
  };

  return (
    <div className="summaryContainer">
      <img src={pokemon.sprites.front_default}></img>
      <div className="description">
        <ul>
          <li>Name: {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</li>
          <li>Romandex no. :{pokemon.id}</li>
          <li>
            Type(s):{' '}
            <ul>
              {pokemon.types.map((type, i) => {
                return (
                  <li key={i}>
                    {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                  </li>
                );
              })}
            </ul>
          </li>
          <li>Description: {description}</li>
        </ul>
      </div>
      <button onClick={handleSubmit}>Add to Party?</button>
    </div>
  );
};

export default Summary;

import React from 'react';

const TeamBuilder = ({ pokemon }) => {
  return (
    <div className="teamContainer">
      {pokemon.map((pokemon, i) => {
        return (
          <div key={i}>
            <img src={pokemon.sprites.front_default}></img>
            <label>
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default TeamBuilder;

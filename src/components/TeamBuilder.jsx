import React from 'react';

const TeamBuilder = ({ pokemons, deleteFromParty }) => {
  const update = (e) => {
    deleteFromParty(e.target.name);
  };

  return (
    <div className="teamContainer">
      {pokemons.map((pokemon, i) => {
        return (
          <div key={i}>
            <img
              name={pokemon.name}
              onClick={update}
              src={pokemon.sprites.front_default}
            ></img>
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

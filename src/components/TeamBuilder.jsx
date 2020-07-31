import React, { useState, useEffect } from 'react';

export default function TeamBuilder({ pokemon }) {
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
}

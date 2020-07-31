import React, { useState } from 'react';
import { getPokemonByName, getPokemonDesc } from '../../helpers/pokeApi';

export default function SearchBar(props) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const searchPokemon = (e) => {
    e.preventDefault();

    if (name !== '') {
      getPokemonByName(name)
        .then(({ data }) => {
          props.show(data);
          return getPokemonDesc(name);
        })
        .then(({ data }) => {
          props.update(data.flavor_text_entries[6].flavor_text);
          setName('');
        })
        .catch((err) =>
          console.log('there was an error in getting pokemon: ', err)
        );
    }
  };

  return (
    <div className="searchBar">
      <form onSubmit={(e) => searchPokemon(e)}>
        <input
          type="text"
          value={name}
          placeholder="Search by name or id! (e.g: Pikachu or 25)"
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
        <button>Search Pokémon!</button>
      </form>
    </div>
  );
}

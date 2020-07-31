import axios from 'axios';

export const getPokemonByName = (name) => {
  name = name.toLowerCase();
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
};

export const getPokemonDesc = (name) => {
  name = name.toLowerCase();
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
};

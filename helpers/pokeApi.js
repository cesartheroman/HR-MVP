import axios from 'axios';

export const getPokemonByName = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
};

export const getPokemonDesc = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
};

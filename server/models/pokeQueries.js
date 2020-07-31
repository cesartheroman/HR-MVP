const pokeApi = require('../api/pokeApi');

module.exports = {
  queryPokemon: (name) => {
    pokeApi
      .getPokemonByName(name)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  },
};

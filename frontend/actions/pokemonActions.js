var Dispatcher = require('../dispatcher/dispatcher.js'),
    PokemonConstants = require('../constants/pokemonConstants.js');

var PokemonActions = {

  receiveAllPokemons: function(allPokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: allPokemon
    });
  },

  receiveSinglePokemon: function(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }

};


module.exports = PokemonActions;

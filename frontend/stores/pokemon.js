var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var _pokemons = [];

var PokemonStore = new Store(Dispatcher);

PokemonStore.all = function(){
  return  _pokemons.slice();
};

PokemonStore.find = function (pokemonId) {
  var result = undefined;
  PokemonStore.all().forEach(function (pokemon) {
    if (pokemon.id === pokemonId) {
      result = pokemon;
    }
  });
  return result;
};

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      resetSinglePokemon(payload.pokemon);
      break;
  }
};

function resetSinglePokemon (pokemon) {
  var changedPokemon = this.find(pokemon.id);
  _pokemons[_pokemons.indexOf(changedPokemon)] = pokemon;
  PokemonStore.__emitChange();
};

function resetPokemons (pokemons) {
  _pokemons = pokemons;
  PokemonStore.__emitChange();
};

module.exports = PokemonStore;

var ApiActions = require('../actions/pokemonActions.js');

var PokemonApiUtil = {

  fetchAllPokemons: function(){
    $.getJSON('api/pokemon', function(fetchedPokemons){
      ApiActions.receiveAllPokemons(fetchedPokemons);
    });
  },

  fetch: function(newProps){
    $.getJSON('api/pokemon/' + newProps.params.pokemonId, function(fetchedPokemon) {
      ApiActions.receiveSinglePokemon(fetchedPokemon);
    });
  }

};


module.exports = PokemonApiUtil;

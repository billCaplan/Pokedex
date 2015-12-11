var React = require('react'),
    PokemonApiUtil = require('./util/apiUtil.js'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonStore = require('./stores/pokemon.js'),
    PokemonDetail = require('./components/PokemonDetail')
    App = require('./components/App');

var Routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>

    </Route>
  </Route>

);

document.addEventListener('DOMContentLoaded', function() {
  var root = document.querySelector('#root');
  ReactDOM.render(
    <Router>{Routes}</Router>

  , root);

});

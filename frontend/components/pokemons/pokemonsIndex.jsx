var React = require('react'),
    ApiActions = require('../../actions/pokemonActions'),
    PokemonStore = require('../../stores/pokemon'),
    PokemonIndexItem = require('./pokemonIndexItem'),
    ApiUtil = require('../../util/apiUtil');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return ({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function() {
    this.token = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  render: function(){
    var that = this;
    var List = this.state.pokemons.map(function(pokemon, idx) {

      return <PokemonIndexItem pokemon={pokemon} key={idx} />
    });

    return(
          <ul>
            {List}
          </ul>
        );
  }

});

module.exports = PokemonsIndex;

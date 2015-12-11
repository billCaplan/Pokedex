var React = require('react'),
    History = require('react-router').History;



var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var pokemonURL = "pokemon/" + this.props.pokemon.id;
    this.history.push(pokemonURL);
  },

  render: function(){
    return(
          <li className="poke-list-item" onClick={this.showDetail}>
            {this.props.pokemon.name} {this.props.pokemon.poke_type}
          </li>
        );
  }

});

module.exports = PokemonIndexItem;

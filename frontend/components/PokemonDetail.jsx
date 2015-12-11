var React = require('react');
var PokemonStore = require('../stores/pokemon');
var ApiUtil = require('../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return ({ pokemon: this.getStateFromStore() });
  },

  getStateFromStore: function(){
    var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    return pokemon;
  },

  showDetail: function () {
    this.setState({ pokemon: this.getStateFromStore() });
  },

  componentDidMount: function() {
    this.token = PokemonStore.addListener(this.showDetail);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetch(newProps);
  },

  render: function() {
    if (typeof this.state.pokemon === 'undefined') {
      return (<div></div>);
    }
    var moves = this.state.pokemon.moves.map(function(move) {
      return move[0].toUpperCase() + move.slice(1);
    }).join(' . ');

    return (
            <div>
              <div className="pokemon-detail-pane">
                <div className="detail">Name: {this.state.pokemon.name}<br></br>
                                        Attack: {this.state.pokemon.attack}<br></br>
                                        Defense: {this.state.pokemon.defense}<br></br>
                                      Moves: <br></br>{moves}
                <img src={this.state.pokemon.image_url}></img>
              </div>
              </div>
            </div>
           );
  }

});

module.exports = PokemonDetail;

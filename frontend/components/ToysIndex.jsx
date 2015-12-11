var React = require('react');
var PokemonStore = require('../stores/pokemon');
var ApiUtil = require('../util/apiUtil');
var ToysIndexItem = require('./ToysIndexItem');

var ToysIndex = React.createClass({


  render: function(){
    var toys = this.props.toys;
    if (typeof toys === undefined){
      return (<div></div>);
    }

    var toyList = toys.map(function(toy, idx){
      return <ToyIndexItem  name={toy.name} happiness={toy.happiness} price={toy.price}/>
    });

    return(
      <ul>
        {toyList}
      </ul>
    );
  },
});



module.exports = ToysIndex;

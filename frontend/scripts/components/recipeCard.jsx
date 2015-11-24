var React = require('react');
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var IngredientsCard = require('./ingredientsCard.jsx');

var RecipeCard = React.createClass({
  render: function() {
    return (
      <ListGroupItem header={this.props.name} className="recipe-card">
        <IngredientsCard ingredients={this.props.ingredients} />
      </ListGroupItem>
    );
  }
});

module.exports = RecipeCard;

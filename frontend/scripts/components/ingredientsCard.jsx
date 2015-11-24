var React = require('react');
var _ = require('lodash');

var IngredientsCard = React.createClass({
  render: function() {
    var ingredients = this.props.ingredients;
    var ingredientsList = [];
    _.forOwn(ingredients, function(value, key) {
      ingredientsList.push(
        <div key={key}>
          <span>{key}:</span>
          <span>{value}</span>
        </div>
      );
    });
  
    return (
      <div className="ingredients-card">
        {ingredientsList}
      </div>
    );
  }
});

module.exports = IngredientsCard;

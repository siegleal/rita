var React = require('react');

var RecipeCard = React.createClass({
  render: function() {
    return (
      <div className="recipe-card">
        <span>{this.props.name}</span>
      </div>
    );
  }
});

module.exports = RecipeCard;

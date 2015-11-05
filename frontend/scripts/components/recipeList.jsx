var React = require('react');
var RecipeCard = require('./recipeCard.jsx');
var recipesActions = require('../actions/recipesActions');
var recipesStore = require('../stores/recipesStore');

var RecipeList = React.createClass({
  getInitialState: function() {
    return {
      recipes: {}
    };
  },
  
  componentDidMount: function() {
    recipesActions.getRecipes();
    recipesStore.listen(this.onRecipesUpdate);
  },
  
  componentWillUnmount: function() {
    recipesStore.unlisten(this.onRecipesUpdate);
  },
  
  onRecipesUpdate: function(state) {
    this.setState({ recipes: state.recipes });
  },

  render: function() {
    var recipes = this.state.recipes;
    var recipeCards = [];
    
    Object.keys(recipes).forEach(function(recipe) {
      var recipeObj = recipes[recipe];
      var name = recipeObj.displayName;
      recipeCards.push(<li key={name}><RecipeCard name={name} /></li>);
    });
  
    return (
      <ul className="recipe-list">
        {recipeCards}
      </ul>
    );
  }
});

module.exports = RecipeList;

var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;
var _ = require('lodash');
var AddRecipeCard = require('./addRecipeCard.jsx');
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
    var recipeCards = [<AddRecipeCard key="ADD_RECIPE" />];
    
    _.forOwn(recipes, function(recipe) {
      var name = recipe.displayName;
      var ingredients = recipe.recipe;
      recipeCards.push(<RecipeCard key={"_" + name} name={name} ingredients={ingredients} />);
    });
  
    return (
      <ListGroup className="recipe-list">
        {recipeCards}
      </ListGroup>
    );
  }
});

module.exports = RecipeList;

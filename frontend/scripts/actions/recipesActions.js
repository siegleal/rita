'use strict';

var alt = require('../alt');
var recipesClient = require('../clients/recipesClient');

class RecipesActions {
  getRecipesSuccess(recipes) {
    this.dispatch(recipes);
  }
  
  getRecipesFail(error) {
    this.dispatch(error);
  }
  
  getRecipes() {
    this.dispatch();
    recipesClient.getRecipes()
      .then(this.actions.getRecipesSuccess)
      .catch(this.actions.getRecipesFail);
  }
}

module.exports = alt.createActions(RecipesActions);

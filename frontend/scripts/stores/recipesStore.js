'use strict';

var alt = require('../alt');

var RecipesActions = require('../actions/recipesActions');

class RecipesStore {
  constructor() {
    this.bindListeners({
      updateRecipes: RecipesActions.GET_RECIPES_SUCCESS
    });

    this.state = {
      recipes: []
    };
  }

  updateRecipes(recipes) {
    this.setState({ recipes: recipes });
  }
}

module.exports = alt.createStore(RecipesStore, 'RecipesStore');

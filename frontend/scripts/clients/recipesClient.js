var $ = require('jquery');

module.exports = {
  getRecipes: function() {
    return new Promise(function(resolve, reject) {
      $.ajax('http://localhost:3000/recipes').done(resolve);
    });
  }
};

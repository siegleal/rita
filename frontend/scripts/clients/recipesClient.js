var $ = require('jquery');

module.exports = {
  getRecipes: function() {
    return new Promise(function(resolve, reject) {
      $.ajax('http://192.168.1.100:3000/recipes').done(resolve);
    });
  }
};

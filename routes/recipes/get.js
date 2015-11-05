var recipes = require('../../recipes');

module.exports = function(req, res) {
  res.json(recipes);
};

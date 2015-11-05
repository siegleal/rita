var fs = require('fs');

module.exports = function(req, res, next) {
  fs.readFile('data/recipes.json', function(err, data){
    if (err) return next(err);
      var parsed = JSON.parse(data);
       res.json(parsed);
    });
};

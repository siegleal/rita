var fs = require('fs');
var filepath = 'data/recipes.json';
var _ = require('lodash');

module.exports = function(req, res, next) {
    //get the body data
    var drinkData = req.body;
    console.log(drinkData);
    
    //read the current data
  fs.readFile(filepath, function(err, data){
    if (err) return next(err);
      var parsed = JSON.parse(data);
       _.assign(parsed, drinkData);
       fs.writeFile(filepath, JSON.stringify(parsed), function(err){
         if (err) return next(err);
         res.json(parsed);
       })
    });
    
};
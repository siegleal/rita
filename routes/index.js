var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.get('/lights', function(req, res, next) {
  res.render('index');
});

router.post('/setcolor', function(req, res, next) {
  var ip = req.body.ip;
  var color = req.body.color.slice(1);
  var options = { args: [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6), ip] };
  PythonShell.run('C:\\Users\\Luke\\Documents\\GitHub\\rita\\python_scripts\\arduinoEthernet.py', options, function(err, results) {
      if(err) {
          return res.json(err);
      }
    
      res.send();
  });
});

router.get('/', function(req, res, next) {
  res.render('drinks');
});

router.get('/getdrinks', function (req, res, next) {

    var drink1 = { index: 0, name:"Whiskey" };
    var drink2 = { index: 1, name:"Vodka" };
    var drink3 = { index: 2, name:"Gin" };

    var drinks = {
        drinks: [drink1, drink2, drink3]
    };

    res.send(drinks);
});

router.post('/order', function(req, res, next) {

  console.log("Order posted");
  console.log(req.body);
   
});

router.post('/createRecipe', function (req, res, next) {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log("connection open");
    });

    var recipeSchema = mongoose.Schema({
        recipeName: String,
        ingredients: Array
    });

    var Recipe = mongoose.model('Recipe', recipeSchema);

    var rec = new Recipe({ recipeName: req.body.name, ingredients: req.body.drinks });
    console.log(rec.recipeName);

    rec.save(function (err, rec) {
        if (err) return console.error(err);
        console.log("saveed!");
    });

    Recipe.find(function (err, recipes) {
        if (err) return console.error(err);
        console.log(recipes);
    })

    console.log("Recipe posted");
    console.log(req.body);

});

module.exports = router;
var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var settingsFileName = 'settings.json';

router.get('/lights', function(req, res, next) {
  res.render('index');
});

router.post('/setcolor', function(req, res, next) {
  var ip = req.body.ip;
  var color = req.body.color.slice(1);

  var options = { 
    scriptPath: '/home/pi/rita/python_scripts',
    args: [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6), ip] 
  };
  PythonShell.run('arduinoEthernet.py', options, function(err, results) {
    if(err) {
      return res.json(err);
    }
      res.send();
  });
});

router.get('/', function(req, res, next) {
  res.render('drinks');
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

router.post('/settings', function (req, res, next) {

    console.log("Settings posted");
    console.log(JSON.stringify(req.body.data, null, '\t'));

    var fs = require('fs');
    fs.writeFile(settingsFileName, JSON.stringify(req.body.data, null, '\t'), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + settingsFileName);
        }
    });

});

router.get('/settings', function (req, res, next) {

    console.log("Reading Settings");
    var fs = require('fs');
    var settings = JSON.parse(fs.readFileSync(settingsFileName, 'utf8'));

    console.log(settings);

    res.send(settings);

});


module.exports = router;

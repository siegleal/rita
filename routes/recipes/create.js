var mongoose = require('mongoose');

module.exports = function (req, res) {
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
};

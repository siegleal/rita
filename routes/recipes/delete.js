var fs = require('fs');
var filepath = 'data/recipes.json';

module.exports = function (req, res, next) {

    var keyOfRecipeToDelete = req.params.id;

    // Read the current recipes
    fs.readFile(filepath, function (err, data) {
        if (err) return next(err);

        var currentRecipes = JSON.parse(data);

        // Delete the recipe and write back to json file.
        delete currentRecipes[keyOfRecipeToDelete];

        fs.writeFile(filepath, JSON.stringify(currentRecipes), function (err) {
            if (err) return next(err);

            // Return new recipes.
            res.json(currentRecipes);
        })
    });
};
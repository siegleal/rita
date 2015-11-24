var fs = require('fs');
var filepath = 'data/recipes.json';

module.exports = function (req, res, next) {

    var keyOfRecipeToUpdate = req.params.id;
    var newRecipe = req.body;

    // Read the current recipes
    fs.readFile(filepath, function (err, data) {
        if (err) return next(err);

        var currentRecipes = JSON.parse(data);

        // Update the recipe and write back to json file.
        currentRecipes[keyOfRecipeToUpdate] = newRecipe;

        fs.writeFile(filepath, JSON.stringify(currentRecipes), function (err) {
            if (err) return next(err);

            // Return new recipes.
            res.json(currentRecipes);
        })
    });
};
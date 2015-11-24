var fs = require('fs');
var _ = require('lodash');
var PythonShell = require('python-shell');
var ip = "192.168.1.138"

module.exports = function (req, res, next) {

    var settings = JSON.parse(fs.readFileSync('data/settings.json', 'utf8'));

    var orderData = req.body;
    console.log("Processing order....");
    console.log(orderData);

    _.forOwn(orderData.recipe.recipe, function (value, key) {

        var ingredientPosition = settings[key].position;
        var numberOfParts = value;
        
        console.log(key + " at position " + ingredientPosition);
        console.log("Needs " + numberOfParts + " parts");

        for (var i=0; i < numberOfParts; i++) {
            var options = {
                scriptPath: '/home/pi/rita/python_scripts',
                args: [ingredientPosition, ip]
            };

            PythonShell.run('rotateAndPourThree.py', options, function (err, results) {
                if (err) {
                    console.log("Error calling python script");
                    console.log(err);
                }
            });
        }
    });

    console.log("DONE with order....");

    res.json(req.body);
};
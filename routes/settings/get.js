var settingsFileName = 'settings.json';

module.exports = function (req, res) {
  
  console.log("Reading Settings");
  var fs = require('fs');
  var settings = JSON.parse(fs.readFileSync(settingsFileName, 'utf8'));

  console.log(settings);

  res.send(settings);
};
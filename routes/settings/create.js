var settingsFileName = 'settings.json';

module.exports = function (req, res) {
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
}
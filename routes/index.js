var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
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

module.exports = router;

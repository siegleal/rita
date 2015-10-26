var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setcolor', function(req, res, next) {
  var color = req.body.color.slice(1);
  var options = { args: [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)] };
  PythonShell.run('C:\\Users\\Andrew\\drank\\test.py', options, function(err, results) {
    if(err) {
      return res.json(err);
    }
    
    res.json({
      ass: results[0]
    });
  });
});

module.exports = router;

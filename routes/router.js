var express = require('express');
var router = express.Router();
var index = require('./index');
var lights = require('./lights');
var setColor = require('./setColor');
var postOrder = require('./orders/post');
var createSettings = require('./settings/create');
var getSettings = require('./settings/get');
var getRecipes = require('./recipes/get');
var postRecipes = require('./recipes/post');
var putRecipes = require('./recipes/put');
var deleteRecipes = require('./recipes/delete');


router.get('/', index);
router.get('/lights', lights);
router.post('/setcolor', setColor);
router.post('/orders', postOrder);
router.post('/settings', createSettings);
router.get('/settings', getSettings);
router.get('/recipes', getRecipes); //read
router.post('/recipes', postRecipes); //create
router.put('/recipes/:id', putRecipes); //update
router.delete('/recipes/:id', deleteRecipes); //delete

module.exports = router;
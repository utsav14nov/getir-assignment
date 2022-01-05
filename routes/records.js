const {INCORRECT_ROUTE} = require('../configs/responses');
var express = require('express');
var router = express.Router();

var recordsController = require('./../controllers/RecordsController')

// Not a valid route 
router.get('/', function(req, res, next) {
	return res.status(400).json(INCORRECT_ROUTE);
});

// Not a valid route 
router.post('/', function(req, res, next) {
	return res.status(400).json(INCORRECT_ROUTE);
});

// Valid routes
router.post('/fetch', recordsController.fetch);

module.exports = router;
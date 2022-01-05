var express = require('express');
var router = express.Router();

var recordsController = require('./../controllers/RecordsController')

router.get('/', function(req, res, next) {
	return res.status(400).json({ 
  	code: 400,
  	msg: 'Incorrect route ( Use /records/fetch)' 
  });
});

router.post('/fetch', recordsController.fetch);

module.exports = router;
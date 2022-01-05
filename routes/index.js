var express = require('express');
var router = express.Router();

var recordsRouter = require('./records');

router.get('/', function(req, res, next) {
  return res.status(400).json({ 
  	code: 400,
  	msg: 'Incorrect route' 
  });
});

router.use('/records', recordsRouter);

module.exports = router;
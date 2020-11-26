var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('products/0/1');
  //res.render('index', { title: 'Express', category: req.params.category || 0, page: req.params.page || 1 });
});

module.exports = router;

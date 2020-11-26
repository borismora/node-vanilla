var express = require('express');
var router = express.Router();
const ProductController = require("../controllers/ProductController")

/* POST products listing. */
router.post('/', ProductController.getProducts);

router.get('/:category/:page', function (req, res, next) {
    res.render('index', { title: 'Express', category: req.params.category || 0, page: req.params.page || 1 });
});

module.exports = router;
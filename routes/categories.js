var express = require('express');
var router = express.Router();
const CategoryController = require("../controllers/CategoryController")

/* GET categories listing. */
router.get('/', CategoryController.getCategories);

module.exports = router;

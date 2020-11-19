const Category = require("../models/Category");

module.exports = {
    getCategories: function (req, res) {
        Category.get(req.con, function (err, rows) {
            if (err) {
                console.error('Ha ocurrido un error', err);
                return;
            }
            res.status(200).send(rows)
        })
    },
}
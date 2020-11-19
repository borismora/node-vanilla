const Product = require("../models/Product");

module.exports = {
    getProducts: function (req, res) {
        Product.get(req.con, req.body.category, req.body.wanted, req.body.order, function (err, products) {
            if (err) {
                console.error('Ha ocurrido un error', err);
                return;
            }

            try {
                var numPerPage = req.body.npp || 1;
                var page = req.body.page || 1;
                var numRows = products.length - 1;
                var numPages = Math.ceil(numRows / numPerPage);

                var responsePayload = {
                    products: products.slice((page - 1) * numPerPage, page * numPerPage)
                };

                //setup pagination parameters
                if (page <= numPages) {
                    responsePayload.pagination = {
                        last_page: numPages,
                        current: page,
                        perPage: numPerPage,
                        previous: page > 0 ? page - 1 : undefined,
                        next: page < numPages - 1 ? page + 1 : undefined
                    }
                }
                else responsePayload.pagination = {
                    err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
                }

                //console.log(responsePayload)
                res.status(200).send(responsePayload)
            } catch (error) {
                console.log(error)
            }
        })
    },
}
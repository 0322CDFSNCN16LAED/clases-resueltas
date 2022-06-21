const db = require("../models/products");

module.exports = (req, res, next) => {
    const product = db.getOne(req.params.id);

    if (product) {
        next();
    } else {
        res.redirect("/product-not-found");
    }
};

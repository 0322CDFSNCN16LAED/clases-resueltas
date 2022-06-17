const db = require("../data/db");

module.exports = (req, res, next) => {
    const product = db.getOne(req.params.id);

    if (product) {
        next();
    } else {
        res.redirect("/product-not-found");
    }
};

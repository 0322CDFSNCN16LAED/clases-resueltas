const path = require("path");

const dbUtils = require("./db-utils");

const productsFilePath = path.join(__dirname, "../data/products-db.json");

module.exports = {
    getAll: function () {
        return dbUtils.readJsonDB(productsFilePath);
    },
    saveAll: function (products) {
        dbUtils.writeJsonDB(productsFilePath, products);
    },
    getOne: function (id) {
        return this.getAll().find((p) => p.id == id);
    },
};

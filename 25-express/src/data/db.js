const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./products-db.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
    saveAll: function (products) {
        const fileTxt = JSON.stringify(products, null, 4);

        fs.writeFileSync(productsFilePath, fileTxt);
    },
    getOne: function (id) {
        return this.getAll().find((p) => p.id == id);
    },
};

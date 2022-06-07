const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./productsDataBase.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
};

const path = require("path");

const dbUtils = require("./db-utils");

const userFilePath = path.join(__dirname, "../data/users-db.json");

module.exports = {
    getAll: function () {
        return dbUtils.readJsonDB(userFilePath);
    },
    saveAll: function (users) {
        dbUtils.writeJsonDB(userFilePath, users);
    },
    getOne: function (id) {
        return this.getAll().find((p) => p.id == id);
    },
    getNewId: function () {
        const users = this.getAll();
        return users.length > 0 ? users[users.length - 1].id + 1 : 1;
    },
    findByEmail: function (email) {
        return this.getAll().find((p) => p.email == email);
    },
};

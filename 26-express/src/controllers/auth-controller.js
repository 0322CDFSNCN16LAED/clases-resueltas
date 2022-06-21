const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersDB = require("../models/users");

module.exports = {
    showRegister: (req, res) => {
        res.render("register");
    },
    showLogin: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("login", {
                errors: errors.mapped(),
            });
            return;
        }

        const newUser = {
            ...req.body,
            id: usersDB.getNewId(),
            password: bcrypt.hashSync(req.body.password, 10),
        };
        delete newUser.rePassword;

        const users = usersDB.getAll();
        users.push(newUser);
        usersDB.saveAll(users);

        res.redirect("/login");
    },
};

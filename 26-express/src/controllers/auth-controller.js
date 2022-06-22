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
    login: (req, res) => {
        // magia
        const { email, password } = req.body;

        const user = usersDB.findByEmail(email);

        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.loggedUser = user;

            res.redirect("/");

            return;
        }

        res.render("login", {
            error: true,
        });
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

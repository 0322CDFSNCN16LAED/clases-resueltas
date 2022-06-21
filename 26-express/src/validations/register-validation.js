const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength(5),
    body("rePassword").custom((value, extra) => {
        if (value !== extra.req.body.password) {
            throw new Error("Password confirmation does not match password");
        }

        // Indicates the success of this synchronous custom validator
        return true;
    }),
];

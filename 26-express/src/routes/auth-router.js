const express = require("express");

const authController = require("../controllers/auth-controller");
const registerValidation = require("../validations/register-validation");

const router = express.Router();

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/register", authController.showRegister);
router.post("/register", registerValidation, authController.register);

module.exports = router;

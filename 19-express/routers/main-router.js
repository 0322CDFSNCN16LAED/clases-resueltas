const path = require("path");
const express = require("express");

const mainController = require("../controllers/main-controller");
const router = express.Router();

// Navegador:
// localhost:3000/
router.get("/", mainController.home);

// localhost:3000/about
router.get("/about", mainController.about);

module.exports = router;

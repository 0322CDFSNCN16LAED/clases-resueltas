const express = require("express");
const productsRouter = require("./products-router");
const authRouter = require("./auth-router");
const mainController = require("../controllers/main-controller");

const router = express.Router();

router.get("/", mainController.index);
router.get("/search", mainController.search);

router.use(authRouter);
router.use("/products", productsRouter);

module.exports = router;

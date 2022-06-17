const express = require("express");
const productsRouter = require("./products-router");
const mainController = require("../controllers/main-controller");
const userLogs = require("../middlewares/user-logs");

const router = express.Router();

router.get("/", mainController.index);
router.get("/search", mainController.search);

router.use("/products", productsRouter);

module.exports = router;

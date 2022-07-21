const express = require("express");
const router = express.Router();

const genresRoutes = require("./genresRoutes");

router.use("/genres", genresRoutes);

module.exports = router;

const express = require("express");
const genresController = require("../../controllers/api/genresController");
const router = express.Router();

// /api/genres
router.get("/", genresController.list);
router.get("/:id", genresController.detail);
router.put("/:id", genresController.update);

module.exports = router;

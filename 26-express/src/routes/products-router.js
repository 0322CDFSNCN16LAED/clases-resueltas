const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");
const validateProductId = require("../middlewares/validate-product-id");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", validateProductId, productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;

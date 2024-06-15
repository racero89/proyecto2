const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/productController.js");

router.post("/create", ProductsController.create);
router.get("/", ProductsController.getAll);
router.get("/id/:_id", ProductsController.getByID);

router.put("/id/:_id", ProductsController.updateByName);
router.delete("/id/:_id", ProductsController.deleteProduct);

module.exports = router;

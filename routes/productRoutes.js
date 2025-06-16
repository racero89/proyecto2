const express = require("express");
const router = express.Router();
const { showProducts } = require("../controllers/productController");
router.get("/", showProducts);
router.get("/products");
router.get("/dashboard/:productId/edit");
router.get("/dashboard/new");
router.post("/products/:productId");
router.put("/dashboard");
router.delete("/dashboard/:productId/delete");

module.exports = router;

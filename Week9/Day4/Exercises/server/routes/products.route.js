const express = require("express");

const {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProduct,
  searchProducts,
  createProducts,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", searchProducts);
router.get("/:id", getProductById);

router.delete("/:id", deleteProductById);
router.put("/:id", updateProduct);
router.post("/", createProducts);

module.exports = router;

const express = require("express");

const {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProduct,
  searchProducts,
  createProducts,
  sendHello,
  response
} = require("../controllers/products.controller.js");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", searchProducts);
router.get("/:id", getProductById);

router.delete("/:id", deleteProductById);
router.put("/:id", updateProduct);
router.post("/", createProducts);
router.get("/api/hello", sendHello)
router.post("/api/world",response)

module.exports = router;

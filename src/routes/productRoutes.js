const express = require("express");
const { body } = require("express-validator");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Validaciones de entrada
const validateProduct = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("price").isNumeric().withMessage("El precio debe ser un número"),
];

router.post("/", validateProduct, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

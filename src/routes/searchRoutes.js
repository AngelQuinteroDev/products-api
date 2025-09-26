// src/routes/searchRoutes.js
const express = require("express");
const router = express.Router();
const { searchProducts } = require("../controllers/searchController");


/**
 * @swagger
 * tags:
 *   name: Search
 *   description: Search products with filters
 */

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search products with filters
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Partial name match
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: stock
 *         schema:
 *           type: integer
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Filtered products
 */

// GET /api/search
router.get("/", searchProducts);

module.exports = router;

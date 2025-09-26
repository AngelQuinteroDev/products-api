const Product = require("../models/product");


function escapeRegex(text = "") {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


exports.searchProducts = async (req, res, next) => {
  try {
    const { category, stock, minPrice, maxPrice, name } = req.query;

    const query = {};

    // Filtros dinámicos
    if (category) query.category = category;
    if (stock !== undefined) query.stock = Number(stock);
    if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

    // Búsqueda por nombre (parcial, insensible a mayúsculas/minúsculas)
    if (name && name.trim().length > 0) {
      const safe = escapeRegex(name.trim());
      query.name = { $regex: safe, $options: "i" }; // partial match, case-insensitive
    }
    const products = await Product.find(query);

    res.json({
      total: products.length,
      filters: req.query,
      products,
    });
  } catch (error) {
    next(error);
  }
};

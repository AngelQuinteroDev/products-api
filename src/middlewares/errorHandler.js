const { validationResult } = require("express-validator");

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error caught:", err); // For debugging in console

  // 1. Validation errors with express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: "Validation Error", 
      errors: errors.array() 
    });
  }

  //  2. Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Database validation error",
      errors: Object.values(err.errors).map(e => e.message),
    });
  }

  // 3. Error if a Mongo ID is not valid
  if (err.name === "CastError") {
    return res.status(400).json({
      message: `Invalid ID: ${err.value}`,
    });
  }

  // 4. Duplicates in Mongo (e.g., unique fields)
  if (err.code === 11000) {
    return res.status(409).json({
      message: "A record with that unique value already exists",
      duplicate: err.keyValue,
    });
  }

  // 5. By default, internal error
  res.status(err.statusCode || 500).json({
    message: err.message || "Server internal error",
  });
};

module.exports = errorHandler;

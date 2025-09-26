const { validationResult } = require("express-validator");

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error capturado:", err); // Para debug en consola

  // 1. Errores de validación con express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: "Error de validación", 
      errors: errors.array() 
    });
  }

  // 2. Errores de validación de Mongoose
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Error de validación en la base de datos",
      errors: Object.values(err.errors).map(e => e.message),
    });
  }

  // 3. Error si un ID de Mongo no es válido
  if (err.name === "CastError") {
    return res.status(400).json({
      message: `ID inválido: ${err.value}`,
    });
  }

  // 4. Duplicados en Mongo (ej: unique fields)
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Ya existe un registro con ese valor único",
      duplicate: err.keyValue,
    });
  }

  // 5. Por defecto, error interno
  res.status(err.statusCode || 500).json({
    message: err.message || "Error interno del servidor",
  });
};

module.exports = errorHandler;

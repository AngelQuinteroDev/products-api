const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
const app = express();

// Conexión a la DB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Rutas
app.use("/api/products", productRoutes);

// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`)
);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const searchRoutes = require("./routes/searchRoutes");
const errorHandler = require("./middlewares/errorHandler");
const setupSwagger = require("./config/swagger");

dotenv.config();
const app = express();

// Connection to the DB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Endpoints Routes
app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);

// Error handling
app.use(errorHandler);

setupSwagger(app);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running in http://localhost:${process.env.PORT}`)
);

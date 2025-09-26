const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "The price is mandatory"],
      min: [0, "The price cannot be negative"],
    },
    category: {
      type: String,
      enum: ["Electronics", "Books", "Clothing", "Food"],
      default: "Misc",
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "The stock cannot be negative"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

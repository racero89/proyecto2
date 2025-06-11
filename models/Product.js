// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    descripcion: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      trim: true,
    },
    imagen: {
      type: String,
      required: [true, "La URL de la imagen es obligatoria"],
    },
    categoria: {
      type: String,
      enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
      required: [true, "La categoría es obligatoria"],
    },
    talla: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL"],
      required: [true, "La talla es obligatoria"],
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [0, "El precio no puede ser negativo"],
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

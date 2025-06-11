const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes);

// Conexión a MongoDB y servidor
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => console.log("Servidor corriendo en puerto ${PORT}"));
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

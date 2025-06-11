const express = require("express");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

const productRoutes = require("./routes/productRoutes");

app.use("/", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

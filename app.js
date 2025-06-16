const express = require("express");
const app = express();
const port = 5050;

const {
  showProducts,
  showProductById,
} = require("./controllers/productController");

app.get("/", showProducts);
app.get("/product/:id", showProductById);

app.listen(port, () => {
  console.log("Servidor activo en http://localhost:${port}");
});

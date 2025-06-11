// controllers/productController.js
const Product = require("../models/Product");

const showProducts = async (req, res) => {
  const products = await Product.find();
  const html = baseHtml(
    getNavBar(),
    getProductCards(products, false) // false = no dashboard
  );
  res.send(html);
};

const showProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const html = baseHtml(getNavBar(), getProductCards([product], false));
  res.send(html);
};

const showDashboard = async (req, res) => {
  const products = await Product.find();
  const html = baseHtml(
    getNavBar(true),
    getProductCards(products, true) // true = dashboard
  );
  res.send(html);
};

const showNewProduct = (req, res) => {
  const html = baseHtml(
    getNavBar(true),
    `
    <h2>Nuevo Producto</h2>
    <form action="/dashboard" method="POST">
      <!-- Inputs para nombre, descripcion, imagen, etc. -->
      <input type="text" name="nombre" placeholder="Nombre" required>
      <input type="text" name="descripcion" placeholder="Descripción" required>
      <input type="url" name="imagen" placeholder="URL imagen" required>
      <select name="categoria" required>
        <option value="">Categoría</option>
        <option value="Camisetas">Camisetas</option>
        <option value="Pantalones">Pantalones</option>
        <option value="Zapatos">Zapatos</option>
        <option value="Accesorios">Accesorios</option>
      </select>
      <select name="talla" required>
        <option value="">Talla</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <input type="number" name="precio" placeholder="Precio" required>
      <button type="submit">Crear</button>
    </form>
  `
  );
  res.send(html);
};

const createProduct = async (req, res) => {
  await Product.create(req.body);
  res.redirect("/dashboard");
};

const showEditProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const html = baseHtml(
    getNavBar(true),
    `
    <h2>Editar Producto</h2>
    <form action="/dashboard/${product._id}?_method=PUT" method="POST">
      <input type="text" name="nombre" value="${product.nombre}" required>
      <input type="text" name="descripcion" value="${
        product.descripcion
      }" required>
      <input type="url" name="imagen" value="${product.imagen}" required>
      <select name="categoria" required>
        ${["Camisetas", "Pantalones", "Zapatos", "Accesorios"]
          .map(
            (opt) => `
          <option value="${opt}" ${
              product.categoria === opt ? "selected" : ""
            }>${opt}</option>
        `
          )
          .join("")}
      </select>
      <select name="talla" required>
        ${["XS", "S", "M", "L", "XL"]
          .map(
            (opt) => `
          <option value="${opt}" ${
              product.talla === opt ? "selected" : ""
            }>${opt}</option>
        `
          )
          .join("")}
      </select>
      <input type="number" name="precio" value="${product.precio}" required>
      <button type="submit">Actualizar</button>
    </form>
  `
  );
  res.send(html);
};

const updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.productId, req.body);
  res.redirect("/dashboard");
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.redirect("/dashboard");
};

module.exports = {
  showProducts,
  showProductById,
  showDashboard,
  showNewProduct,
  createProduct,
  showEditProduct,
  updateProduct,
  deleteProduct,
};

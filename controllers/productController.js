let productos = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: 20,
    description: "Camiseta de algodón 100%",
    image: "https://picsum.photos/200?random=1",
    category: "camiseta",
    talla: "M",
  },
  {
    id: 2,
    name: "Pantalón Chino",
    price: 35,
    description: "Pantalón elegante para uso diario",
    image: "https://picsum.photos/200?random=2",
    category: "pantalon",
    talla: "L",
  },
  {
    id: 3,
    name: "Zapatillas Urbanas",
    price: 50,
    description: "Zapatillas cómodas para caminar",
    image: "https://picsum.photos/200?random=3",
    category: "zapatillas",
    talla: "42",
  },
  {
    id: 4,
    name: "Gorra Estilo",
    price: 15,
    description: "Accesorio de moda con estilo urbano",
    image: "https://picsum.photos/200?random=4",
    category: "accesorios",
    talla: "Única",
  },
];

const showProducts = (req, res) => {
  const category = req.query.category;
  const filteredProducts = category
    ? productos.filter((p) => p.category === category)
    : productos;

  let productHTML = filteredProducts
    .map(
      (p) => `
        <div>
          <h3>${p.name}</h3>
          <img src="${p.image}" alt="${p.name}" style="width:150px;">
          <p><strong>Precio:</strong> $${p.price}</p>
          <p><a href="/product/${p.id}">Ver más</a></p>
        </div>
      `
    )
    .join("");

  const html = `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TiendaOnly</title>
  </head>
  <body>
    <h1>TiendaOnly</h1>
    <nav>
      <ul>
        <li><a href="/?category=camiseta">Camisetas</a></li>
        <li><a href="/?category=pantalon">Pantalones</a></li>
        <li><a href="/?category=zapatillas">Zapatillas</a></li>
        <li><a href="/?category=accesorios">Accesorios</a></li>
      </ul>
    </nav>
    <div>${productHTML}</div>
  </body>
  </html>`;

  res.send(html);
};

const showProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productos.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send("<h1>Producto no encontrado</h1>");
  }

  const html = `
    <html>
    <head><title>${product.name}</title></head>
    <body>
      <h1>${product.name}</h1>
      <img src="${product.image}" alt="${product.name}" style="width:200px;">
      <p><strong>Precio:</strong> $${product.price}</p>
      <p>${product.description}</p>
      <p><strong>Talla:</strong> ${product.talla}</p>
      <a href="/">Volver a la tienda</a>
    </body>
    </html>
  `;
  res.send(html);
};

module.exports = {
  showProducts,
  showProductById,
};

document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {
      nombre: "Camiseta Básica",
      categoria: "Camisetas",
      talla: ["S", "M", "L"],
      precio: 19.99,
      descripcion: "Camiseta cómoda de algodón",
      imagen: "",
    },
    {
      nombre: "Jeans Slim",
      categoria: "Pantalones",
      talla: ["M", "L"],
      precio: 39.99,
      descripcion: "Pantalón moderno de mezclilla",
      imagen: "",
    },
    {
      nombre: "Zapatillas Running",
      categoria: "Zapatos",
      talla: ["40", "41", "42"],
      precio: 59.99,
      descripcion: "Zapatillas cómodas para correr",
      imagen: "",
    },
    {
      nombre: "Gorra Estilo",
      categoria: "Accesorios",
      talla: ["Única"],
      precio: 14.99,
      descripcion: "Ideal para el sol",
      imagen: "",
    },
  ];

  const secciones = document.querySelectorAll(".productos");

  secciones.forEach((seccion) => {
    const categoria = seccion.getAttribute("data-categoria");
    const productosFiltrados = productos.filter(
      (p) => p.categoria === categoria
    );

    productosFiltrados.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("producto");
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <label>Talla:
          <select>
            ${producto.talla
              .map((t) => `<option value="${t}">${t}</option>`)
              .join("")}
          </select>
        </label>
      `;
      seccion.appendChild(card);
    });
  });
});

// =======================
// Función para almacenar carrito en LocalStorage
// =======================
function almacenarCarrito() {
  carritoFrutas.length > 0 &&
    localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
}

// =======================
// Función para recuperar carrito desde LocalStorage
// =======================
function recuperarCarrito() {
  return JSON.parse(localStorage.getItem("carritoFrutas")) || [];
}

// =======================
// Array carrito (inicializado desde LocalStorage)
// =======================
const carritoFrutas = recuperarCarrito();

// =======================
// Función agregar al carrito
// =======================
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  if (producto) {
    carritoFrutas.push(producto);
    almacenarCarrito();
  }
}


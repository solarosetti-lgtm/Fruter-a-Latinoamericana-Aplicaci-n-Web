console.log("🔥 checkout.js cargado");
// =======================
// Conexión con el tbody
// =======================
const tbody = document.querySelector("tbody");

// =======================
// Función fila tabla
// =======================
function retornarTablaHTML(producto) {
  return `
    <tr>
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>
        <img src="${producto.imagen}" width="60">
      </td>
    </tr>
  `;
}

// =======================
// Cargar carrito en tabla
// =======================
function cargarTablaCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carritoFrutas")) || [];

  tbody.innerHTML = "";

  carrito.forEach(producto => {
    tbody.innerHTML += retornarTablaHTML(producto);
  });
}

// =======================
// Botón COMPRAR
// =======================
const btnComprar = document.getElementById("btnComprar");

btnComprar.addEventListener("click", () => {
  alert("¡Gracias por tu compra! 🍎🍌🍊");

  localStorage.removeItem("carritoFrutas");
  tbody.innerHTML = "";
});

// =======================
// Inicial
// =======================
cargarTablaCarrito();



// =======================
// Array productos vacío
// =======================
const productos = [];

// =======================
// URL al archivo JSON
// =======================
const URL = "./productos.json";

// =======================
// Función fetch para obtener productos
// =======================
function obtenerProductos() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      productos.push(...data);
      cargarProductos(productos);
    })
    .catch(error => console.error("Error al cargar productos:", error));
}

// =======================
// Función que retorna la Card HTML
// =======================
function retornarCardHTML(producto) {
  return `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button class="button-add" id="${producto.id}">
        Agregar al carrito
      </button>
    </div>
  `;
}

// =======================
// Activar botones
// =======================
function activarClickEnBotones() {
  const botones = document.querySelectorAll(".button-add");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      agregarAlCarrito(Number(boton.id));
    });
  });
}

// =======================
// Cargar productos en DOM
// =======================
function cargarProductos(array) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  array.forEach(producto => {
    container.innerHTML += retornarCardHTML(producto);
  });

  activarClickEnBotones();
}

// =======================
// Llamada principal
// =======================
obtenerProductos();







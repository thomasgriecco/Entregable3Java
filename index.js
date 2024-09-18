const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const buscarPizzaBtn = document.getElementById("buscarPizza");
const resultado = document.getElementById("resultado");

buscarPizzaBtn.addEventListener("click", () => {
 
  const pizzaId = Number(document.getElementById("pizzaId").value);
 
  resultado.innerHTML = "";

  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === pizzaId);

  if (pizzaEncontrada) {
    
    const card = `
      <div class="card">
        <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
        <h3>${pizzaEncontrada.nombre}</h3>
        <p>Precio: $${pizzaEncontrada.precio}</p>
      </div>
    `;
    resultado.innerHTML = card;
  } else {
    resultado.innerHTML = `<p class="error">No se encontró ninguna pizza con ese ID</p>`;
  }
});

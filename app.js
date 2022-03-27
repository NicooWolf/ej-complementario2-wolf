function saludar(nombre) {
  nombre = prompt("Ingrese su nombre por favor");
  return alert(`Bienvenido a la Parrilla Nueva Adelina ${nombre}!`);
}
function carrito() {
  let entrada = prompt(
    "Ingresa el producto que desees agregar a tu lista por favor. Ingresa 'ESC' para salir"
  ).toUpperCase();
  const productos = [];
  while (entrada != "ESC") {
    productos.push(entrada);
    entrada = prompt(
      "Ingresa otro producto si asi lo deseas, o 'ESC' para salir"
    ).toUpperCase();
  }
  document.write("Su carrito contiene lo siguiente: <br>");
  for (let i = 0; i < productos.length; i++) {
    document.write(productos[i], "<br>");
  }
}

saludar();
carrito();

// let arr = [6, 5, 0, 4, 3, 2, 0, 1, 0];
// function revertir() {
//   return arr.reverse();
// }
// document.write(revertir(), "<br>");
// let arro = arr.filter(function (array) {
//   return array !== 0;
// });

// document.write(arro);

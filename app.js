let nombre = prompt("Ingrese su nombre por favor");
alert(`Bienvenido ${nombre}!`);
let valor1 = Number(prompt("Ingrese el primer numero"));
let valor2 = Number(prompt("Ingrese el segundo numero"));
let valor3 = Number(prompt("Ingrese el tercer numero"));

function promediar() {
  let res = (valor1 + valor2 + valor3) / 3;
  if (res > 18) {
    document.write(`El promedio es ${res}, y es de una persona mayor de edad.`);
  } else
    document.write(`El promedio es ${res}, y es de una persona menor de edad.`);
  while (res > 18) {
    res++;
    document.write(`<br> Sumandole 1, su promedio se convierte en: ${res}`);
    break;
  }
}

promediar();

// Pedir al usuario que ingrese los dos números
let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));

// Verificar si los números son iguales
if (num1 === num2) {
  let suma = num1 + num2;
  console.log("Los valores son iguales. La suma es " + suma);
}

// Verificar si el número1 es mayor que el número2
if (num1 > num2) {
  let division = num1 / num2;
  console.log("El número1 es mayor. La división es " + division);
}

// Verificar si el número1 es menor que el número2
if (num1 < num2) {
  let multiplicacion = num1 * num2;
  console.log("El número1 es menor. La multiplicación es " + multiplicacion);
}

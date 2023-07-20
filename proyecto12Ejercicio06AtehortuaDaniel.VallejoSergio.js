// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa de computador, que lee un número e imprime su factorial, siendo:
// N ! = 1 x 2 x 3 x 4 x...N
// N ! = 1 si N = 0
// Solo está definido el factorial para números enteros positivos.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Importamos la biblioteca 'readline' para leer la entrada del usuario
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función flecha para calcular el factorial de un número
const calcularFactorial = (numero) => {
  let resultado = 1; // Inicializamos el resultado a 1

  if (numero < 0) { // Verificamos si el número es negativo
    console.log("Error: No se puede calcular el factorial de un número negativo.");
    return;
  }

  while (numero > 0) { // Iniciamos un bucle que va desde el número dado hasta 1
    resultado *= numero; // Multiplicamos el resultado por el número actual
    numero--; // Decrementamos el número para la siguiente iteración
  }

  return resultado; // Retornamos el resultado
};

rl.question("Ingrese un número: ", (entrada) => {
  const numero = parseInt(entrada); // Convertir la entrada a un número entero
  console.log("El factorial de " + numero + " es: " + calcularFactorial(numero));
  rl.close(); // Cerrar la interfaz de lectura
});

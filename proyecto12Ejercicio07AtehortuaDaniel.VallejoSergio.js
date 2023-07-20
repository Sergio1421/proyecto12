// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - 7.Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N. ;
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 // Importamos la biblioteca 'readline' para leer la entrada del usuario
 // Importamos el módulo readline para manejar la lectura de la entrada del usuario
const readline = require('readline');

// Creamos una interfaz readline para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin, // Configuramos la entrada como la entrada estándar (teclado)
  output: process.stdout // Configuramos la salida como la salida estándar (consola)
});

// Definimos una función flecha llamada factorial que calcula el factorial de un número dado
const factorial = (n) => {
  let result = 1; // Inicializamos el resultado en 1
  while (n > 0) { // Mientras el número sea mayor que 0
    result *= n; // Multiplicamos el resultado por el número actual
    n--; // Decrementamos el número para la siguiente iteración
  }
  return result; // Retornamos el resultado final del factorial
};

// Definimos una función flecha llamada sumFactorials que calcula la suma de los factoriales desde 0 hasta un número dado
const sumFactorials = (n) => {
  let sum = 0; // Inicializamos el acumulador de la suma en 0
  while (n >= 0) { // Mientras el número sea mayor o igual a 0
    sum += factorial(n); // Sumamos el factorial del número actual al acumulador
    n--; // Decrementamos el número para la siguiente iteración
  }
  return sum; // Retornamos la suma final de los factoriales
};

// Usamos la interfaz readline para hacer una pregunta al usuario y manejar su respuesta
rl.question('Ingrese un número entero no negativo: ', (answer) => {
  const n = parseInt(answer); // Convertimos la respuesta en un número entero

  // Verificamos si el número ingresado es NaN (no es un número) o es negativo
  if (Number.isNaN(n) || n < 0) {
    console.log('El número ingresado no es válido.'); // Mostramos un mensaje de error
  } else {
    // Si el número es válido, calculamos la suma de los factoriales
    const result = sumFactorials(n);
    console.log('La suma de los factoriales desde 0 hasta', n, 'es:', result); // Mostramos el resultado en la consola
  }

  rl.close();
});
// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.
// Los números a sumar son:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 y su suma es: 232
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Define la función que calculará la suma de la serie de Fibonacci hasta un límite especificado.
const fibonacciSum = () => {
  let a = 0; // Inicializamos el primer número de Fibonacci
  let b = 1; // Inicializamos el segundo número de Fibonacci

  let sum = 0; // Inicializamos la variable para almacenar la suma acumulada de Fibonacci

  while (a <= 100) { // Ejecutamos el bucle mientras el número actual de Fibonacci sea menor o igual a 100
    console.log("Número actual de Fibonacci:", a); // Imprimimos el número actual de Fibonacci

    sum += a; // Agregamos el número actual de Fibonacci a la suma acumulada

    let temp = a; // Guardamos el valor actual de 'a' en una variable temporal
    a = b; // Actualizamos el valor de 'a' con el valor actual de 'b'
    b = temp + b; // Actualizamos el valor de 'b' sumando el valor anterior de 'a' (almacenado en 'temp') y el valor actual de 'b'
  }

  return sum; // Devolvemos la suma acumulada de Fibonacci
}

const result = fibonacciSum(); // Llamamos a la función para calcular la suma de los números de Fibonacci
console.log("La suma de los elementos de la serie de Fibonacci entre 0 y 100 es:", result); // Imprimimos el resultado de la suma de los números de Fibonacci

// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa de computador  que utilizando ciclos anidados se generen las siguientes parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.)
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var contadorPrimeraColumna = 0; // Inicializamos el contador para la primera columna
var valorSegundaColumna = 1; // Inicializamos el valor para la segunda columna

// Mientras el contador de la primera columna sea menor o igual a 9
while (contadorPrimeraColumna <= 9) {

  var repeticionesSegundaColumna = 0; // Contador para controlar el número de repeticiones en la segunda columna

  // Mientras las repeticiones de la segunda columna sean menores que 2
  while (repeticionesSegundaColumna < 2) {
    console.log(contadorPrimeraColumna + " " + valorSegundaColumna); // Imprimir la pareja de números
    contadorPrimeraColumna++; // Incrementar el contador de la primera columna
    repeticionesSegundaColumna++; // Incrementar el contador de repeticiones de la segunda columna
  }

  valorSegundaColumna++; // Incrementar el valor de la segunda columna después de que se haya impreso dos veces
}

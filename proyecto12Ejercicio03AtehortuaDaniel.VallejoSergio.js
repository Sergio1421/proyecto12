// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa que lee numeros enteros y los imprime alreves.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

/// Importamos el módulo 'prompt-sync'.
const prompt = require('prompt-sync')();

// Preguntamos al usuario que ingrese un número.
let number = prompt('Por favor, ingrese un número entero: ');

// Inicializamos la variable que almacenará el número al revés.
let reversedNumber = '';

// Iniciamos un bucle que se ejecutará mientras haya caracteres en el número.
while (number.length > 0) {
  // Agregamos el último carácter del número al final del número al revés.
  reversedNumber += number[number.length - 1];

  // Eliminamos el último carácter del número.
  number = number.slice(0, -1);
}

// Imprimimos el número al revés.
console.log('El número invertido es:', reversedNumber);


 
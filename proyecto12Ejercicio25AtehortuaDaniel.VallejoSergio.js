// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El programa, calcula el seno(x) con series de Taylor. Pidiendo un numero de terminos y un X.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const readline = require('readline');
//----------------------------------------------------------
const rl = readline.createInterface({ // importamos el readline para crear una interfaz
    input: process.stdin,  // Simula el input del usuario
    output: process.stdout // Simula el output del usuario
});


// Definición de la función factorial como función de flecha
let calcularFactorial = (numero) => {
  let resultado = 1;
  let i = 1;

  while(i <= numero) {
    resultado *= i;
    i++;
  }

  return resultado;
};

// Definición de la función seno como función de flecha
let calcularSeno = (terminos, angulo) => {
  let acumulador = 0.0;
  let i = 0;

  while(i < terminos) {
    let termino = (Math.pow(-1, i) * Math.pow(angulo, 2 * i + 1)) / calcularFactorial(2 * i + 1);
    acumulador += termino;
    i++;
  }

  return acumulador;
};

// Pregunta al usuario el número de términos de la serie de Taylor y el valor del ángulo
rl.question("Este programa calcula el seno de un ángulo utilizando una serie de Taylor.\nIngrese el número de términos de la serie: ", (terminos) => {
  rl.question("Ingrese el valor del ángulo en radianes: ", (angulo) => {
    const resultado = calcularSeno(terminos, angulo); // Llamada a la función calcularSeno con los parámetros proporcionados por el usuario
    console.log("El resultado es " + resultado.toFixed(8)); // Muestra el resultado en la consola
    rl.close(); // Cierra la interfaz readline
  });
});

  
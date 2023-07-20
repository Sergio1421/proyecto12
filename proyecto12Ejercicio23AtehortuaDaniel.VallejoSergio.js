// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El programa, calcula el coseno hiperbolico con series de Taylor. Pidiendo un numero de terminos y un X.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const readline = require('readline');

//----------------------------------------------------------
// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definición de la función factorial usando un ciclo while
const calcularFactorial = (n) => {
  let resultado = 1; // Inicializa el resultado como 1

  while (n > 0) { // Ejecuta el ciclo mientras n sea mayor a 0
    resultado *= n; // Multiplica el resultado por n en cada iteración
    n--; // Decrementa n en 1 en cada iteración
  }

  return resultado; // Retorna el resultado del factorial
};

// Definición de la función coseno hiperbólico usando un ciclo while
const calcularCosenoHiperbolico = (x, terminos) => {
  let acumulador = 1.0; // Inicializa el acumulador como 1.0
  let iteracion = 0; // Inicializa la iteración en 0

  while (iteracion < terminos) { // Ejecuta el ciclo mientras la iteración sea menor a términos
    // Calcula el término en cada iteración y lo añade al acumulador
    let termino = Math.pow(x, 2 * iteracion) / calcularFactorial(2 * iteracion);
    acumulador += termino;

    iteracion++; // Incrementa la iteración en 1 en cada iteración
  }

  return acumulador; // Retorna el valor acumulado
};

// Pregunta al usuario el número de términos de la serie de Taylor
rl.question("Este programa calcula el coseno hiperbólico utilizando una serie de Taylor.\nIngrese el número de términos de la serie: ", (terminos) => {
  // Pregunta al usuario el valor de x
  rl.question("Ingrese el valor de x: ", (x) => {
    // Llamada a la función calcularCosenoHiperbolico con los parámetros proporcionados por el usuario
    const resultado = calcularCosenoHiperbolico(x, terminos);

    // Muestra el resultado en la consola
    console.log("El resultado es " + resultado.toFixed(8));

    // Cierra la interfaz readline
    rl.close();
  });
});

// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El programa calcula los valores de las series de Taylor, pidiendo al usuario un numero de terminos y un X.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 // Definición de la función factorial usando un ciclo while
 
 const readline = require('readline');
 const rl = readline.createInterface({ // importamos el readline para crear una interfaz
    input: process.stdin,  // Simula el input del usuario
    output: process.stdout // Simula el output del usuario
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

// Definición de la función exponencial usando ciclos while
const calcularExponencial = (base, terminos) => {
  let acumulador = 0.0; // Inicializa el acumulador como 0.0
  let iteracion = 0; // Inicializa la iteración en 0

  while (iteracion < terminos) { // Ejecuta el ciclo mientras la iteración sea menor a términos
    // Calcula el término en cada iteración y lo añade al acumulador
    let termino = Math.pow(base, iteracion) / calcularFactorial(iteracion);
    acumulador += termino;
    iteracion++;
  }

  return acumulador; // Retorna el valor acumulado
};

// Pregunta al usuario el número de términos de la serie de Taylor y el valor de x
rl.question("Este programa calcula e^x utilizando una serie de Taylor.\nIngrese el número de términos de la serie: ", (terminos) => {
  rl.question("Ingrese el valor de x: ", (x) => {
    const resultado = calcularExponencial(x, terminos); // Llamada a la función calcularExponencial con los parámetros proporcionados por el usuario
    console.log("El resultado es " + resultado.toFixed(8)); // Muestra el resultado en la consola
    rl.close(); // Cierra la interfaz readline
  });
});

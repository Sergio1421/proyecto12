// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Imprime una piramide hacia la izquierda, que va hasta la columna 40 y fila 11
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función para escribir una cantidad específica de espacios
// Importar la librería 'prompt-sync'
var prompt = require('prompt-sync')();

// Definir la función 'renglones' que dibuja la figura en forma de pirámide
const renglones = (limite) => {
  let contador = 0;
  let cantidadletras = 1;
  let cantidadespacios = 39;
  let renglon = 0;

  while (renglon < limite) {
    espacios(contador, cantidadespacios); // Llama a la función 'espacios' para imprimir los espacios en blanco
    letras(contador, cantidadletras); // Llama a la función 'letras' para imprimir las letras 'A'

    console.log(); // Imprime un salto de línea

    if (renglon < 5) {
      cantidadletras++; // Incrementa la cantidad de letras en cada fila
      cantidadespacios--; // Decrementa la cantidad de espacios en cada fila
    } else {
      cantidadletras--; // Decrementa la cantidad de letras en cada fila
      cantidadespacios++; // Incrementa la cantidad de espacios en cada fila
    }

    renglon++; // Incrementa el contador de filas
  }
};

// Definir la función 'espacios' que imprime espacios en blanco
const espacios = (contador, cantidadespacios) => {
  while (contador < cantidadespacios) {
    process.stdout.write(" "); // Escribe un espacio en blanco en la consola
    contador++; // Incrementa el contador de espacios
  }
};

// Definir la función 'letras' que imprime letras 'A'
const letras = (contador, cantidadletras) => {
  while (contador < cantidadletras) {
    process.stdout.write("A"); // Escribe la letra 'A' en la consola
    contador++; // Incrementa el contador de letras
  }
};

renglones(11); // Llama a la función 'renglones' para dibujar la figura


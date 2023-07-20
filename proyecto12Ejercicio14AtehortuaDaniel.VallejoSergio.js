// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Imprime una piramide invertida de letras P, de la columna 1 hasta la columna 13 y la fila 1 hasta la fila 7
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


 // Función que imprime una cantidad determinada de espacios en blanco
// Función flecha que imprime una cantidad determinada de espacios en blanco
const imprimirEspacios = (cantidad) => {
  let contador = 0; // Inicializa el contador en 0
  while (contador < cantidad) {
    process.stdout.write(" "); // Imprime un espacio en blanco
    contador++;
  }
};

// Función flecha que imprime una cantidad determinada de letras "P"
const imprimirLetras = (cantidad) => {
  let contador = 1; // Inicializa el contador en 1
  while (contador <= cantidad) {
    process.stdout.write("P"); // Imprime la letra "P"
    contador++;
  }
};

// Función flecha que dibuja la figura en forma de pirámide invertida
const dibujarFigura = (cantidadLetras, cantidadEspacios) => {
  while (cantidadLetras >= 1) {
    imprimirEspacios(cantidadEspacios); // Llama a la función para imprimir los espacios en blanco al principio de la línea
    imprimirLetras(cantidadLetras); // Llama a la función para imprimir las letras "P" en la línea
    process.stdout.write("\n"); // Imprime un salto de línea para pasar a la siguiente línea
    cantidadLetras -= 2; // Resta 2 a la cantidad de letras para dibujar la siguiente línea con menos letras
    cantidadEspacios++; // Incrementa la cantidad de espacios en blanco para ajustar la figura
  }
};

// Función principal
const main = () => {
  const maximoLetras = 13; // Cantidad máxima de letras en la línea superior de la figura
  const inicialEspacios = 0; // Número inicial de espacios en blanco

  dibujarFigura(maximoLetras, inicialEspacios); // Llama a la función para dibujar la figura
};

// Llamada a la función principal
main();

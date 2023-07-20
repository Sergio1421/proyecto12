// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa que imprime una piramide inverida de letras P Hasta la columna 40 y de 7 filas
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función flecha que imprime una cantidad determinada de espacios en blanco
const imprimirEspacios = (cantidad) => {
  let contador = 0; // Inicializa el contador en 0
  while (contador < cantidad) {
    process.stdout.write(" "); // Imprime un espacio en blanco
    contador++;
  }
};

// Función flecha que imprime una cantidad determinada de letras 'P'
const imprimirLetras = (cantidad) => {
  let contador = 1; // Inicializa el contador en 1
  while (contador <= cantidad) {
    process.stdout.write("P"); // Imprime la letra 'P'
    contador++;
  }
};

// Función flecha que genera la figura en forma de pirámide invertida
const generarFigura = (cantidad, espacios) => {
  while (cantidad >= 1) {
    imprimirEspacios(espacios); // Llama a la función para imprimir los espacios en blanco
    imprimirLetras(cantidad); // Llama a la función para imprimir las letras 'P'
    process.stdout.write("\n"); // Imprime una nueva línea
    cantidad -= 2; // Resta 2 a la cantidad para reducir la cantidad de letras en cada línea
    espacios++; // Incrementa el número de espacios para ajustar la posición de la figura
  }
};

// Función principal
const main = () => {
  const alturaMaxima = 13; // Altura máxima de la figura
  const espaciosIniciales = 33; // Cantidad inicial de espacios en blanco

  generarFigura(alturaMaxima, espaciosIniciales); // Llama a la función para generar la figura
};

main(); // Llamada a la función principal

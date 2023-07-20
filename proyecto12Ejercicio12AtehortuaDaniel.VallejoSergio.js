// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Imprime una piramide inverida que abarca 7 filas y 13 columnas, desde la letra P hasta la D
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 // Función principal
const main = () => {
  const alturaMaxima = 13; // Altura máxima de la figura
  let espacios = 0; // Espacios iniciales
  let cantidad = alturaMaxima;
  let letras = ['P', 'N', 'L', 'J', 'H', 'F', 'D'];

  // Ciclo externo para las filas de la figura
  let l = 0;
  while (cantidad >= 1) {
    let letra = letras[l];
    l++;
    // Ciclo para imprimir espacios
    let contadorEspacios = 0;
    while (contadorEspacios < espacios) {
      process.stdout.write(" ");
      contadorEspacios++;
    }

    // Ciclo para imprimir letras
    let contadorLetras = 1;
    while (contadorLetras <= cantidad) {
      process.stdout.write(letra + " ");
      contadorLetras++;
    }

    process.stdout.write("\n"); // Imprime un salto de línea para iniciar una nueva fila

    cantidad = cantidad - 2; // Disminuye la cantidad de letras para la próxima fila
    espacios = espacios + 2; // Aumenta la cantidad de espacios para la próxima fila
  }
};

// Llamada a la función principal
main();

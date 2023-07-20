// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Imprime la silueta o las trazas de un triangulo con letras Z
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// La función `imprimirEspacios` imprime una cantidad determinada de espacios en blanco en la consola.
const main = () => {
    // Definir la cantidad máxima de espacios en blanco y la cantidad inicial de espacios
    let espacios1 = 17;
    let espacios2 = 0;
  
    // Bucle principal que controla el dibujo de la figura
    while (espacios1 > -2) {
      // Imprimir espacios en blanco antes de la primera "Z"
      let contador = 0;
      while (contador < espacios2) {
        process.stdout.write("  "); // Imprimir dos espacios en blanco
        contador++;
      }
  
      // Imprimir la primera "Z"
      process.stdout.write("Z");
  
      // Imprimir espacios en blanco entre las "Z"
      if (espacios1 > 0) {
        // Solo imprimir espacios si espacios1 es positivo
        contador = 0;
        while (contador < espacios1) {
          process.stdout.write("  "); // Imprimir dos espacios en blanco
          contador++;
        }
  
        // Imprimir la segunda "Z" y realizar un salto de línea
        process.stdout.write("Z\n");
      }
  
      // Decrementar la cantidad de espacios en blanco entre las "Z"
      espacios1 -= 2;
      // Incrementar la cantidad de espacios en blanco antes de la primera "Z"
      espacios2++;
    }
  };
  
  // Llamada a la función principal
  main();
  
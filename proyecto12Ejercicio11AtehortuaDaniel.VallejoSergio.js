// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El programa imprime una triangulo de A hasta la columna 25 con maximo 4 ordenes de imprimir
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función que imprime el triángulo
const imprimirTriangulo = () => {
  let i = 1; // Número de fila actual
  let maxFilas = 25; // El número máximo de filas que tendrá nuestro triángulo

  // Ciclo para manejar las filas del triángulo
  while (i <= maxFilas) {
    let j = maxFilas; // Número de columna actual, comenzando por el final (derecha)

    // Ciclo para manejar las columnas de cada fila del triángulo
    while (j >= 1) { // Cambiamos esta condición para que comience desde el final
      if (j > i) {
        process.stdout.write(" "); // Imprime un espacio si estamos antes de la posición del triángulo
      } else {
        process.stdout.write("A"); // Imprime el carácter "A" si estamos en o después de la posición del triángulo
      }
      j--; // Pasamos a la siguiente columna (hacia la izquierda)
    }

    process.stdout.write("\n"); // Imprime un salto de línea para iniciar una nueva fila
    i++; // Pasamos a la siguiente fila
  }
};

// Llamada a la función para imprimir el triángulo
imprimirTriangulo();

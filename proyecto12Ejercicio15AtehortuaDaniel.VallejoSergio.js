// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa definir si un numero es primo 
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
// Variable para contar los renglones de la pirámide
// Definición de la función que imprime una línea en la consola
const imprimirLinea = (contenido) => {
  console.log(contenido);
};

// Variable para contar los renglones de la pirámide
let renglon = 1;

// Bucle externo para los renglones
while (renglon <= 7) {
  // Condicional para determinar la configuración de letras 'A' en cada renglón
  if (renglon === 1 || renglon === 7) {
    imprimirLinea("A     A"); // Imprime la línea "A     A" en la consola
  }

  if (renglon === 2 || renglon === 6) {
    imprimirLinea("AA   AA"); // Imprime la línea "AA   AA" en la consola
  }

  if (renglon === 3 || renglon === 5) {
    imprimirLinea("AAA AAA"); // Imprime la línea "AAA AAA" en la consola
  }

  if (renglon === 4) {
    imprimirLinea("AAAAAAA"); // Imprime la línea "AAAAAAA" en la consola
  }

  renglon++; // Incrementa el número de renglón para avanzar al siguiente
}

// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa  de computador que utilizando ciclos anidados se genera las siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var contadorPrincipal = 1; // Contador para el primer número de la terna
var segmento = 1; // Representa el segundo número de la terna
var contadorSegmento = 1; // Contador para el tercer número de la terna

// Mientras el contador principal sea menor o igual a 9
while (contadorPrincipal <= 9) {

  // Imprimir la terna actual
  console.log(contadorPrincipal + " " + segmento + " " + contadorSegmento);

  // Si el contador del segmento llega a 3, reiniciarlo a 1 y avanzar al siguiente segmento
  if (contadorSegmento == 3) {
    contadorSegmento = 1;
    segmento++;
  } else {
    // De lo contrario, simplemente incrementar el contador del segmento
    contadorSegmento++;
  }

  // Incrementar el contador principal después de cada terna impresa
  contadorPrincipal++;
}

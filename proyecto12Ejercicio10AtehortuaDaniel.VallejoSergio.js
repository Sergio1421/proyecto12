// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Se simula una computadora que muestre el movimiento de dos A a los extremos, acercandose al centro con cada entrada por teclado del usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función para crear una pausa en la ejecución del programa
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// Función principal que realiza la animación
(async function() {
  let espaciosEntre = 38; // Definimos el espacio inicial entre las A's
  let posicion = 1; // Definimos la posición inicial de la primera A

  // Mientras haya espacio entre las A's, continuamos la animación
  while (espaciosEntre >= 0) {
    console.clear(); // Limpiamos la consola para cada 'frame' de la animación

    let i = 1;
    // Imprimir los espacios antes de la primera "A"
    while (i < posicion) {
      process.stdout.write(" ");
      i++;
    }
    process.stdout.write("A"); // Imprimir la primera "A"

    // Imprimir los espacios entre las dos "A"
    let j = 0;
    while (j < espaciosEntre) {
      process.stdout.write(" ");
      j++;
    }
    process.stdout.write("A"); // Imprimir la segunda "A"

    console.log(); // Pasar a la siguiente línea

    await sleep(100); // Retrasar el siguiente 'frame' de la animación

    posicion++; // Incrementamos la posición de las A's
    espaciosEntre -= 2; // Decrementamos el espacio entre las A's
  }
})();

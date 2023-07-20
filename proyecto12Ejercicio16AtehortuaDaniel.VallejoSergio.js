// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - es un programa que imprime un rombo
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// La función `imprimirEspacios` imprime la cantidad especificada de espacios en blanco.
// Función para imprimir espacios en blanco
const imprimirEspacios = (cantidad) => {
  let contador = 0;
  while (contador < cantidad) {
    process.stdout.write(" "); // Imprime un espacio en blanco
    contador++;
  }
};

// Función para dibujar la figura en forma de "Z"
const dibujarFigura = (cantidad, espacios) => {
  let contador = 0;
  while (contador < cantidad) {
    if (contador === 0) {
      imprimirEspacios(espacios); // Imprime `espacios` espacios en blanco
    }
    process.stdout.write("Z"); // Imprime la letra "Z"
    contador++;
  }
};

// Función para imprimir el patrón de la figura
const imprimirPatron = (maximo, espacios) => {
  let cantidad = 1;
  while (cantidad <= maximo) {
    dibujarFigura(cantidad, espacios); // Dibuja la figura con `cantidad` caracteres y `espacios` espacios en blanco
    process.stdout.write("\n"); // Realiza un salto de línea
    cantidad += 2;
    espacios--;
  }
  cantidad -= 4;
  espacios += 2;
  while (cantidad >= 1) {
    dibujarFigura(cantidad, espacios); // Dibuja la figura en sentido inverso con `cantidad` caracteres y `espacios` espacios en blanco
    process.stdout.write("\n"); // Realiza un salto de línea
    cantidad -= 2;
    espacios++;
  }
};

// Función principal
const main = () => {
  const maximoCaracteres = 7; // Cantidad máxima de caracteres en la figura
  const espaciosIniciales = 9; // Cantidad de espacios en blanco antes de la figura

  console.log("Este programa dibuja la siguiente figura:");
  imprimirPatron(maximoCaracteres, espaciosIniciales); // Llama a la función para dibujar la figura en forma de patrón
};

// Llamada a la función principal
main();

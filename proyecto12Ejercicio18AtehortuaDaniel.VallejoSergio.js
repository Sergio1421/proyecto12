// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El programa, imprime la traza o silueta de un triangulo con la letra Z
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 // Función para imprimir una cantidad específica de espacios
 // Función para imprimir espacios en blanco
const imprimirEspacios = (cantidad) => {
    let contador = 0;
    while (contador < cantidad) {
        process.stdout.write("  "); // Imprimir dos espacios en blanco
        contador++;
    }
}

// Función principal para dibujar la figura
const main = () => {
    let cantidadEspacios1 = 0; // Inicializar la cantidad de espacios1
    let cantidadEspacios2 = 9; // Inicializar la cantidad de espacios2

    // Mientras la cantidad de espacios1 sea menor o igual a 17
    while (cantidadEspacios1 <= 17) {
        imprimirEspacios(cantidadEspacios2); // Imprimir espacios2
        process.stdout.write("Z"); // Imprimir la letra "Z"

        // Solo imprime espacios y una segunda "Z" si cantidadEspacios1 no es 0
        if (cantidadEspacios1 !== 0) {
            imprimirEspacios(cantidadEspacios1); // Imprimir espacios1
            process.stdout.write("Z"); // Imprimir la letra "Z"
        }

        console.log(); // Saltar a la siguiente línea

        // Incrementar la cantidad de espacios1 y decrementar la cantidad de espacios2
        cantidadEspacios1 += 2;
        cantidadEspacios2 -= 1;
    }
}

// Llamar a la función principal
main();

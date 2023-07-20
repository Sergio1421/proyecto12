// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Es un programa de computador, utilizando ciclos anidados; de tal manera que presente todas las tablas de multiplicar del 1 al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.)
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const tablasDel1Al10 = () => {
  let numero = 1; // Inicializamos la variable 'numero' en 1

  while (numero <= 10) { // Ciclo externo que se repite hasta 10 inclusive
    console.log('Tabla de multiplicar del ' + numero + ':'); // Imprimimos el encabezado de la tabla

    let multiplicador = 1; // Inicializamos el multiplicador en 1

    while (multiplicador <= 10) { // Ciclo interno que se repite hasta 10 inclusive
      console.log(numero + ' x ' + multiplicador + ' = ' + numero * multiplicador); // Imprimimos la multiplicación

      multiplicador++; // Incrementamos el multiplicador
    }

    console.log(''); // Imprimimos una línea en blanco entre tablas

    numero++; // Incrementamos el número
  }
};

tablasDel1Al10(); // Llamada inicial a la función tablasDel1Al10

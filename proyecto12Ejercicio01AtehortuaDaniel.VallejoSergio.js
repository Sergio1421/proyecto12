// - 22 junio 2023
// - 4:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
// Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 // Define la función que generará la serie de Fibonacci hasta un límite especificado.
 const fibonacciSeries = (limit) => {
  let a = 0; // Inicializamos el primer número de Fibonacci
  let b = 1; // Inicializamos el segundo número de Fibonacci

  while (a <= limit) { // Ejecutamos el bucle mientras el número actual de Fibonacci sea menor o igual al límite
    console.log(a); // Imprimimos el número actual de Fibonacci

    let temp = a; // Guardamos el valor actual de 'a' en una variable temporal
    a = b; // Actualizamos el valor de 'a' con el valor actual de 'b'
    b = temp + b; // Actualizamos el valor de 'b' sumando el valor anterior de 'a' (almacenado en 'temp') y el valor actual de 'b'
  }
}

const limit = 10000; // Establecemos el límite para la serie de Fibonacci

fibonacciSeries(limit); // Llamamos a la función para generar e imprimir la serie de Fibonacci hasta el límite establecido

/*
Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

Nota: No utilices el método Math.max de JavaScript.

// escribe tu solución acá

// código de prueba
console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85
 */

const max = arr => arr.reduce((a, b) => a > b ? a : b);


console.log(max([1, 2, 3, 4]))
console.log(max([63, 85, 39, 24, 3]))

/*
Modifica el ejercicio anterior para que la función max no reciba un arreglo sino un número indeterminado de argumentos.

// escribe tu solución acá

// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85
 */


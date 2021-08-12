/*Escribe una función llamada suma que reciba dos números y retorne la suma de los dos números.

// escribe la función suma acá

// código de prueba, verifica que aparezcan los valores correctos en la consola
console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168
*/

function suma(a = 0 , b = 0){
  return a+b;
}
let n1 = parseInt(prompt('Ingrese un número: '))
let n2 = parseInt(prompt('Ingrese otor número: '))
result = suma(n1,n2)
console.log(result)
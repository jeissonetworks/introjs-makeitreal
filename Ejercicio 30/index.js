/*Escribe una función llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamación.

// escribe la función hola acá

// código de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"
*/

const name = prompt("Ingrese su nombre")
 function hola (name){
   console.log(`Hola ${name} !!`)
 }
hola(name)
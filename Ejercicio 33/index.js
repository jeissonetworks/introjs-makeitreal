/*Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.

// escribe la función acá

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"
*/

function capitalizar(str){
  let strFinal = ''
  let strToList = str.split(' ')
  for (let i of strToList){
    strFinal = strFinal + i.charAt(0).toUpperCase()+i.slice(1,) + ' '
  }
  return strFinal
}
let str1 = prompt('Ingrese una frase: ')
console.log(capitalizar(str1))
/*Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

// escribe la función acá

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
*/

const text = prompt('Favor ingrese varios números separados por espacio')

const words = text.split(' ')

let newWord = 0
function promedio() {
  const totalWords = words.length
  for (let word of words) {
    
    newWord = newWord + parseInt(word)
  }
return newWord / totalWords
}
console.log(` El promedio es ${promedio()}`)
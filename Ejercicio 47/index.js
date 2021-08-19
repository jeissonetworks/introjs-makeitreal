/*
Utiliza destructuración para almacenar los primeros dos elementos del siguiente arreglo en las variables first y second:

const arr = [1, 2, 3, 4]

// escribe acá tu respuesta

// código de prueba
console.log(first) // 1
console.log(second) // 2
Utiliza ahora destructuración para obtener el valor de las llaves name y age del objeto:

const person = {
  name: "Pedro",
  age: 20
}

// escribe tu respuesta acá

// código de prueba
console.log(name) // "Pedro"
console.log(age)
 */

const arr = [1, 2, 3, 4];

[first, second] = arr

console.log(first)
console.log(second)

const person = {
    name: "Pedro",
    age: 20
}

const {name, age} = person

console.log(name)
console.log(age)
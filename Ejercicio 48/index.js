/*
Crea un objeto literal en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar. Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.

Nota: Utiliza métodos concisos

// escribe tu solución acá

// código de prueba
console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0
 */

const auto = {
  velocidad : 0,
  acelerar(){
    this.velocidad += 1; 
  },
  frenar(){
    this.velocidad -= 1; 
  }
}
console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0
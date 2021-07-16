/*Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número. */

let numale = Math.round(Math.random()*10);
let numuser = parseInt(prompt("Adivine un numero del (1-10): "))
while(numale != numuser){
  console.log("Lo sentimos ese no era!")
  numuser = parseInt(prompt("Adivine un numero del (1-10): "))
}
console.log("Felicitaciones, ese era")
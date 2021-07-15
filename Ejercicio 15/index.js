/*Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.

Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55. */
let num = parseInt(prompt('Ingrese un Numero'));
let suma = 0;
for(let i= 1; i<= num ; i++){
 suma=suma+i;
}
console.log(suma)
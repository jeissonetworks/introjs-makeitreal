/*Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"
*/
const string = prompt('Ingrese una frase');
const count = string.split('a').length - 1;
console.log(`La frase tiene ${count} caracteres "a"`);
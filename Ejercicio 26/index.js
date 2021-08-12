/*Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/
let msg = prompt("Ingrese una frase:");
msg = msg.trim().split(" ");
msg = msg.map(p => p[0].toUpperCase() + p.slice(1));
msg = msg.join(" ");
console.log(msg);
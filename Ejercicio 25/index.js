/*Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
Nota: Aunque esta es una forma de generar contraseñas no se considera segura y no la recomendamos.
*/
// no funciona en replit, pero en la consola de google si funciona

let mesage = prompt("Ingrese una frase")

mesage = mesage.toLowerCase().trim()
mesage = mesage.replaceAll('a',4)
mesage = mesage.replaceAll('e',3)
mesage = mesage.replaceAll('i',1)
mesage = mesage.replaceAll('o',0)
mesage = mesage.replaceAll(' ','')

console.log(mesage)
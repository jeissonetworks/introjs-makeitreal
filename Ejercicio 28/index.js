/*Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

const str1 = prompt("Ingrese una frase:").toLowerCase();
const str2 = prompt("Ingrese otra frase:").toLowerCase();
let count = 0, common = [];

for (let index of str1) {
    if (str2.includes(index)) {
        common.push(index);
    }
}

count = common.length;
(count > 0) ? console.log(`Los caracteres en común son: ${common}`) : console.log("No se encontraron caracteres en común");


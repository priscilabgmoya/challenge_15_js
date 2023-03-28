/**
 * 1-Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por 
 * pantalla la resta de ambos números y también su multiplicación.
 */

let numero_a = parseInt(prompt("Ingrese el numero A"));
let numero_b = parseInt(prompt("Ingrese el numero B")); 

if(! isNaN(numero_a) && ! isNaN(numero_b)){
    document.write(`<p style= "color: black; font-size: 30px"> La resta entre  los Numeros A (${numero_a}) y B (${numero_b}) es: <span style= "color: red; font-size: 30px" > ${(numero_a-numero_b)}</span> </p>`);
    document.write(`<p style= "color: black; font-size: 30px"> La multiplicacion entre  los Numeros A (${numero_a}) y B (${numero_b}) es: <span style= "color: red; font-size: 30px" > ${(numero_a*numero_b)}</span> </p>`);
}
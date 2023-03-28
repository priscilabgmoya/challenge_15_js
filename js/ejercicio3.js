/**
 * 3- Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')
 * investigar a través de que método podemos quitar los guiones y reemplazar por espacios.
 */

let frase_sin_separar ='Pablito-clavo-un-clavito';
let frase_separada = "";

for (let i = 0; i < frase_sin_separar.length; i++) {
    const element = frase_sin_separar[i];
    if(element === "-"){
        frase_separada = frase_separada + " ";
    }else{
        frase_separada = frase_separada + frase_sin_separar[i];
    }
}
document.write(frase_separada);
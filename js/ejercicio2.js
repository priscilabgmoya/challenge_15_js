/**
 * 2-   El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). 
 * Mostrar x consola la respuesta (si contiene o no)
 */

let nombre_apellido = prompt("Ingrese Nombre y Apellido Completo");

if(nombre_apellido !== null){
    let nombre_apellido_minuscula = nombre_apellido.toLocaleLowerCase();
    if(nombre_apellido_minuscula.includes("a") === true && nombre_apellido_minuscula.includes("m") === true){
        console.log("si contiene");
    }else{
        console.log("no contiene");
    }
}else{
    alert('Ingrese un nombre y apellido correcto');
}

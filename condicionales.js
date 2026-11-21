const prompt = require("prompt-sync")();

// Funciones
 
 function nuevo(nombre){
    return nombre.toUpperCase()
 }

 let mayu = nuevo("orion")
 console.log(mayu)

 //calculadora

function resta (n1, n2){
    return n1 - n2
}

function multiplicacion (n1, n2) {
    return n1 * n2
}
 let resultado = resta(78, 24)
 resultado = multiplicacion(25, 2)
console.log(resultado)


function calculadora(N1, operacion, N2) {
    if (operacion == "-") {
        resultado = N1 - N2
    } else if (operacion == "+") {
        resultado = N1 + N2  
    } else if (operacion == "x") {
        resultado = N1 * N2
    } else if (operacion == "/") {
        resultado = N1 / N2
    }
    return resultado
}

let res = calculadora(7, "/", 5)
console.log(res)

// lista de notas de un alumno y sus notas, añadir nota, eliminar notas, decir las notas y dame la media 


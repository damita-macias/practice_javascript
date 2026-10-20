const prompt = require("prompt-sync")();



let primer_numero = Number(prompt("dame un numero : "));
let segundo_numero = Number(prompt("dame otro numero: "));
let operacion = prompt("¿que operacion quieres realizar (-, +, *, /): ");

if (operacion === "+"){
    console.log("resultado", primer_numero + segundo_numero)
} else if (operacion === "-"){
    console.log("resultado", primer_numero - segundo_numero)
} else if (operacion === "*"){
    console.log("resultado", primer_numero * segundo_numero)
} else if (operacion === "/"){
    console.log("resultado", primer_numero / segundo_numero)
}
const prompt = require("prompt-sync")();

// construir un formateador de cadenas 

const mensaje = "   Bienvenidos   "
console.log("Mensaje Original:") 
console.log("lo mas original")

const arreglado = mensaje.trim();
console.log("Aqui va el mensaje original con el metodo trim:")
console.log(arreglado)

const espacio_blanco = mensaje.trimStart();
console.log("aqui esta el nuevo resultado con el metodo timStart:")
console.log(espacio_blanco)

const mayuscu = mensaje.toUpperCase();
console.log("resultado en mayuscula con el metodo toUpperCase()")
console.log(mayuscu)

const minuscula = mensaje.toLowerCase()
console.log("Resultado en minuscula con el metodo toLowerCase()");
console.log(minuscula)

const nuevo_mensaj = mensaje.slice(0, 5);
console.log("nuevo metodo slice:")
console.log(nuevo_mensaj)
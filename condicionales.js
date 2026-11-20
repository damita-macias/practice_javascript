const prompt = require("prompt-sync")();

//Crear una variable que sea una altura y que sea para una feria "menores que 1.55 y mayores de 1.80 no pueden montarse a una atraccion"
let niño = 1.80
if (niño <= 1.55 || niño >= 1.80){
    console.log("No puedes entrar")
} else {
    console.log("Puedes pasar")
}

//Crear una talla de pie y mostrar esa y el resto de talla hasta la 62 y al fianl mostrar que hya no hay tallas

for (let talla = 35; talla <= 62; talla += 1) {
    console.log(`talla ${talla}`)
}
console.log("ya no hay mas tallas")

//Crea una lista de colores y mjuestras uno a uno

let colores = ["amarillo", "verde", "rosado", "celeste", "blanco"]
for (let color of colores){
    console.log(`disponible ${color}`)
}

//Crea una lista de estudiantes sin repetir la a

let estudiantes = ["ana", "mateo", "jose", "antonio", "elizabeth", "eros"]
for (let nombre of estudiantes) {
   if (nombre.startsWith("a") == false) {
        console.log(nombre)
   }
} 
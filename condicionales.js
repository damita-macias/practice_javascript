const prompt = require("prompt-sync")();

const edad = 19
if (edad < 18){
 console.log("eres menos de edad")
} else if (edad === 18){
 console.log("acabas de cumplir la mayopria de edad")
} else {
    console.log("eres mayor de edad")
}
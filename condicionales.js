const prompt = require("prompt-sync")();

const nota= 6
if(nota <= 4){
  console.log("suspenso")
} else if (nota >= 5 && nota <= 6 ){
  console.log("aprovado");
} else if (nota >= 7 && nota >= 8){
   console.log("notable");
} else {
  console.log("sobresaliente")
}
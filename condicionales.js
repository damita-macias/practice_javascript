const prompt = require("prompt-sync")();

onst nota = 7;

if (nota >= 9) {
  console.log("¡Sobresaliente!");
} else if (nota >= 5) {
  console.log("¡Estás aprobado!");
} else {
  console.log("Has suspendido.");
}
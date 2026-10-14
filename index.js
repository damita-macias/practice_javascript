let puntuacion = 10;      // Su valor puede cambiar después
const nombreUsuario = "Ana"; // Su valor será siempre "Ana"
var antiguo = "hola";

// Declaración de variables
let producto = "Laptop";
const impuesto = 1.21;
let precioBase = 800;

// Operación con variables
let precioFinal = precioBase * impuesto;

// Mostrar el resultado en la consola
console.log("El producto es:", producto);
console.log("El precio final con impuesto es:", precioFinal);

// Objeto complejo
const usuario = {
    id: 42,
    nombre: "Valeria",
    ubicacion: {
        ciudad: "Madrid",
        pais: "España"
    },
    intereses: ["Programación", "Diseño", "Fotografía"]
};

// Extrayendo variables (incluyendo anidación y renombrado)
const { nombre, ubicacion: { ciudad }, intereses: [primerInteres] } = usuario;

console.log(nombre);          // "Valeria"
console.log(ciudad);          // "Madrid"
console.log(primerInteres);   // "Programación"
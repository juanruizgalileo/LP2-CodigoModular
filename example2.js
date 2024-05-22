// Tasa de conversión de quetzales a dólares y euros
const tasaDolar = 0.13; // 1 quetzal = 0.13 dólares (este valor puede variar)
const tasaEuro = 0.12; // 1 quetzal = 0.12 euros (este valor puede variar)

// Solicitar al usuario que seleccione la moneda de destino
let opcion = prompt("Seleccione la moneda a la que desea convertir:\n1 para Dólares\n2 para Euros");

// Convertir la opción ingresada a un número entero
opcion = parseInt(opcion);


// Solicitar al usuario que ingrese el monto en quetzales
let quetzales = prompt("Ingrese el monto en quetzales:");

// Convertir el monto ingresado a un número flotante
quetzales = parseFloat(quetzales);

// Realizar la conversión según la opción seleccionada
let resultado;
if (opcion === 1) {
    resultado = quetzales * tasaDolar;
    alert(`${quetzales} quetzales son ${resultado.toFixed(2)} dólares.`);
} else if (opcion === 2) {
    resultado = quetzales * tasaEuro;
    alert(`${quetzales} quetzales son ${resultado.toFixed(2)} euros.`);
}

// En main.js:
// •Importar las constantes y funciones necesarias.
// •Calcular:
// •Precio total de 3 productos.
// •Aplicar descuento al total con impuestos.
// •Mostrar todos los pasos intermedios y el resultado final


// main.js
import { calcularTotal, aplicarImpuestos, aplicarDescuento } from "./operaciones-matematicas.js";


const precioProducto = 1000000;

const cantidad = 3;

// Total sin impuestos
const total = calcularTotal(precioProducto, cantidad);
console.log("Total sin impuestos:", total);

// •Aplicar impuestos al total.
const totalConImpuestos = aplicarImpuestos(total);
console.log("Total con impuestos:", totalConImpuestos);

// •Aplicar descuento al total con impuestos.

const totalFinal = aplicarDescuento(totalConImpuestos);
console.log("Total final con descuento:", totalFinal);

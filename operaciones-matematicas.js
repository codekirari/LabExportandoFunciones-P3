
// 2. En operaciones-matematicas.js, exportar:
//    - calcularTotal(precio, cantidad)
//    - aplicarImpuestos(total) (usar IVA)
//    - aplicarDescuento(total) (usar DESCUENTO)

// operaciones-matematicas.js
import { IVA, DESCUENTO } from "./constantes.js";

export function calcularTotal(precio, cantidad){
    return precio * cantidad;
}

export function aplicarImpuestos(total){
    return total * (1 + IVA);
}

export function aplicarDescuento(total){
    return total * (1 - DESCUENTO);
}

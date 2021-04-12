let disponible=prompt("¿Cuál es tu monto disponible?");
let servicio1=prompt("¿Cuál es el nombre primer servicio?");
let montoServicio1=prompt("¿Cuál es el monto del primer servicio?");
let servicio2=prompt("¿Cuál es el nombre segundo servicio?");
let montoServicio2=prompt("¿Cuál es el monto del segundo servicio?");
let servicio3=prompt("¿Cuál es el nombre tercer servicio?");
let montoServicio3=prompt("¿Cuál es el monto del tercer servicio?");
let saldoRestante=disponible-montoServicio1-montoServicio2-montoServicio3;
alert(`Los servicios a pagar son ${servicio1} de $ ${montoServicio1}, ${servicio2} de $ ${montoServicio2}, ${servicio3} de $ ${montoServicio3}, queda disponible un saldo de $ ${saldoRestante}`)
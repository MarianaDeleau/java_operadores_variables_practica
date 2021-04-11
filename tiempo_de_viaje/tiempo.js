let escalaUno = prompt("¿Cúal es la primer escala?");
let duracionEscalaUno = prompt("¿Cúal es la duración de la primer escala?");
let escalaDos = prompt("¿Cúal es la segunda escala?");
let duracionEscalaDos = prompt("¿Cúal es la duración de la segunda escala?");
let escalaTres = prompt("¿Cúal es la tercer escala?");
let duracionEscalaTres = prompt("¿Cúal es la duración de la tercer escala?");
const resultado = (parseInt(duracionEscalaUno) + parseInt(duracionEscalaDos) + parseInt(duracionEscalaTres));
alert(`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs.`);
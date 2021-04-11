let ingreso=prompt(`Ingresá una cantidad de segundos`);
let horas=(parseInt((ingreso)/3600));
let segRest=ingreso%3600;
let minutos=(parseInt((segRest)/60));
let segundos=segRest%60;
alert (`${ingreso} segundos son = ${horas} horas, ${minutos} minutos y ${segundos} segundos`);

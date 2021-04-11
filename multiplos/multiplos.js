let primerNumero=prompt("Ingresá el primer número")
let segundoNumero=prompt("Ingresá el segundo número")
let resto = (parseInt(primerNumero) % parseInt(segundoNumero));
if (resto==0) {
    alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: true`)
} else {
    alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: false`)
    }

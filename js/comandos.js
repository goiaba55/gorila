var dolarTexto = prompt("valor em dolar que você quer converter")
var dolarNumero = parseFloat(dolarTexto)

var valorReal = dolarNumero * 5.52
var valorDecimal = valorReal.toFixed(2)

alert(valorDecimal)
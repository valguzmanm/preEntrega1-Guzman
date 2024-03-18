//Convertidor de peso Colombiano a euro, dolar, peso mexicanos, 
//peso argentino, peso chileno, soles.


const TASA_CAMBIO_DOLAR = 0.00026
const TASA_CAMBIO_EURO = 0.00024
const TASA_CAMBIO_MEXICANO = 0.0043
const TASA_CAMBIO_ARGENTINO = 0.22
const TASA_CAMBIO_CHILENO = 0.24
const TASA_CAMBIO_PERUANO = 0.00095


function convertir(valor, moneda){

    moneda = moneda.toUpperCase()

    switch (moneda) {
        case "USD":
            return valor * TASA_CAMBIO_DOLAR;
        
        case "EUR":
             return valor * TASA_CAMBIO_EURO;

        case "MXN":
             return valor * TASA_CAMBIO_MEXICANO;

        case "ARS":
             return valor * TASA_CAMBIO_ARGENTINO;

        case "CLP":
             return valor * TASA_CAMBIO_CHILENO;

        case "SOL":
             return valor * TASA_CAMBIO_PERUANO;

        default: 
           return null
    }

}

let otrosCambios = true;
while (otrosCambios){
let pesoColombiano = parseFloat(prompt("Ingrese el valor que desea convertir"))
let monedaObjetivo = prompt("Selecciona la moneda a la que deseas hacer el cambio:\nUSD - Dolar americado\nEUR - Euro\nMXN - Peso Mexicano\nARS - Peso Argentino\nCLP - Peso chileno\nSOL - Sol peruano")


let resultado = convertir(pesoColombiano, monedaObjetivo)

if (resultado === null ) {
    alert("Esta conversión no se puede realizar")
} else {
    resultado = resultado.toFixed(2)
    alert (pesoColombiano + " equivalen a " + resultado + " " + monedaObjetivo)
}

otrosCambios = confirm("¿Desea hacer otra conversión?");
}

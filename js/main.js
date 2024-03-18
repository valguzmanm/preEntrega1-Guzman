//Convertidor de peso Colombiano a euro, dolar, peso mexicanos, 
//peso argentino, peso chileno, soles.

let pesoColombiano = parseFloat(prompt("Ingrese el valor que desea convertir"))
const TASA_CAMBIO_DOLAR = 0.00026
const TASA_CAMBIO_EURO = 0.00024

let monedaObjetivo = prompt("Selecciona la moneda a la que deseas hacer el cambio:\nUSD - Dolar americado\nEUR - Euro\nMXN - Peso Mexicano\nARS - Peso Argentino\nCLP - Peso chileno\nSOL - Sol peruano")

function convertir(valor, moneda){

    moneda = moneda.toUpperCase()

    switch (moneda) {
        case "USD":
            return valor * TASA_CAMBIO_DOLAR
        

            
    
        default: 
           return null
    }

}

let resultado = convertir(pesoColombiano, monedaObjetivo)

if (resultado === null ) {
    alert("Esta conversión no se puede realizar")
} else {
    resultado = resultado.toFixed(2)
    alert (pesoColombiano + " equivalen a " + resultado + " " + monedaObjetivo)
}



/**
* Obtiene la cotización del dólar minorista de la API del Banco Provincia para la fecha actual
* @customfunction
* @return la última cotización del dólar para la venta
**/

function dolarBapro() {
    const url = 'https://www.bancoprovincia.com.ar/Principal/Dolar'
    const response = UrlFetchApp.fetch(url)
    const values = JSON.parse(response.getContentText())
    return parseFloat(values[1])
}

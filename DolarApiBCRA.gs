/**
* Obtiene la cotización del dólar minorista de la API del BCRA para la fecha actual
* @customfunction
**/

function dolarBcra() {
    //Registrarse aquí para obtener la key https://estadisticasbcra.com/api/registracion
    const key = 'yourKey'; 
    const url = 'https://api.estadisticasbcra.com/usd_of_minorista';
    return httpGet(url,key); 
}


function httpGet(url,key) {
    const headers = {'Authorization': 'BEARER ' + key};
    var options = {
      'headers': headers
    }
    const response = UrlFetchApp.fetch(url, options);
    const values = JSON.parse(response.getContentText());
    return values[values.length -1].v
}

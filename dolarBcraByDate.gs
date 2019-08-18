/**
* Obtiene la cotización del dólar minorista de la API del BCRA para una fecha determinada
* @customfunction
**/

function dolarBcraByDate(date) { 
    //Registrarse aquí para obtener la key https://estadisticasbcra.com/api/registracion
    const key = 'yourKey';
    const url = 'https://api.estadisticasbcra.com/usd_of_minorista';
    return httpGet(url,key, date); 
}


function httpGet(url,key, date) {
    const headers = {'Authorization': 'BEARER ' + key};
    var options = {
      'headers': headers
    }
    const response = UrlFetchApp.fetch(url, options);
    const values = JSON.parse(response.getContentText());
    const day = new Date(date);
    var i = values.length - 1;
    const fechaString = Utilities.formatDate(dia, 'America/Buenos_Aires', 'yyyy-MM-dd');
    while(values[i].d != fechaString && new Date(values[i].d) > day) {
      i--;
    }
    return values[i].v
}

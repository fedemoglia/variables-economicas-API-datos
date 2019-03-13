/**
* Obtiene la cotización del dólar para la fecha actual
* @customfunction
**/

function cotizacionDolar() {
  var response = UrlFetchApp.fetch("http://ws.geeklab.com.ar/dolar/get-dolar-json.php");
  var data = JSON.parse(response.getContentText());
  Logger.log(data.libre);
  return Number(data.libre);
}

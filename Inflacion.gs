/**
* Obtiene la inflación entre 2 períodos
* @param {desde} fecha 
* @param {hasta} fecha
* @customfunction
**/

function inflacion(desde, hasta) {
  var today = new Date(desde);
  var until = new Date(hasta)
  var key = "173.1_INUCLEOLEO_DIC-_0_10";
  var url = "https://apis.datos.gob.ar/series/api/series/?start_date=";
  url = url.concat(formatDate(today), "&end_date=", formatDate(until), "&ids=", key, "&format=json");
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  var valores = data.data;
  var inflacion = 1;
  for(x in valores) {
    inflacion = inflacion * (valores[x][1]+1);
  }
  Logger.log(inflacion);
  return inflacion;
}

function formatDate(fecha) {
  return Utilities.formatDate(fecha, "GMT -3", "yyyy-MM-dd");
}
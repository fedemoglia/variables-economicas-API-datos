function valueByDateAndKey(fecha, key) {
   var today = new Date(fecha);
  //If is a weekend day use previous friday
  if(today.getDay() == 6 || today.getDay() == 0) {
    if(today.getDay() == 6) {
      today.setDate(today.getDate() - 1);
    } else {
      today.setDate(today.getDate() - 2);
    }
  };
  var data = fetchValue(key, today);
  while (data.data[0] == undefined) {
    today.setDate(today.getDate() -1);
    data = fetchValue(key, today);
  }
  var fechaValor = data.data[0];
  var value = fechaValor[1];
  Logger.log(value);
  return value;
}

function fetchValue(key, today) {
  var url = "https://apis.datos.gob.ar/series/api/series/?limit=1&start_date=";
  url = url.concat(today.getYear(), "-", today.getMonth() + 1, "-",
                   today.getDate(), "&ids=", key, "&format=json&metadata=none");
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

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
  //Iterates previous days in case that the value for the specified date is not valid
  while (data.data[0] == undefined) {
    today.setDate(today.getDate() -1);
    data = fetchValue(key, today);
  }
  var fechaValor = data.data[0];
  Logger.log(fechaValor[1]);
  return fechaValor[1];
}

function fetchValue(key, today) {
  const url = `https://apis.datos.gob.ar/series/api/series/?limit=1&start_date=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&ids=${key}&format=json&metadata=none`;
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

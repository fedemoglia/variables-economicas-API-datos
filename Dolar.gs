//Ejemplo de uso =valueDolar(A7) donde A7 es una celda con una fecha o =valueDolar("2018-09-02"), previamente hay que crear 
//un script con este código en https://script.google.com/home.
//Si están en el documento pueden entrar a través del menú Herramientas -> Editor de secuencias de comandos

/**
* Obtiene la cotización del dólar para una fecha determinada
* @param {date} fecha La fecha de la cotización
* @customfunction
**/
function valueDolar(fecha) {
  var dollarKey = "168.1_T_CAMBIOR_D_0_0_26";
  return valueByDateAndKey(fecha, dollarKey);
}

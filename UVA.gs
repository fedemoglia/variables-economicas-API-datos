//Ejemplo de uso =valueUVA(A7) donde A7 es una celda con una fecha o =valueUVA("2018-09-02"), previamente hay que crear 
//un script con este código en https://script.google.com/home.
//Si están en el documento pueden entrar a través del menú Herramientas -> Editor de secuencias de comandos

/**
* Obtiene la cotización de la UVA para una fecha determinada
* @param {fecha} fecha La fecha de la cotización
* @customfunction
**/
function valueUVA(fecha) {
  const uvaKey = "94.2_UVAD_D_0_0_10";
  return valueByDateAndKey(fecha, uvaKey);
}

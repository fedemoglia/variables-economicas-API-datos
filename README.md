# Variables económicas por fecha o período

Los datos son tomados de la API pública provista por el Secretaria de Modernización de la Nación en http://datos.gob.ar y de la API del BCRA https://estadisticasbcra.com/api/documentacion. Es necesario registrarse y obtener un token para poder hacer requests en esta última.

### Funciones disponibles

* Inflación -> *inflacion*: Recibe 2 parámetros, la fecha de inicio y de fin del período en el que se quiere calcular la inflación acumulada.
* Dólar -> Ambas funciones reciben un parámetro que es la fecha de la que se quiere consultar la cotización.
  * *valueDolar*
  * *cotizacionDolar* (No consulta la API oficial de la Secretaría de Modernización)
  * *dolarBCRA* y *dolarBCRAByDate* Devuelve la cotización actual del dólar o para una fecha determinada consultando la API del BCRA  https://api.estadisticasbcra.com/usd_of_minorista
  * *dolarBapro* Devuelve la cotización actual del dólar de la API del Banco Provincia https://www.bancoprovincia.com.ar/Principal/Dolar
* UVA -> *valueUVA*: Recibe un parámetro que es la fecha de la que se quiere consultar la cotización.

### Ejemplo de uso de la función para obtener la cotización del dólar. ([Dolar.gs](../master/Dolar.gs))
En una celda escriben la fórmula *=valueDolar(A7)* donde A7 es una celda con una fecha o *=valueDolar("2018-09-02")*, previamente hay que crear un script en el archivo donde se quiere utilizar la fórmula con el código en https://script.google.com/home. Si están en el documento pueden entrar a través del menú *Herramientas -> Editor de secuencias de comandos*. Cuando empiecen a escribir la función en la hoja de cálculo les va a aparecer la opción para autocompletarla.

> **Nota**
Para usar la función del valor de UVA o dólar es necesario importar el script [GetValueByDateAndKey.gs](../master/GetValueByDateAndKey.gs) al proyecto de Google Script.

> **Cotización del dólar**
Actualmente la última cotización que devuelve la API es del 07-11-2019. https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIOR_D_0_0_26&start_date=2019-07-31&end_date=2019-12-29&format=json
Por este motivo agrego el script [cotización dólar](../master/CotizacionDolar.gs).

El script [dolar BCRA](../master/DolarApiBCRA.gs) tiene la cotización actualizada hasta el día de la fecha.


# Variables económicas por fecha o período

Los datos son tomados de la API pública provista por el Secretaria de Modernización de la Nación en http://datos.gob.ar.

### Ejemplo de uso de la función para obtener la cotización del dólar. ([Dolar.gs](../blob/master/Dolar.gs))
En una celda escriben la fórmula *=valueDolar(A7)* donde A7 es una celda con una fecha o *=valueDolar("2018-09-02")*, previamente hay que crear un script en el archivo donde se quiere utilizar la fórmula con el código en https://script.google.com/home. Cuando empiecen a escribir la función en la hoja de cálculo les va a aparecer la opción para autocompletarla.
Si están en el documento pueden entrar a través del menú *Herramientas -> Editor de secuencias de comandos*

> **Nota**
Para usar la función del valor de UVA o dólar es necesario importar el script [GetValueByDateAndKey.gs](../blob/master/GetValueByDateAndKey.gs) al proyecto de Google Script.

> **Cotización del dólar**
Actualmente la última cotización que devuelve la API es del 31-01-2019. https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIOR_D_0_0_26&start_date=2019-01-31&end_date=2019-03-05&format=json
Por este motivo agrego el script [cotización dólar](../blob/master/CotizacionDolar.gs).

### Nombre de las funciones

* Inflación -> inflacion
* Dólar -> valueDolar y cotizacionDolar
* UVA -> valueUVA

valueDolar y valueUVA solo reciben un parámetro que es la fecha de la que se quiere consultar la cotización.
inflación recibe 2 parámetros, la fecha de inicio y de fin del período en el que se quiere calcular la inflación acumulada.



# Format transformet

## Descripción
Resolución del *Problema 1* 

## Instalación
### versiónes 
* node 14.17.6
* npm 7.22.0

Una vez descargado, sobre la ruta del proyecto en cualquier terminal, introducir el siguiente comando `npm install`

## Uso
Una vez instalado todo podra correr el codigo con `npm start`

Entonces ya podra hacer un request al siguiente servicio:

POST `http://localhost:3000/api/transform_time` 

Body:

```
{
	"time":"12:39:30",
	"timezone":"-2:00"
}
```

y obtendra una respuesta como la siguiente:
```
{
	"response": {
		"time": "10:39:30",
		"timezone": "utc"
	}
}
```

## Prueba online
Para probar el problema sin necesidad de instalarlo tenemos el siguiente [link](https://format-transformet.herokuapp.com/api/transform_time) para que pueda hacer el POST
con los mismos datos que en local.




# Node HTTP module

## Resumen

El protocolo HTTP es una de las piedras angulares sobre las cuales se sostiene Internet. Mediante este es que un computador se puede comunicar con otro.

La arquitectura basada en este protocolo normalmente se conoce como el modelo cliente - servidor. Bajo este el navegador actua como el cliente, y nuestra aplicacion de `node` como el servidor. En una interaccion normal el cliente va a crear un `request` el cual va dirigido al servidor. Este request va compuesto de varios aspectos:

Verbo HTTP:

- GET

- POST

- DELETE

- PUT

- PATCH

Headers

- Content-Type

- Accept

- Host

- ...entre otros

y una direccion URL, la cual indica que es lo que queremos del servidor. Con esta informacion el servidor una vez recibe el request es capaz de formular un `response`, este `response` puede venir en muchos tipos, puede ser un archivo de `html` o un `json` o cualquier tipo de archivo. El trabajo del servidor es saber atrapar los `request` y crear el `response` adecuado para que cuando este llegue de nuevo al cliente, este pueda ser usado por el usuario.


Node nos permite crear muy facilmente servidores que funcione con el protocolo `HTTP`, mediante el modulo `http` el cual podemos requerir en cualquier archivo.

En esta serie de retos vamos a usar este modulo para crear unos servidores sencillos de node.

### Paso 1:

Vamos a empezar creando la version mas sencilla de de un servidor. En este paso lo unico que tienes que hacer es requerir el modulo `http` en el archivo `httpServer.js` , y luego crear un servidor usando el comando:

- createServer()

este servidor de responder a todos los request que se le hagan, un documento de `html` que contega un tag `h1` con el texto `Hola mundo desde node`.

### Paso 2

En este reto vamos a crear un servidor que sirva archivos estaticos.

Tenemos 3 tipos de archivos estaticos, dentro de la carpeta `public` dentro de `publicFilesServer`.

Tu reto sera crear un servidor de node el cual devuelva los contenidos de cada archivo dependiendo de la url del `request` de la siguiente manera:

- Si la url es `/` el servidor debe crear un `response` en el cual devuelva los contenidos del archivo `index.html`

- Si la url es termina en `.css` el servidor debe crear un `response` en el cual devuelva los contenidos del archivo `style.css`

- Si la url es termina en `.jpg` el servidor debe crear un `response` en el cual devuelva la imagen del archivo birds.jpg

Para lograr esto vas a tener que usar, los modulos:

- http

- path

- fs

y tambien un poco de expresiones regulares para identificar el tipo de archivo que tienes que devolver.




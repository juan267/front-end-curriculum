# Mongo Node Driver

##Resumen

Ya aprendimos como usar Mongo desde la linea de comando.

Ahora necesitamos aprender como utilizar Mongo desde una aplicacion de Node. Mongo es una base de datos que esta diseñada para funcionar con muchos lenguajes de programacion.

La forma en que cada lenguaje sabe como comunicarse con esta base de datos es medianto un driver. El Driver es basicamente una interfaz para que nos podamos comunicar con Mongo usando Node como nuestro lenguaje de programacion. De forma que el proposito de los siguientes pasos es que aprendas a usar el Driver de Mongo para Node.

##Pasos 1:

Lo primero es crear el directorio `mongoDB-driver`, una vez lo tengas creado, vamos a usar `npm` para instalar unos modulos de `node`.

Ejecuta el siguiente comando en la terminal parado sobre la carpeta recien creada:

```bash
$ npm init
```

Este comando va hacerte unas cortas preguntas, y luego va a dejar creado un `package.json` dentro de la carpeta. Este archivo es el manifiesto de los modulos que vamos a utilizar dentro de esta carpeta.

Ahora para instalar los modulos ejecuta el siguiente comando en la terminal:

```bash
$ npm install --save mongodb
```

Este comando nos va a dejar instaldo el Driver de Mongo para Node, listo para que lo usemos en nuesta aplicacion.

###Paso 2:

Crea el archivo `app.js`. Este archivo va a contener todo el codigo de nuestra aplicacion, la cual por el momento hace solo una cosa muy sencilla, la cual es imprimir en la terminal todos los `title` de las peliculas que se encuentran dentro de la base de datos `video` coleccion `movies`.

Lo primero que tenemos que hacer es requerir el modulo de mongo en nuestro archivo de `app.js` esto lo podemos hacer de esta forma:

```javascript
var mongoClient = require('mongodb').MongoClient
```

Esta linea esta requiriendo el modulo `mondodb` el cual instalamos con `npm` y luego esta guardando en la variable `mongoClient` el valor de la propiedad `MongoClient` que viene del modulo.


###Paso 3:

Lee la documentacion de el Driver de Node en la siguiente pagina [Mongo Node Driver](http://mongodb.github.io/node-mongodb-native/2.1/quick-start/)

En la seccion de `Connect to MongoDB` vas a encontrar como conectarte a una basae de datos de mongo desde node.

Usando esta informacion escribe el codigo necesario para conectarte a la base de datos `video`, una vez estes conectado imprime en la consola el mensaje: `Exitosamente conectado al Servidor`

###Paso 4:

Cambia tu codigo para que imprima en la consola todos los `title` de las peliculas dentro de la coleccion `movies` que creamos en retos pasados.



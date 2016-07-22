# Mongo y Express

##Resumen

En este reto vamos a integrar Mongo con el framework de aplicaciones web construido en Node llamado `Express`

Esta es una combinacion muy popular de aplicaciones [universales][universal] *(Todo el stack esta hecho con javascript)*. Stacks muy populares como MEAN y MERN, usan `node`, `mongo` y `express` como su backend por lo cual es una buena idea entender como funcionan en conjunto. Si quieres leer mas sobres estas sigue los siguientes links:

[MEAN](http://meanjs.org/)
[MERN](http://mern.io/)

##Pasos

###Paso 1: Crea el esqueleto de Express

Por ahora no vamos a utilizar el generador de express si no que vamos a hacerlo todo desde cero.

Para esto primero crea una carpeta llamada `mongoExpress`, dentro de esta crea un `package.json` usando `npm` e instala los siguientes modulos:

```bash
$ npm install --save body-parser consolidate express mongodb nunjucks
```

Como puedes ver estamos instalando varios modulos, en esta aplicacion en este momento es una buena idea investigar para que sirve cada uno o por lo menos los que nunca habias visto. Una busqueda rapida en google deberia a la pagina de documentacion de cada modulo.

crea dentro de la carpeta el archivo `app.js` , este sera el archivo donde escribiremos todo el codigo relacionado con express y mongo.

###Paso 2: Prende el servidor

Antes de todo tenemos que probar que podamos correr el servidor de express, para esto tenemos que configurar el mismo

Empieza requiriendo los modulos

- express (crea `app` llamando esta funcion)
- consolidate (Dale el nombre `engines`)
- mongodb (Dale el nombre `mongoClient`)
- bodyParser

luego configuramos a `app` para que sepa que motor de templating usar en las vistas con las siguientes lineas:

``` javascript
app.engine('html', engines.nunjucks);
```

Seguimos diciendole que tipo de extension van a tener las vista:

```javascript
app.set('view engine', 'html');
```

Luego le decimos en que lugar puede encontrar las vistas:

```javascript
app.set('views', __dirname + '/views')
```

Para que esto funcione te podras imaginar que toca crear una carpeta llamada `views` en el root de nuestro proyecto.

Por ultimo usamos `bodyParser` para que nos ayude a capturar los parametros que vienen en los request

```javascript
app.use(bodyParser.urlencoded({extended: true}))
```

Finalmente dile al servidor en que puerto debe correr y que se quede escuchando request que llegen a este:


``` javascript
  var server = app.listen(3000, function(){
    var port = server.address().port
     console.log('Express server listening on port %s.', port);
  })
```

con esta configuracion deberias poder ir a la terminal y ejecutar el comando

```bash
$ node app.js
```

y ver que tu servidor se queda escuchando requests.


###Paso 3: Integralo con mongo

Ya que tenemos un servidor de express listo y configurado es hora de integrarlo con Mongo.

Para esto vas a usar el conocimiento adquirido en el reto pasado. Como te podras imaginar el proceso es el mismo solo que esta vez dentro del callback de la conexion a la base de datos vamos a crear rutas de express.

Tu reto es:

1. Conectarte a la base de datos `video`.
2. Crear la ruta `get /`.
3. La ruta `get /` debe mostrar la vista `index` la cual contiene una lista de todos los titulos de las 100 primeras peliculas que se encuentran en la coleccion `movies`

###Paso 4: Termina la aplicacion

Vamos a hacer un CRUD  con una intefaz de usuario web gracias a la ayuda de express.


Crea las rutas
- *get /movies/new*: Debe mostrar un formulario para crear una pelicula, en la vista `new.html`

- *post /movies* : Debe crear un documento en la coleccion `movies` con los atributos `title`, `year`, `imdb`.



[universal]: https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.e9h5568m0

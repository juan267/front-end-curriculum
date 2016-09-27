# CRUD en MongoDB

##Resumen

En esta serie de retos vamos a trabajar con la base de datos [MongoDb](https://www.mongodb.com/).

Mongo es una base de datos no relacional, esto quiere decir que no funciona como las bases de datos tradicionales las cuales estaban compuestas por Tablas, filas y columnas y en donde el lenguaje de query que se utilizaba era SQL. En cambio Mongo esta compuesto por colecciones y documentos.

En si como tal Mongo es muy parecido a un gran objeto de JSON, por lo cual es un perfecto match para utilizar con javascript ya que el lenguaje de query es muy parecido a como se maneja un objeto de javascript.

Lee este articulo para investigar mas entre las diferencias entre SQL y NoSQL

[SQL vs NoSQL](https://www.sitepoint.com/sql-vs-nosql-differences/)

Lo mas basico e importante a la hora de usar una base de datos es saber como hacer un CRUD con ella. CRUD es un acronimo para:

- C: Create
- R: Read
- U: Update
- D: Delete

Esto quiere decir que podamos, crear registros, leerlos, modificar sus valores y borrarlos.

Antes de empezar a trabajar asegurate de tener Mongo instalado en tu computador para esto puedes seguir esta guia: [Mongo](https://www.mongodb.com/download-center?jmp=nav#community)

##Pasos

###Setup

En este repo vas a descargar un `dump` de una base de datos de peliculas. Un `dump` basicamente es una copia de toda una base de datos, el cual podemos restuarar en nuestro computador.

Para restuarar el `dump` sigue estos pasos:

- Parate sobre el directorio `creating_documents` en la terminal y ejecuta el comando

```bash
$ mongorestore dump
```
Con este comando mongo crea una base de datos llamada `video`, la cual contiene las siguientes colecciones:

- movieDetails
- movies
- moviesScratch
- reviews

Una vez hayas hecho esto ya estas listo para empezar a usar la base de datos, inicia la linea de comando de mongo en la terminal con el comando:

```bash
$ mongo
```

una vez ejecutes este comando vas a notar que la terminal quedo dentro de la interfaz de mongo, desde este punto es de donde puedes administrar todas las bases de datos que tengas en tu computador.

Ahora bien tenemos que usar la base de datos que acabamos de restaurar osea `video`. Primero asegurate que esta este en el sistema, para esto ejecuta el comando:

```bash
$ show dbs
```

al ejecutar este comando deberias ver una lista de bases de datos que existen en tu computador entre ellas `video`

Ahora tenemos que indicarle a mongo que queremos usar la base de datos `video` para esto ejecutamos el comando:

```bash
$ use video
```

mongo deberia responderte con el mensaje `switched to db video`, para verificar que efectivamente estamos en video puedes correr el comando:

```bash
$ db
```

y deberias ver que mongo imprime `video`

Perfecto ya estamos listos para empezar a hacer consultas a nuestra base de datos.

###Paso 1: Leer

En este primer paso vamos a usar el lenguaje de query de Mongo para leer informacion que existe dentro de la base de datos.

Tu primer reto es hacer una consulta a la base de datos `video`, coleccion `movieDetails`, para encontrar cual de las siguientes peliculas fue hecha en el 2013, con rating 'PG-13' y que no gano ningun premio.

estas son las opciones:

- World War z
- Evil Dead
- Man of Steel
- Iron man 3
- A Decade of Decadence,Pt 2: Legacy of Dreams

Cuando sepas la respuesta, dicela al profesor para que el te diga si es correcta.


###Paso 2: Leer, proyectando
Actualmente cuando haces una consulta mongo nos devuelve el documento completo. Como crearias una consulta que devuelva un resultado de esta manera:

``` JSON
{"title": "Love Actually"}
```
No estamos preguntado por que devuelva exactamente esa pelicula si no el formato de esta respuesta.

###Paso 3: Leer, mas a fondo

Usando la base de datos `video` , coleccion `movieDetails`. Haz una consulta que nos diga cuantas peliculas listan a `Sweden` como su segundo pais en el array de `countries`.

###Paso 4: Leer, leyendo arreglos

Usando la base de datos `video`, coleccion `movieDetails`. Haz una consulta que nos indique cuantos documentos existen en la coleccion que listen UNICAMENTE los generos: "Comedy" y "Crime"  con "Comedy" primero en la propiedad `genres`.

###Paso 4: Leer, leyendo arreglos 2

Usando la base de datos `video`, coleccion `movieDetails`. Siguiendo la consulta anterior, haz una nueva consulta que nos indique cuantos documentos existen en la coleccion que listen los generos: "Comedy" y "Crime" como generos sin importar cuantos otros generos tenga la pelicula.


###Paso 5: Modificando

Ahora vamos a empezar a modificar documentos ya existentes dentro de la base de datos. Cual de los siguiente operadores usarias para modificar el valor del campo `plot` de algun documento dentro de la coleccion `movieDetails` :

- $set
- $unset
- $rename
- $slice
- $sort
- $push


###Paso 6: Modificando a fondo

Usando la base de datos `video` coleccion `movieDetails`. Escribe un comando que que remueva el campo `tomato.consensus` para todos los documentos que cumplan los siguientes cirterios:

- El numero de de votos imdb es menor a 10,000
- El año de la pelicula es entre 2010 inclusive, y 2013 inclusive
- El campo `tomato.consensus` tiene un valor `null`

Cuantos documentos cumplen con esta condicion y requieren un update para eliminar el campo `tomato.consensus` ?



###Paso 7: Creando

Crea el siguiente documento en la base de datos `video`, coleccion `movies`:

``` JSON
{
  "title" : "Spirited Away",
  "year" : 2001,
  "imdb" : "tt0245429",
  "type" : "movie"
}
```

El dump inicial de la base de datos contenia 3365 documentos en la coleccion `movies` de forma que deberias quedar con 3366 documentos.

###Paso 8: Creando a fondo

Mira el archivo `insertOne.js` copia la primera linea y ejecutala en la terminal en la base de datos `video`.

Luego haz lo mismo con la segunda linea. Que diferencia tienen ambos comandos, en que caso usarios cada uno de ellos ?

###Paso 9: Creando Muchos

Crea todos los documentos dentro del arreglo de abajo con un solo comando dentro de la coleccion `moviesScratch`.

``` JSON
[
   {
    "imdb" : "Spirited Away",
    "year" : 2001,
    "imdb" : "tt0245429",
    "type" : "movie"
   },
   {
    "imdb" : "tt0104652",
    "title" : "Porco Rosso",
    "year" : 1992,
    "type" : "movie"
   }
]
```

El dump inicial de la base de datos contenia 8 documentos en la coleccion `moviesScratch` de forma que deberias quedar con 10 documentos.

###Paso 9: Creando Muchos a fondo

Prueba los comandos que encontraras en los archivos:

- insertMany-ordered-imdb-ids.js
- insertMany-ordered.js
- inserMany-unoredered.js

Cuales son las diferencias de todas estas formas de crear muchos documentos al tiempo?

Cuando usarias cada una de estas formas?




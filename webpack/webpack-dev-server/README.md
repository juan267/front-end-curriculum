#Sass e Imagenes

##Resumen

Webpack tambien contiene un mini servidor el cual nos sirve para servir nuestros archivos estaticos. Este servidor ademas contine muchas de las ayudas modernas como `live reloading` y `hot-module-reloading`, funcionalidades que nos ahorran tiempo de forma significativa cuando estamos en modo de desarrollo.

En este reto vamos a ver como podemos usar este gran ayuda en nuestro proyectos.

##Pasos

###Paso 1:

Empieza instalando las dependecias de este proyecto, ya inlcuimos todos los modulos que vas a necesitar menos `webpack-dev-server`.

Instal `webpack-dev-server` como una dependencia de desarrollo.

###Paso 2:

Ve al archivo `webpack.config.js`. Vas a ver que ya tenemos todos los `loaders` configurados para este proyecto, pero tenemos una llave adicional llamada: `devServer`. Dentro de esta llave vamos a poner la configuracion de `webpack-dev-server`.

Ingresa este codigo dentro de la llave:

```javascript
inline: true,
contentBase: './build',
port: 3000
```

Con esta configuracion le estamos diciendo al servidor de webpack que prenda el servidor en el puerto `3000`. Le decimos que los archivos estaticos se encuentran dentro de la carpeta `./build` y la opcion `inline` hace que webpack haga un poco de magia y nos permita hacer `live-reload` de nuestro codigo de forma que si cambiamos algun contenido dentro de `src` la pagina se refresca automaticamente y nos refleja los cambios que hayamos realizado.

###Paso 3:

Para este punto si ejecutas el comando:

```bash
$ node_modules/.bin/webpack-dev-server
```
Nuestro servidor se va a morir por que el esta buscando un `index.html` dentro de `./build` donde no existe ninguno. Como puedes solucionar este problema?

###Paso 4:

Soluciona el problema anterior y sigue probando hasta que puedas ver el contenido de la pagina cargado en la url: `http://localhost:3000`




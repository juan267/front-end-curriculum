#Inlcuyendo CSS

##Resumen

Webpack sirve para mas cosas que solo, incluir y transpilar nuestros archivos de Javascript, tambien puede manejar nuestros archivos de `CSS` `Imagenes` y `fonts`.

En este reto vamos a ver como usurlo para inlcluir archivos de `CSS`. Incluir archivos de CSS con webpack traer multiples beneficios. Primero es que podemos aprovechar todas las funcionalidades de webpack para `minificar` y comprimir estos archivos, asi mismo los loaders que inlcuyen el css hacen al muy especial que es poner todo el `css` `inline` en el archivo de `html`. Lo que quiere decir que realizamos menos request al servidor y nuestra pagina va a cargar mas rapido.

##Pasos

###Paso 1:

Instala todos los modulos que ya estan listados en el `package.json` con el comando:

```bash
$ npm install
```

Te daras cuenta que solo tenemos los loaders para convertir `ES6` en `ES5` pero no tenemos nada relacionado con `CSS`. Investiga en internet que loaders nos podrian ayudar hacer esto e instalalos en el proyecto.

Puedes empezar a buscar [aca](https://webpack.github.io/docs/list-of-loaders.html)

###Paso 2:

Ve al archivo `webpack.config.js` y escribe el codigo necesario para qeu funcione los `loaders` de `babel` y de `css`.

*NOTA:* Esto incluye crear el `.babelrc`

###Paso 4:

Ve al archivo `src/style.css`, y require tus estilos usando syntax de `commonJS`:

```javascript
require('./style.css')
```

No es impresionante esto que podamos requerir achivos de `CSS` como si fueran de `javascript`!!

###Paso 5:

Compila el codigo dentro de la carpeta bundle, con el comando de `webpack` que ya conoces.

Abre el archivo `index.html` en el navegador deberias ver que tus estilos aplican y el codigo de `ES6` que tenemos en `main.js` funciona.



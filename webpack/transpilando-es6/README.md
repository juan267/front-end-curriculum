# Transpilando ES6

##Resumen

ES6 o ES2015, es la forma actual y moderna en la que escribimos javascript. El problema es que los navegadores todavia no entienden grande parte de las nuevas funcionalidades de este tipo de javascript. Lo cual nos obliga a transpilar el codigo que escribimos en `ES6` a `ES5` que si entiende el navegador.

Para hacer esto usamos el increiblemente popular libreria llamada [Babel](https://babeljs.io/). Babel va ser la encargada de convertir todo el codigo escrito en ES6 e incluso ES7 a ES5.

Webpack se integra con Babel mediante algo llamando un `loader`. Basicamente un `loader` es una accion que ocurre antes de que enviemos nuestro codigo al navegador, la cual transforma el codigo de un modulo en otra cosa. En este caso el `babel-loader` va a hacer el proceso de `transpilado`.

De forma que tenemos que configar Webpack para que utilize Babel en este proceso, y esto es lo que vamos hacer en este reto.

##Pasos

###Paso 1:

Primero tenes que instalar los modulos necesarios para hacer todo este proceso. Estos ya se encuentran en el package.json por lo cual solo tienes qu ejecutar:

```bash
$ npm install
```

Acabamos de instalar:

- babel-core: Esta es la libreria principal de babel y sin ella no podemos hacer nada.
- babel-preset-es2015: Este es el pedazo de babel que le dice como convertir codigo escrito en ES6 o es2015 a ES5. Existen muchos `presets`, cada uno hace cosas diferentes por ejemplo mas tarde usaremos uno para convertir `JSX` a `ES5`. Lee mas sobre los presets en esta documentacion: [Presets](https://babeljs.io/docs/plugins/)
- babel-loader: Este es el pedazo que le dice a Webpack como usar babel para hacer todo el transpilado.

###Paso 2:

Ahora si vas al archivo `webpack.config.js` vas a ver que ahora tenemos dentro del objecto de Webpack una llave:

```javascript
module: {
  loaders: []
}
```

dentro de `loaders deberas configurar webpack para que use el `loader` de Babel.

###paso 3:

Babel nececita que crees un archivo llamado `.babelrc` dentro del cual le decimos que `presets` y `plugins` vamos a usar lee la documentacion de [.babelrc](https://babeljs.io/docs/usage/babelrc/) para que entiendas que es lo que tienes que hacer.

###Paso 4

Corre desde la terminal el comando para compilar los archivos y que se cree la carpeta `build`:

```bash
$ node_modules/.bin/webpack
```
 y abre `index.html` en el navegador.

si miras la consola de javascript deberias ver el mensaje:

- `Yayyy soy ES6`




# Primer Build De Webpack

##Resumen

Webpack, es una herramienta muy especial. Para los desarrolladores que ya llevan mucho tiempo en esta profesion es una completa bendicion, ya que soluciona uno de los problemas mas tediosos del desarrollo de front-end, el cual es el manejo de dependencias.

Anteriormente la unica forma de manejar dependencias de archivos de JS era organizando los `<script></script>` tags dentro de los archivos `html`. Esto podia sera increiblemente tedioso de hacer y muy complejo de manejar.

Gracias a webpack ahora podemos solo requerir las dependencias que sabemos que necesitemos en el archivo que estemos trabajando usando ya sea `commonJS` o `ES6` modules.

Aparte de esto webpack realiza un sin fin mas de operaciones, como minificar nuestros archivos de js, agruparlos todos dentro de un archivo unico de forma que reduzcamos la cantidad de requests del cliente, transpilar nuestro codigo de JS del futuro a ES5 que el navegador entienda y muchas otras cosas.

##Pasos

###Paso 1:

Como podras notar en este reto ya te proveemos varios archivos. Tienes un `index.html` donde hay un esqueleto basico. una carpeta `src` donde vamos a esribir el codigo `js` de la aplicacion. Un `package.json` para manejar los modulos de JS que vamos a utilzar, y por ultimo y mas Importante un `wepack.config.js` donde escribiras el codigo para que webpack funcione.

Revisa el `package.json` para ver que modulos vamos a instalar y no olvides correr el comando a continuacion para que realmente queden instaladas:

```bash
$ npm install
```

Una vez tengas eso si le das una buena mirada a `index.html` podras ver que este tiene el siguiente codigo:

```html
<script type="text/javascript" src="./build/bundle.js"></script>
```

Inmediatamente deberias notar que como esta actualmente el contenido del proyecto esta linea no va a funcionar. Dado que no existe el path: `./build/bundle.js`.

Esto es por que `bundle.js` va a ser el archivo que webpack va a generar y el que finalmente vamos a servir en el cliente, pero todavia no lo hemos generado.

por ultimo en `src/main.js` podras ver que usamos la syntax de `commonJS` para requerir el modulo de `jquery` y usarlo para poner el string `Hola Mundo desde Webpack!!!!` en el DOM.

Al final del reto este string deberia aparecer en el navegador.

###Paso 2:

Ve al archivo `webpack.config.js` como podras ver lo unico que hay es:

```javascript
module.exports = {
  // Tu codigo va aca
};
```

para este punto ya deberas saber para que sirve la syntax `module.export`. Dentro de este objeto vamos a escribir el codigo de webpack.

Tienes que especificarle cual va ser el archivo de entrada o `entry`, asi mismo como la ubicacion donde debe quedar el `output`.

###Paso 3:

Una vez tengas el archivo `webpack.config.js` debidamente configurado ve a la terminal y ejecuta el comando:

```bash
$ node_modules/.bin/webpack
```

Este comando va a correr webpack usando la configuracion del archivo `webpack.config.js` con lo cual deberias tener al final una carpeta `bundle` creada con el archivo `bundle.js` que contiene el codigo de nuestra aplicacion.












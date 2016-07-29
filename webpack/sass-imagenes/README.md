#Sass e Imagenes

##Resumen

Aparte de compilar nuestro CSS webpack tambien puede preprocesarlo primero en usando `Sass` o `less` o cualquier preprocesador de CSS que desees usar. De esta forma puedes creas tus hojas de estilo de la forma que desees.

Aparte de esto webpack tambien nos puede ayudar a la hora de importar imagenes y `paths` de archivos relativos. Para hacer esto vamos a usar otro loader mas.

De modo que en este reto vamos a introducir dos nuevos `loaders`:

- url-loader: Nos ayuda a importar imagenes
- sass-loader: Nos ayuda a precompilar css escrito con sass


##Pasos

###Paso 1:

Empieza instalando las dependecias de este proyecto, ya inlcuimos todos los modulos que vas a necesitar.

###Paso 2:

Ve al archivo `webpack.config.js`. Empieza por escbrir el codigo necesario para que podamos compilar ES6 y JSX en ES5 valido. Asi mismo como para poder inlcuir `CSS` en nuestro proyecto.

###Paso 3:

Como podras darte cuenta en el archivo `style.scss` tenemos un poco de `sass` y tambien importamos una imagen.

Para hacer que esto funcione tenemos que configurar nuestro `webpack.config.js` para que compile estos cambios.

lee la documentacion de:

- [sass-loader](https://github.com/jtangelder/sass-loader)
- [url-loader](https://github.com/webpack/url-loader)

Para lograr esto.

###Paso 4:

Compila tu codigo, y abre index.html en el navegador para ver que todo funcione.



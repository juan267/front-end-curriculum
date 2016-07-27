# Transpilando JSX

##Resumen

Como ya sabes babel sirve para muchas mas cosas que solo convertir ES6 a ES5, entre una de esas funciones babel nos sirva para convertir `JSX` el cual usamos dentro de nuestro componentes de React y que no es javascript Valido en ES5 que el navegador si entienda.

De modo que siempre que uses `JSX` es necesario que uses babel para que los transpile.


##Pasos

###Paso 1:

Primero tenemos que instalar las dependencias ya listadas en el `package.json`. Para este punto asumimos que ya sabes cual es el comando para hacer esto.

Adicionalmente a esto vas a notar que falta un modulo para que babel pueda convertir `JSX` a ES5 es tu reto salir a internet y encontrar cual es.

###Paso 2:

Una vez tengas todo instalado puedes ir al archivo `webpack.config.js` y empezar a configaurar webpack para que use babel y los loaders para cargar `css`.

###Paso 3:

Agrega el archivo `.babelrc` con la configuracion necesaria para que que compile tanto ES6 como JSX.

###Paso 4:

Compila todos los archivos con el comando de webpack que ya conoces en la terminal. Y luego abre el archivo `index.html` en el navegador, deberias ver tanto el componente de React funcionando como los estilos de CSS aplicados.

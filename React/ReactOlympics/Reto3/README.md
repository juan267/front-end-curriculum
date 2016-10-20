 #De createElement a JSX

##Resumen

En este reto sencillo vamos a convertir el componente `HelloWorld` que se encuentra en el archivo `src/helloworld.js`, a Usar JSX.

Esta vez no vamos a poner a babel a transforma el JSX en ES5 en el navegador si no que lo vamos hacer antes de enviar esto codigo al cliente.

##Pasos

###Paso 1:

Ve al archivo `src/helloworld.js` y convierte el codigo de ahi a usar JSX

###Paso 2:

Crea un `package-json` usando `npm` e instala el modulo babel con el siguiente comando:

```bash
$ npm install --save-dev babel-cli babel-plugin-transform-react-jsx
```

Con este comando instalamos el modulo de babel y el preset que convierte JSX a ES5

###Paso 3:

Crea la carpeta `build`. Dentro de esta carpeta es donde vamos a dejar el codigo de ES5 que realmente entiende el navegador y el que le vamos a mandar, solo que todavia no lo hemos creado.

ve a la terminal y ejecuta el siguiente comando:

```bash
$ node_modules/.bin/babel src/helloworld.js -o build/helloworld.js  --plugins transform-react-jsx
```

Este comando lo que esta haciendo es tomar como fuente el contenido de *src/helloworld.js* y transformandolo usando el plugin *transform-react-jsx* en un archivo con codigo en ES5 el cual queda ubicado en `build/helloworld.js`

###Paso 4:

Haz que tu pagina funcione en el navegador para este momente solo falta un paso muy sencillo que deberias ser capaz de inferir la pista que te damos es que involucra el archivo `index.html`.




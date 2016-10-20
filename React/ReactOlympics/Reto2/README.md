# BABEL y JSX

##Resumen

Si quisieramos podriamos escribir todas nuestras aplicaciones de react mediante el uso de React.createElement, pero esto se puede volver dificil de leer y mantener. Por lo cual el equipo de react se invento algo llamado *JSX*


JSX nos permite escribir comoponentes de react como si estuvieramos usando HTML dentro de Javascript. Esto puede ser muy raro al principio e ir en contra de todo lo que hemos aprendido de separa la presentacion de la logica, pero con el tiempo notaras como esto es un poderoso avance en la forma que hacemos aplicaciones web.

Ahora bien el navegador no tiene ni idea de que es JSX por lo cual tenemos que compilarlo antes de mandarlo al navegador en ES5 que el navegador si entienda. Para eso vamos a utilizar una libreria llamada [Babel](https://babeljs.io/)

##Pasos

###Paso 1:

En el archivo `index.html` vas a encontrar el esqueleto te una pagina web en el cual incluimos tanto React como Babel version 5.

Tu reto es crear el componente `HelloReact` usando `React.createClass` el cual haga render de un `<h1></h1>` con cualquier texto y un `<p></p>` con cualquier texto.

##Paso 2:

Haz render del componente  `HelloReact` en el body del documento.

*NOTA:* Desde la version 6 de babel este no soporta compilar automaticamente codigo desde el navegador si no que tenemos que hacer este proceso antes de enviarlo al cliente. Esto lo haremos en retos posteriores.








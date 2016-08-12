# AJAXificando Hacker News

## Objetivos de Aprendizaje

  * Hacer request de AJAX usando jquery

## Resumen

En este reto vamos a convertir una aplicacion de Express que ya funciona, en una que realize request de AJAX. Al final del reto los usuarios de tu aplicacion podran  crear Posts y Votos y eliminarlos de forma asyncrona.

Para empezar clona este repositorio y corre el comando `npm install` para instalar las dependencias.

## Pasos

### Paso 1 : Votos

Haz click en el boton para hacer un `upvote`, te daras cuenta de que la pagina se recarga y el nuevo voto aparece. Tu trabajo sera hacer que esta operacion se ejecute de forma asycrona al usar AJAX.

Si lo haces de forma correcta, el acto de hacer click en el boton de upvote no va a causar que la pagina se refresque, si no que unicament va a actualizar el valor de la cuenta de votos de ese post y al mismo tiempo enviar el request a nuestra base de datos.

Este es el flujo basico de este request hecho con AJAX:

1. Tienes que adjuntar un `event listener` a los `a` tag que tengan href con el valor: `/posts/{{post._id}}/votes`
2. Para impedir que el navegador se refresque, el callback del event listener debe prevenir el comportamiento `default` del navegador al hacer click en un link.
3. Debe despues hacer el request de Ajax al servidor, a la url que esta en el atributo `href` del `a` tag.
4. El servidor va actualizar la cantidad de votos del post especifico en la base de datos.
5. El servidor va a enviar una respuesta.
6. El cliente, despues de ser notificado que ha recibido la respuesta exitosamente del servidor, puede manipular el `DOM`. En este caso por ahora solo queremos cambiar el color de la flecha a que se ponga `roja`.
7. Si refrescas la pagina deberias ver que el numero de votos del `post` se incrementa.

Esta es la syntaxis basica de como realizar un AJAX request:

```javascript
  // $.ajax recibe un objeto de opciones para configurar el request
  var ajaxRequest = $.ajax({
    // Estos dos atributos determinan la ruta del servidor a la que ira el request.
    url: "/foo",
    type: 'GET',
    // El atributo 'data' determina que datos enviamos al servidor
    // El servidor podra acceder a estos valores mediante el objeto 'params'
    // Si el servidor solo necesita conocer la informacion que contine la URL, este atributo no es necesario.
    data: { bar: 'baz' }
  })

  // La funcion .done recibe un callback, el cual solo se va a dispara si el servidor reponse con un codigo de estado exitoso. El callback recibe como argumento la respuesta del servidor.
  ajaxRequest.done(someCallbackFunction)

  // como .done, la funcione .fail se dispara cuando el servidor responde con un codigo de estado de error.
  ajaxRequest.fail(someOtherCallbackFunction)
```

Que es lo que necesita saber el servidor par actualizar el numero de votos en el servidor? Que necesita saber el cliente para actualizar el DOM ? Como hace el cliente para obtener los datos que le envia el servidor y viceversa ?

### Paso 2 : Votos ahora si enserio

Perfecto, en este punto votar exitosamene un post hace que la flecha cambie de color. Peor el punto es que el numero de votos aumente!

Tu tarea en este paso es actualizar el numero de votos de forma asyncrona cuando alguien hace click en esa flecha.

Para este paso va a ser necesario que cambiemos un poco de codigo que vive en nuestro servidor.

si vas al archivo `app.js` vas a encontrar una ruta que dice lo siguiente:

```javascript
app.get('/posts/:id/votes', function(req, res){
  var id = req.params.id
  post.addPostVote(id, function(postDoc){
    res.redirect('/')
  })
})```

Esta ruta en este estado actual, toma el `id` del post que estamos upvoteando de la URL, e invoca la funcion `addPostVote` la cual te retamos a que investigues de donde viene. Una vez addPostVote hace su trabajo, invoca el callback que le pasamos como segundo argumento, el cual recibe el `post` actualizado con un nuevo voto y redirecciona a la ruta `root`.

Como tal este comportamiendo funciona muy bien para cuando nuestra aplicacion no era asyncronica pero ahora la verdad no es nada util. Tu trabajo sera cambiar el codigo dentro de esta, explicitamente dentro del callback que recibe `addPostVote` para que en vez de redireccionar al `root` nos envie como respuesta el `postDoc` en formato `JSON`.

algo por el estilo de:

```javascript
res.setHeader('Content-type', 'application/json')
res.send(JSON.stringify(//Que va aca???))
```

De esta forma en el cliente vamos a recibir `postDoc` como un objeto con todas las propiedades de este incluyendo su numero de votos actual y el `id` para saber a cual de los post tenemos que actualizar en el DOM.

### Paso 3 : Borrando

Ahora que ya tienes los votos funcionando. Hagamos que la `x` para borrar un post funcione.

Al hacer click en la `x` ese post deberia borrarse de la base de datos, y como consecuencia desaparecer del DOM.

Recuerda el flujo para lograr que esto funcione. Primero tenemos que disparar un request al servidor a esta ruta:

```javascript
  app.get('/posts/:id/delete', function(req, res){
    var id = req.params.id
    post.deletePost(id, function(postDoc){
      res.redirect('/')
    })
  })
```

Esta ruta igual que la anterior necesita que le hagamos cambios para que funcione de manera asyncronica. Que se te ocurre que deberia devolver, Que posible informacion te serviria tener en el ciente para actualiar el DOM ? Recuerda que el servidor puede responder con `strings`, `JSON` o incluso con `HTML`. En la carpeta `views` tenemos el archivo `_post.html` sera que te puede servir para algo ? por otro lado dentro del archivo `post.js` tenemos la funcion `getAllPosts` la cual tambien podria ser util.

Una vez que sepas que te serviria que devolviera el servidor, ve al codigo del cliente e implementa loss cambios necesarios que tienes que hacer en el DOM.


### Release 3 : Creando Posts

Uff borrando terminado, ahora nos aproximamos a tu reto mas dificil, crear un Post. Como podras haber notado al final de la pagina se encuentra un formulario para crear un Post. Este funciona pero no lo hace de forma Asyncronica.

Para hacer el cambio deberas lograr que al hacer el `ajax` request este envie los datos dentro del formulario a la ruta para crear un post. Para lograr esto investiga como funciona el la funcion de jQuery `.serialize()`.

Igual que en el paso anterior vas a tener que hacer modificaciones a esta ruta

```javascript
app.post('/posts', function(req, res){
  var title = req.body.title
  var author = req.body.author
  var url = req.body.url

  post.addPost(title, author, url, function(postDoc){
    res.redirect('/')
  })
})
```

Y muy seguramente tendras que usar el partial `_post.html`.

Una vez tengas la respuesta del servidor lista, actualiza el DOM de forma necesaria.

### Release 4 : Estas seguro que todo funciona?

Excelente, creaste un nuevo post!, Pero funciona su boton de `upvote`, funciona la `x` para borrarlo? probablemente no :(

Hay muchas formas de solucionar este problema. [La implementacion de event delegation de jQuery](https://learn.jquery.com/events/event-delegation/) puede ser util.

### Release 5 : Validaciones

Actualmente los usuarios pueden crear `post` con titulos en blanco. Deberias prevenir que el usuario no pueda hacer esto.

Para lograr esto tendras que modificar el codigo en las rutas de forma que antes de crear el `post` valides que la informacion que te enviaron era correcta. Si no lo es debes enviar una respuesta al cliente con un codigo de error dentro del rango de los `400`lo que quiere decir error del cliente. Si no te acuerdas muy bien de tus codigos HTTP [HTTP status cats](https://www.flickr.com/photos/girliemac/sets/72157628409467125/) estan al rescate.

La funcione `$.ajax` al recibir una respuesta con un codigo dentro de los `400` va a dispara el callback de `fail`. Dentro de este deberias actualizar el DOM mostrandole al usuario donde estuvo su error.





# Node Globals

## Resumen

Node viene con una serie de variables Globales las cuales podemos acceder en cualquier parte de nuestras aplicaciones. Estas variables nos proveen informacion relevante al entorno de nuestra aplicacion y nos dejan moldear la aplicacion dependiendo de sus valores.

En esta serie de retos vamos a mirar las variables mas importantes que viene con Node y como las podemos aprovechar.

Para cada paso escribe la respuesta correspondiente en el archivo que te indique. Luego corre tu el archivo en la terminal para verificar que este funcionando de forma adecuada.

### Paso 1: __filename

`__filename` es una variable que nos da acceso al `path` completo hasta el archivo en el que estamos trabajando.

Tu reto es que el correr el archivo `__filename.js` este imprima en la consola un string que diga `"Hola mundo desde __filename.js"` __filaneme debe venir de usar la variable global __filename mas no de quemarla en el string.

* TIP: usa el modulo `path` para acortar lo que devuelve __filename hasta que sea solo el nombre del archivo mas no todo el path hasta este.


### Paso 2: process.argv

`process.argv` es una variable global que nos da acceso a los argumentos que el usuario ingrese a la hora de correr un archivo o programa de node desde la terminal.

Eg: Cuando un usuario hace lo siguiente

``` bash
$ node app.js hola --user juan
```

en este caso `process.argv` se convertiria en un array con los valores: `['hola','--user', 'juan']`

Tu reto es crear una aplicacion de terminal en el archivo `process.argv` la cual podamos iniciar de esta forma:

``` bash
$ node process.argv --user juan --greeting 'como estas?'
```

y que esta imprima en la terminal un string que diga:

"Hola ${user}, ${greeting}"
reemplazando los ${} por los valores de los flags `${user}` y `${greeting}`

En caso de el usuario no pase ambos flags con sus valores, la aplicacion debe imprimir un string que diga:

'Algo salio mal'


### Paso 3:

`process` es un objeto con muchas mas propiedades aparte de `argv`. Dos de esas son las siguientes:

- process.stdout: esta variable contiene el metodo `write` la cual te permite escibir cosas hasta la terminal

- process.stdin: esta variable nos permite recibir informacion que el usuario o otro programa nos este enviando a nuestro programa

- process.exit(): esta propiedad nos permite terminar el proceso actual lo cual significa terminar el programa.

En alrchivo `std-in-out.js` vas a encontrar un array de `questions`. Tu reto es crear una aplicacion que le haga cada una de esas preguntas al usuario y reciba su respuesta. Una vez el programa halla hecho todas las preguntas y recivido todas las respuestas este debe imprimir en la consola un string que diga:

`"Ve a ${respuesta[1]} ${respuesta[0]} puedes terminar de escribir ${respuesta[2]} mas tarde}"

y luego que se cierre el proceso.

process, te deja ejecutar funciones dependiendo de eventos, lo cual vas a tener que hacer para llegar a una solucion. Revisa en la documentacion de node como funciona:

- process.on()
- process.stdin.on()




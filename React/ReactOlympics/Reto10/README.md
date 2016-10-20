#Modificando el Estado de un Container Component

##Resumen

Hasta ahora hemos visto como le podemos pasar datos a nuestros componentes hijos desde un componente `Container` como lo es `Board` mediante el uso de `props`.

Es de esta forma que nuestro Board crea varios `Note` cada uno con su texto unico. Pero como hacemos cuando queremos hacer un cambio de estado desde un componente hijo como `Note` y pasarlo al comoponente `Container` *Board* ?

la respuesta no es tan intuitiva y dircecta como lo es con `props`. En react el flujo de datos solo va en una direccion esto quiere decir que nuestros componentes `Container` son siempre los que le estan diciendo a los hijos que datos deben mostrar. El componente `hijo` no tiene ninguna forma de modificar directamente el estado del componente `Container`.

La forma que lo hacemos es creando un metodo dentro del componente `Container` que reciba como parametros los datos nuevos que el componente hijo quiere mandar y luego modifique el estado del componente directamente ahi.

Ahora esta metodo se lo vamos a pasar como un `prop` a los componentes hijos. De forma que estos puedan invocar esta funcion y el cambio se realize directamente en el componente `Container` el cual va a actualizar su estado y por ende volver a mandar los cambios a los componentes `hijos` y de esa forma dimos toda la vuelta en una sola direccion.

##Pasos

###Paso 1:

Copia el codigo que tengas del reto anterior en el archivo `js/Note.js`.

###Paso 2:

Dentro del componente `Board` crea el metodo `update` el cual debe recibir dos parametros `(newText, i)` con base a estos dos parametros este metodo debe actualizar el texto de la nota que tenga dentro del estado en el index `i` a `newText`. y luego actualizar el estado del componente con un nuevo arreglo de notas que contenga el cambio.

###Paso 3:

Modifica el metodo `render` dentro de `Board` para que cada vez que se cree una nota, le pasemos como `props`  la propiedad `onUpdate` la cual va a ser igual al metodo `update`, y tambien la propiedad `index` la cual va a ser igual al indice de la nota actual sobre la que estemos iterando.

###Paso 4:

Dentro del componente `Note`, en el metodo `save`,  llama el metodo `onUpdate` que pasamos como `props` desde `Board`. Pasale como argumentos el valor del texto que el usuario ingreso en el formulario, y el indice que recibimos como `index` en `props`.

###Paso 5:

Si seguiste todos estos pasos correctamente deberias poder actualizar el texto de las notas usando el formulario.




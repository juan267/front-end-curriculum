#Closures

##Resumen

Una de la propiedades que tienes las funciones en javascript gracias a su naturaleza de `first class citizens` es que las podemos devolver como el resultado de llamar otra funcion.

Esto nor permite hacer uno de los patrones mas importantes del lenguaje el cual es conocido como un `Clousure`.

Un `Clousure` es simplemente una funcion que devuelve otra funcion. Lo importante de esto es que la funcion que se devulve encapsula todas las variables definidas en la funcion que la encapsula.

Eg:

``` javascript

function outer(x,y) {
  return function inner(z) {
    return (x + y) * z
  }
}

```

En este ejemplo la funcion `inner` que devolvemos al llamar `outer` tiene un `closure` sobre las variables `x` y `y` de forma que aunque la funcion `outer` ya alla corrido no perdemos estos valores si no que se mantienen en `inner` para cuando la invoquemos.

Los clousure son un concepto un poco dificil de entender al principio, pero una vez que los empizas a usar te puedes de lo muy utiles que son y sobre todo la importancia que tienen en este lenguaje.

##Pasos

###Paso 1:

Escribe una funcion `nonSense` que recibe como argumento un `string`. Esta funcion debe contener otra funcion adentro llamada `blab` la cual llama un `alert` con el `string`, y es inmediatamente invocada dentro de `nonSense`. `blab` basicamente se ve asi dentro de `nonSense`:


  ```javascript
   var blab = function(){
     alert(string);
   };
  ```

###Paso 2:

Ahora en vez de invocar inmediatamente a `blab` dentro de `nonSense`, cambia el codigo dentro de `nonSense` para que contenga un `setTimeout` que invoque a `blab` depues de 2 segundos de que `nonSense` sea invocada. Como tal la funcion `blab` se debe mantener igual.

###Paso 3:

Ahora en vez de llamar `blab` dentro de `nonSense`, `nonSense` debe devolver a `blab`, sin invocarla.

Ahora llama `nonSense` pasandole cualquier `string` como argumento y guarda el resultado (la funcion `blab`) en una variable llamada `blabLater`. LLama `nonSense` otra vez con un `string` diferente y guarda el resultado en otra variable llamada `blabAgainLater`.

Inspeccion en la consola las variables `blabLater` y `blabAgainLater`. Y luego llamalas (Recuerda que son funciones!!) y mira que pasa.

Felicitaciones acabas de ver un `closure` en accion.

###Paso 4:

Escribe una funcion con un closure sobre las variables de otra funcion. La funcion `outer` deberia recibir solo un argumento el primer nombre de alguien. la funcion interior `inner` deberia recibir el apellido de la persona y  hacer un `console.log` de tanto el primer nombre como el appelido de la persona.

tu funcion deberia funcionar de la siguiente manera:

```javascript
  var nameGenerator = function(firstName){
     //does stuff

      var innerFunction = function(lastName) {
          //does stuff
      };
      //maybe returns something here
  }

  var firstNameStudent = nameGenerator('German')

  firstNameStudent('Escobar') //logs 'German Escbar'
  firstNameStudent('Patiño') // logs 'German Patiño'
```

Como puedes ver en este caso el closure es util para imprimir en la consola el mismo nombre com mucho apellidos diferentes.

###Paso 5:

Crea una funcion llamada `storyWriter` que devuelva un objeto con dos metodos. El primer metodo `addWords` añade palabras a la historia y devuelve la historia. El segundo metodo `erase` resetea la historia de vuelta a un string en blanco. Esta seria un posible implementacion y como usarimos esta funcion:

  ```javascript
  var farmLoveStory = storyWriter();
  farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
  farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

  var storyOfMyLife = storyWriter();
  storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
  storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
  storyOfMyLife.erase(); // ''

  ```

  Esto es lo que se conoce como el patron `module`. En javscript es una forma en la que podemos crear encapsulacion de funcionalidades todo dentro de una funcion sin pulidir el `global` namespace. para que entiendas el poder de este patron jQuery esta implementado de esta forma en la que toda su funcionalidad se encapsula dentro de la funcion `$`.

###Paso 6:

Usando el patron `modulo`, diseña un tostador. Usa te creatividad aca sobre que funcionalidades quieres que los usuarios puedan hacer con el tostador.

```javascript
var Toaster = function(){
    //metodos y propiedades privadas

    return {
      //metodos y propiedades publicas
    };
};
```





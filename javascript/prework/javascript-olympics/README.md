# Olimpiadas JavaScript


## Objetivos de Aprendizaje
- Crear y manipular objetos de Javascript
- Definir funciones en javascript
- user metodos nativos de javascript
- Debugguear usando los mensajes de error de `node`

## Resumen
En esta serie de retos vamos a probar tus habilidades introductorias para manejar este lenguaje. Algunos de los retos los debes poder solucionar facilmente y otros van a poner a prueba tus habilidades de investigación.

## Pasos:

## Paso 0: Objetos
Crea dos perfiles de atleta uno para cada uno de los que esten trabajando en el reto. Cada perfil debe ser un `objeto literal` que incluya las propiedades `name, height, sport`. Valida que tus objetos estan bien escritos creando pruebas y corriéndolas en Node.


## Paso 1: Añadir propiedades a objetos

Crea una función que reciba un array de atletas y que añada la propiedad `win` a cada atleta dentro del arreglo.  `win` debe ser una funcion que imprima en la consola "{name} won the {event}",  `event` es un argumento que recibe esta funcion.

Hace mas sentido crear `win` como una expression o una declaración?

## Paso 2: Voltea un String

Crea una funcion que reciba un string como argumento y la devuelve volteada.

Usa los metodos nativos para Strings de javascript. MDN [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) docs.

## Paso 3:  Remueve numeros impares de un Array

Crea un funcion que accepte un array de numeros como argumento y devuelva un array con solo numeros pares.

Puedes hacer esto manualmente o usando metodos nativos de javascript. [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## Paso 4: Crea una función Constructora

Para este paso hemos creado unas pruebas las cuales encuentras acá abajo. Copia estas pruebas al archivo [my_solution.js](my_solution.js). Lee las definiciones de una función constructora en este articulo [article](http://code.tutsplus.com/tutorials/the-basics-of-object-oriented-javascript--net-7670)

completa el reto cuando todas las pruebas impriman `true`

`Pruebas:`
```javascript
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
```


## Paso 5: Reflecciona

Buen trabajo!, Incluye una reflexión en el archivo [my_solution.js](my_solution.js) en la cual nos cuentes como te sentiste desarrollando estas pequeñas pruebas.

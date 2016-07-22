# Roman Numerals

##Objetivos de aprendizaje

* Uso de estructuras de datos
* Escribir funciones cortas
* escribir codigo que sea DRY
* Nombres de variables efectivas
* Descomposicion de Problemas
* User el Pseudocoding


## Resumen

Vamos a crear una funcion que convierta un Numero entero en su numero romano Equivalente.
Ej: 476 => 'CDLXXVI'.

Para referencia esta es la tabla de como se crean los numero romanos:

| Numeral Romano | Numeral Arabico |
| ------------- | -------------- |
| I             | 1              |
| V             | 5              |
| X             | 10             |
| L             | 50             |
| C             | 100            |
| D             | 500            |
| M             | 1000           |

##Pasos

###Paso 0 : Numeros Romanos, estilo Old School

Los romanos no usaban el metodo de subtraccion para representar numeros como 9 de esta forma 'IX', en cambio se basaban en pura adicion 'VIIII'. En este reto vamos a mantener esa tradicion de forma que no te preocupes por hacer substracciones.

Para este reto edita el archivo romanNumerals.js

Escribe una funcion que se llame `toRoman` que cuando le pasemos un numero entero como argumento entre 1 y 3000 devuelva un `String` que contenga la representacion de ese numero

En otras palabras `toRoman(4)` debe devolver el string `'IIII'`.

Asegurate de porbar tu metodo pasandole varios `inputs` a los cuale conozcas su resultado correcto. Prueba numeros sencillos como `toRoman(1)` y complejos como `toRoman(1646)`.


Tip: usa el operador `%` modulo.

###Paso 1 : Numeros Romanos Modernos

Con el tiempo alguien se dio cuenta de que seria una mejor idea substraer numeros pequeños para formar esos numeros grandes.

reescribe tu solucion para que ahora funcione con los numeros romanos modernos. cuando alguien invoque `toRoman(4)` este debe devolver el string `'IV'`.


#### Ejemplos

| Arabic | Roman  |
| ------ | ------ |
| 4      | IV     |
| 9      | IX     |
| 14     | XIV    |
| 44     | XLIV   |
| 944    | CMXLIV |


##Recursos
* [http://artlung.com/smorgasborg/roman-numerals/](http://artlung.com/smorgasborg/roman-numerals/)

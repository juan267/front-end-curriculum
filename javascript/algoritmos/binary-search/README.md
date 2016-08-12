# Busqueda Binaria

##Resumen

Los niños que estan aprendiendo aritmetica a menudo juegan a adivinar un numero dentro de un rango:

- "Estoy pensando un numero entre 1 y 100. Cual es?"
- *"Es el numero menor a 50?"*
- "Si"
- *"Es menor a 25?"*
- "No."

A si continuan, reduciendo en cada pregunta el rango por su mitad, hasta que finalmente solo queda un numero.

Esta tecnica se conoce como `Binary Chop`, y es una tecnica muy conocida para buscar dentro de una coleccion. Ahora construyamos este algoritmo en Javascript.

Ten en cuenta que este ejercicio es mucho mas complicado de lo que parece. Se estima que alrededor de 90% de los programadores profesionales no puden escribir una implementacion adecuada de este algoritmo en menos de dos horas. Donald Knuth, en su libro The Art of Computer Programming, reporta que la primera implementacion de busqueda binaria se creo en 1946, pero solo hasta 1962 se creo una version libre de bugs.

Para aprender mas lee el articulo [Wikipedia article](http://en.wikipedia.org/wiki/Binary_search_algorithm).

##Pasos

###Paso 0 : Escribe el [MVP](http://en.wikipedia.org/wiki/Minimum_viable_product) del algoritmo

Empieza por escribir que satisfasga el minimo producto viable ( MVP). TU algortimo deberia recibir como argumento un numero `objetivo` y un arreglo `ordenado` de forma creciente y devolver `true` o `false` para indicar si el `objetivo` se encuentra dentro del arreglo.

```js
binarySearch(32, [24, 29, 32, 37, 43])  # => true  (porque `32` esta en el arreglo)
```

No olvides empezar con pseudocode, cuales son los pasos que tienes que seguir?

*No puedes usar el metodo  `Array#.includes` o `Array#indexOf` . El punto es que escribas tu implemetnacion del algoritmo no que uses los metodos nativos de Javascript.


###Paso 1 : Algoritmo Completo

Ahora queremos poder saber en que posicion se encuentra el elemento que estamos buscando. En vez de devolver `true` o `false` tu algoritmo deberia devolver la posicion del numero en el Arreglo.


```js
binarySearch(32, [13, 19, 24, 29, 32, 37, 43])  # => 4
# dado que  `32` es el cuarto elemento del arreglo(contando desde cero)
```
Si el numero no esta en el arreglo, tu algoritmo debe devolver `-1`

###Paso 2 : Escribe Pruebas

No olvides crear una suite de pruebas que te ayuden a verificar tu algoritmo esta funcionando de forma correcta. inlcuido los `edge` cases.



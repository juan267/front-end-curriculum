# Busqueda Linear

## Objetivos de Aprendizaje

* Busqueda en una estructura de datos
* Implementar Algoritmos

##Resumen

En ciencia de computacion, existen muchas formas de buscar dentro de colecciones de datos. Entender estas diferentes formas y los patrones bajo los cuales se realizan busquedas y se organizan estructuras de datos es una parte esencial del conocimiento de un programador.

Javascript abstrae muchas de las funciones de bajo nivel las cuales realizan este tipo de busquedas, como por ejemplo `find` o `indexOf`, para usar estos metodos no tienes que saber el `como` funciona por detras el `index` si no el `que` es.

Sin embargo es muy util conocer como funcionan estos metodos por detras, sobre todo por que existen muchas formas de usarlos y cada uno funciona de forma diferente. Conocer como funcionan estos algoritmos tiene un impacto directo en que tan bueno es el rendimiento de tus aplicaciones. por rendimiento nos referimos a cuanto tiempo se demora en ejecutar el programa y cuanta memoria usa.

Uno de los algoritmos de busqueda mas sencillos se llama `Linear Search`. En este reto, tu implementaras una version de este algoritmo, usando las estructuras mas basicas de Javascript.

Linear Search, es un algortimo para encontrar valores dentro de una lista, al mirar cada uno de los elementos que la compone, uno por uno en secuencia, hasta que se encuentra el que se desea. [Wikipedia](http://en.wikipedia.org/wiki/Linear_search)


##Pasos
###Paso 0 : linear search Basico



```js
randomNumbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ]
linearSearch(18, random_numbers)
# => 2
linearSearch(9, random_numbers)
# => nil
```


###Paso 1 : linear search Global


```js
bananasArr = "bananas".split('')
# => ["b", "a", "n", "a", "n", "a", "s"]
globalLinearSearch("a", bananas_arr)
# => [ 1, 3, 5 ]
```

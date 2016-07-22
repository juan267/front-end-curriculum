#Crear Iteradores

##Resumen

En esta serie de retos vamos a implementar algunas de las funciones nativas mas importantes de javascript que utilizan la progamacion funcional como su paradigma.

estas funciones son:

- forEach

- map

- filter

- reduce

##Pasos

###Paso 1: myForEach

En este paso tu reto es crear la misma funcionalidad que tiene la funcion nativa forEach. tu funcion debera llamarse `myForEach` y debe recibir dos argumentos el primero un `array` y el segundo un `callback`.

deberas pasar cada elemento del `array` como argumento para la funcion `callback`


###Paso 2: myMap

En este paso deberas crear la misma funcionalidad de la funcion nativa `map`. Tu funcion `myMap` recibe dos argumentos un `array` y un `callback`. Deberas devolver un nuevo arreglo con cada uno de los elmentos transformados al haber llamado la funcion `callback` usando como argumeto cada uno de los elmentos del `array` original. NO modifiques el array orginal todo el punto de map es devolver un array nuevo modifica sin tener que mutar el array original.

BONUS: mira como puedes usar tu funcion `myForEach` dentro de `myMap`


###Paso 3: myFilter

En este paso debereras crear la misma funcionalidad de la funcion nativa `filter`. Tu funcion `myFilter` recibe dos argumentos un `array` y un `callback`. `myFilter` debe devolver un nuevo arreglo el cual solo contenga los elmentos del array original que al pasarselos como argumento al `callback` devuelven `true`.  NO olvides no modificar el arreglo original.

###Paso 4: myReduce

En este paso debereras crear la misma funcionalidad de la funcion nativa `reduce`. Tu funcion `myReduce` debera recibir 3 argumentos, un `array` un `callback` y un valor `initial` (inicial). deberas llamar el callback pasandole como argumentos, cada elemento dentro del array, y el valor actual de `initial` en cada iteracion el valor de `initial` debe actualizar al resultado que devuelve la funcion `callback` cada vez que es invocada. al final `myReduce` debe devolver el valor final de `initial`.

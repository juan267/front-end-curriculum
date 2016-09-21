# JavaScript Refactor Procesal A OOP


##Resumen

Como programador profesional, habran varias situaciones en las que te encontraras con javascript escrito de forma un poco miedosa. En este reto te vamos a pedir que tomes codigo escrito en forma procesal, y le hagas un refactor para que se convierta en codigo escrito de forma orientada a Objetos.

##Pasos

###Paso 0 :

Haz un refactor del codigo en el archivo `application.js`. Esfuerzate por dejar lo minimo posible en el `global scope`.

Tips:

- Dale buenos nombres a todas las funciones anonimas
- Mueve las functiones anonimas a Objetos
- Cada `event handler` no debe de tener mas de 2 lineas de longitud
- Crea una clara separacion de responsabilidades

###Release 1 : Version MVC

Ahora que tenemos las funciones desacopladas, podemos organizar nuestro codigo en comportamientos.

1. Todo los comportamientos relacionados con el DOM deberian estar almacenados en el objeto `view`
2. Los comportamientos relacionados al juego y su estado deben estar en otro objeto llamado `model`
3. Deberas crear un objeto llamado `controller` el cual maneje la comunicacion entre el `view` y el `model` asi como crear los `event listeners`.

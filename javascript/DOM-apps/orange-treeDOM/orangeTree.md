# Arbol de Naranjas Javascript

## Resumen

En este reto vamos construir una aplicacion que agrupe todas las tecnologias presentes en el desarrollo de Front-end.

Tu reto sera modelar un arbol de naranjas. Nuestro arbol debe tener las siguientes funcionalidades:

* El Arbol puede envejecer
* Por cada año que el arbol envejece hasta llegar a su edad de dar frutos, este debe crecer de altura.
* Depues de que este llega a su edad de dar frutos, este puede crear naranjas.
* El arbol genera un numero al azar de naranjas cada año, despues de llegar a su edad de dar frutos.
* Cada naranja tiene un diametro al azar
* Es posible recoger todas las naranjas que crezca el arbol durante el año
* Todas las naranjas que no se recogan antes de que el arbol crezca otro año, se mueren cuando este crece otro año
* El arbol muere despues de llegar a su maxima edad, y no puede dar mas furtos despues de esto.

## Pasos


### Paso 0: Trabajando con Jasmine

Hemos escrito varias pruebas para ti usando una libreria de javascript llamada Jasmine. Tu trabajo sera crear el codigo para hacer que estas pruebas pasen.

Para ver las pruebas abre el archivo `tests.html` en tu navegador. La primera vez que lo abras deberias ver la primera prueba fallando. Escribe el codigo en `app/javascripts/solution.js` para lograr que esta prueba pase. Luego ve al archivo `spec/solution-spec.js` y descomenta la siguiente prueba. Para descomentarle (cambia `xit` por  `it`) y continua trabajando.


### Paso 1: Javascript Objects VS Funciones constructoras

Tienes dos opciones de formular la solucion de este reto:

Opcion 1: Objetos literales y funciones (Sin usar prototypes o funciones constructoras)

Opcion 2: Funciones Constructoras e instancias

Te sugerimos que pruebes creando la solucion primero usando la Opcion 1 y luego hagas un refactor para pasar a la opcion 2.

Al terminar de trabajar en este archivo deberias poder un arbol de naranjas, hacer que envejezca, crecer naranjas en el arbol y recoger sus frutas.

### Paso 2: La vista

Ahora vamos a volver nuestra aplicacion interactiva, con una interfaz de usuario mediante la interacion con el DOM usando la libreria jQuery. El codigo que modifica el DOM, debera ser implementado en `view.js`.

Ya te hemos creado un esqueleto del html en el archivo `orange.html`, este lo puedes modificar a tu gusto.

* Escribe codigo que te permita `plantar` un arbol al presionar un boton. Este deberia hacer un arbol visible en la pantalla.
Si ves en el div `#orange-tree-template`, te daras cuenta de que nada de lo que hay ahi sale todavia en la pantalla.
Podrias usar un poco de javascript para cambiar las propiedades de CSS y hacerlo aparecer.
Una vez que el arbol sea visible seria bueno desabilitar el buton de plantar mas arboles.

* Escribe el codigo para hacer que el arbol envejezca al presionar un buton.
Si el arbol envejeze lo suficiente como para empezar a dar frutos, deberian empezar a aparecer naranjas en el arbol (para esto usa la imagen de naranja en la carpeta `images`).
La edad del arbol deberia aparecer en el elemento `p.age`.
El numero total de naranjas deberia aparecer en el elemento `p.fruit-count`.

* Escribe el codigo que permita `recoger` una naranja al undir un boton. Esto deberia disminuir el numero de naranjas y eliminar una de las imagenes de naranja que hay en el arbol.

## Recursos

[tryJasmine.com](http://tryjasmine.com)
[MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
[Jasmine Documentation](http://pivotal.github.io/jasmine/)
[Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
[Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
[Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
[jQuery][jQuery library]

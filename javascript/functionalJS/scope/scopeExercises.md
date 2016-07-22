#Scope

##Resumen

Por scope en programacion nos referimos al contexto en el que nos encontramos y las variables y funciones que se encuentran en el. Uno de los problemas mas comunes que un programdor se encuntra es que no logra acceder a variables que estan por fuera de su scope o peor aun que las variables que esta creando estan regadas por todos lados sin ningun tipo de encupsulacion.

Normalmente estos problemas se pueden solucionar facilmente entendiendo bien como funcion el `scope` en javascript y sus reglas.

##Pasos:

Tu reto es ir al archivo `function.js` y cambiar todos los `'???'` de forma que las pruebas pasen.

Para hacer esto corre el archivo `SpecRunner.html` en tu navegador. Inicialmente podras ver que la primera prueba pasa y las siguientes no.

ve al archivo `function.js` y empieza arregalar las pruabas siguindo las reglas de `scope` en javascript para que todas las pruebas pasen. Recuerda que `function.js` es un archivo de javascript como cualquier otro por lo cual puedes hacer `console.log` para debuggear tu aplicacion.

Estos son unos ejemplos de como se ve una prueba que esta fallando y otra que pasa:

####Prueba que falla:

      it('a function has access to its own local scope variables',

      function () {
        var fn = function () {
          var name = 'inner';
          ACTUAL = name;
        };
        fn();
        expect(ACTUAL === '???').to.be.true;
        //change '???' to what ACTUAL evaluates to.
      });

####Prueba que pasa:

      it('a function has access to its own local scope variables',

      function () {
        var fn = function () {
          var name = 'inner';
          ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'inner').to.be.true;
        //changed '???' to 'inner'
        //(because we assigned ACTUAL, a global variable to name inside fn)
      });

### BONUS:

Lee todo el codigo de este reto para entender como funciona todo el sistema de pruebas. Por si tienes curiosidad estamos usando dos librerias llamadas `Mocha` y `Chai` para crear las pruebas.

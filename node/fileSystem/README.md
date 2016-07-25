# Node File System

## Resumen

Como todos los lenguajes de Back-End node viene con un modulo para poder interactuar con el sistema de archivos de nuestro computador o servidor. Esto quiere decir que podemos leer, crear y editar archivos y carpetas de forma programatica.

el modulo que nos permite realizar esto se llama `fs` y tenemos que requerirlo en los archivos donde lo queramos utilizar.

### Paso 1: Leer directorios

En este paso deberas utlizar la funcion `readdir` del modulo `fs` para leer los contenidos de un directorio.

Node se carecteriza por ser un un lenguaje que no bloquea los procesos, esto quiere decir que puede hacer varias cosas a la vez de forma asyncrona. Esto es tanto una ventaja como un dolor de cabeza para el programador dado que el nivel de complejidad de una aplicacion puede aumentar de manera sustancial al comportarse de una forma asyncrona.

en este reto vas a utilizar tanto la version asyncrona como la version sincronica de `readdir`.

primero crea la version sincronica la cual debe hacer uso del metodo:

- readdirSync()

deberas leer los contenidos de la carpeta `testFiles` y luego imprimir este resultado en la consola.

luego crea la version asyncrona usando el metodo:
- readdir()

no olvides comentar la version syncrona para que no afecte esta version.

En el archivo `readdir.js` encontraras que al final hay un `console.log` este es solo para que puedes ver como una version se comporta diferente a la otra.


### Paso 2: readFile

Como podras inferir node cuenta con una version syncronica y otra asyncrona para casi todos los metodos del modulo `fs`. Pero la gracia de usar node es aprovechar sus habilidades de no bloqueo por lo cual de ahora en adelante vamos a seguir usando las versiones asincronas.

En este paso deberas hacer una combinacion de los metodos:

- readdir
- readFile

Tu objetivo es leer todos los archivos de primer nivel de la carpeta `testFiles`. Esto quiere decir que no debes leer los archivos que se encuentren dentro de `nredtedDirectory`

el programa debe imprimir los contenidos de cada archivo en la terminal, lo que quires decir que deberias ver la historia de Javascript y de KeyboardCat en tu terminal.

### Paso 3

En este paso deberas usar el metodo:

- writeFile

EL objetivo es que un usuario pueda hacer lo siguiente desde la terminal:

```bash

$ node writeFile --phrase 'hola como estas'
```

el ejecutar este comando la frase `'hola como estas' ` deberia quedar escrita dentro del archivo `sample.md`

Utiliza el codigo del reto `process.argv` para ayudarte









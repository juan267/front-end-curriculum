# React Props

##Resumen

En este ejercicio vamos a trabajar con unos de los conceptos mas importantes de React.

*props* son los atributos que le pasamos a un componente de react para que este los renderize. Son inmutables lo cual quiere decir que no podemos cambiar su valor una vez lo recibimos, esto es algo muy bueno por que nos garantiza que nuestros componentes no van a causar `side effects` dentro de la aplicacion. Piensa en los `props` como los argumentos o inputs que le pasamos a un componente a la hora de invocarlo.

Para este reto estamos usando directamente babel 5 en el navegador de forma que no tienes que precompilarlo antes de enviar el codigo al navegador.

##Pasos

###Paso 1

Crea un archivo llamado `app.js` el cual incluyas dentro del archivo `index.html`.

Dentro del archivo `app.js` deberas crear un componente con el nombre que tu desees, el cual haga render de un `<div></div>` que contenga el text que nos pasaron por *this.props.text*.

###Paso 2

Haz render del componente que creaste *3* veces dentro del div `react-container`. Cada vez que hagas render del componente pasale `text` con un valor diferente.

Al final deberias ver en el navegador 3 frases diferentes.

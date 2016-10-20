# React Children

#Resumen

Children es un concepto un poco confuso en react pero sumamente sencillo en la realidad.

Pongamos un ejemplo, como sabes en HTML podemos hacer esto:

`<p>Hola como estas</p>`

Ahora bien en react podriamos crear un componente `NavBar` y hacer esto:

`<NavBar>Hola como estas</NavBar>`

En este caso, children se refiere lo que esta dentro del tag de abir y cerrar el componente, osea `Hola como estas` y podemos acceder a su valor dentro componente de la siguiente manera:

```javascript
this.props.children
```

##Passos

###Paso 1:

Crea un componente en un archivo `js` externo que renderize, un `<h1></h1>` el cual por dentro tenga el texto proveniente de `this.props.text` y un `<p></p>` que tenga por dentro el valor de `this.props.children`.

###Paso 2:

Renderiza 3 veces el componente dentro del div `react-container` cada vez con valores diferentes para props y para children.

# React State

##Resumen

En este reto vamos a tener nuestra primera aproximacion a `State` en React. El estado es la forma en que react maneja actualizaciones de un componente.

Cuando un component carga por primera vez este puede nacer con un estado inicial el cual representamos con el siguiente metodo dentro del componente:


```javascript
getInitialState(){
  return {
    msg: 'Hola como estas'
  }
}
```

En este caso el componente naceria con un estado igual al objeto:

```javascript
{
  msg: 'Hola como estas'
}
```

de forma que podemos usar el valor de `msg` dentro de `render` para poner ese texto en algun lado, pero si en algun momento digamos despues de que el usuario hace click en algun momento en algun boton, podemos cambiar el valor de `msg` por otra cosa y React se va a encargar de actualizar el DOM para representar ese cambio.

Ese cambio del valor del `State` lo hacemos mediante la funcion `setState`, lo cual podriamos usar de esta forma:

```javascript
this.setState({
  msg: 'Nos vemos mas tarde'
})
```

En este caso actualizamos el valor de `msg` por uno nuevo, cada vez que llamamos `setState` react actualiza el DOM con los cambios por lo cual vemos como la pagina se actualiza con el nuevo valor.

##Pasos

###Paso 1:

Crea el componente `Checkbox` el cual debe tener una funcion `render` la cual muestra un `input` de tipo *checkbox* y estar por defecto `checkeado`. Tambien debe tener un `p` el cual por dentro tenga un texto que diga si el input esta checkeado o no.

###Paso 2:

Usa `ReactDOM` el cual ya incluimos para hacer render de este comoponent dentro de del div `react-container`.

###Paso 3:

Crea dentro del componente la funcion `handleCheckboxClick` la cual haga un `toggle` del estado del checkbox cuando se dispare el evento `onChange`. Por toggle nos referimos a que si estaba checkeado que lo pase a no checkeado y viceversa. El texto del `p` tambien deberia actualizarse para reflejar el nuevo estado del `checkbox, osea que diga` checked o unchecked.


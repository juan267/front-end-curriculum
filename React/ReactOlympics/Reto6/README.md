# Eventos en React

##Resumen

Como react nos esta ayudando a crear nuestra interfaz de usuario necesitamos que nos provea una forma de actuar frente a eventos que se generen en el navegador.

La forma en que esto funciona en React es muy sencilla ya que es usando exactamente la misma API del navegador, *(En realidad una simulacion de esta)*.

Eg: si tenemos el siguiente codigo


```javascript
React.createClass({
  HandleLinkClick(e){
    console.log('event', e)
  },
  render() {
    return(
      `<a href="#" onClick={this.HandleLinkClick}></a>`
    )
  }
})
```

En este caso al hacer click en el `a` tag vamos a disparar la funcion `HandleLinkClick` la cual tiene acceso al evento generado por el navegador. *(En realidad es un evento sintetico osea una simulacion del evento real)*

##Pasos

###Paso 1:

Ve al archivo `js/Note.js` ahi encontraras el component `Note` el cual lo unico que hace hasta este momento es un render de un div con un p y dos `button`.

Tu reto es que cuando el usuario haga click en el primer `button` este dispare la funcion `edit` la cual debe disparar una alerta que diga `editing note`. El segundo boton debe dispara la funcion `remove` la cual dispara una alerta que diga `removing note`.

Por otro lado te diste cuenta de que ya no hacemos render al body si no a un Div en los ultimos retos ? por que es esto?

###Dato Curioso

Tambien hicimos un cambio sobre como hacemos render al DOM real, este es que ahora usamos la libreia `ReactDOM` para que se encargue de esto. Desdes la verion 14 de react, *React* solo se encarga de la creacion de componentes y del manejo del DOM virtual, y dejo la dependencia de hacer render al DOM a otra libreria. Esto es util por que ahora es mas facil usar React en muchos ambientes como lo son Mobil y Escritorio.

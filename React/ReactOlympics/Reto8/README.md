# Flujo de Control con UI

##Resumen

En este reto vamos a ver como React nos permite esoger que tipo de UI mostrarle al usuario en base a alguna condicion.

Uno de los aspectos mas interesantes de React es que es puro Javascript, no hay ningun tipo de Syntax especial de Templating o DSL que tengamos que aprender, si sabemos Javascript seguramente nos podremos defender, al mismo tiempo esto puede generar que si no te sientes comodo escribiendo javascript, React se puede volver muy complicado.

En este reto vas a crear un poco de flujo de control dentro de un componente de React.

##Pasos

###Paso 1:

Recuerdas el comoponente `Note` que creamos en el [Reto7](./Reto6). Vamos a seguir agregandole funcionalidades.

Como primer paso trae tu codigo del reto 6 implementalo en el archivo `js/Note.js`

Y haz que la nota se vea en el navegador.

###Paso 2:

Vamos a quitar todo el JSX que se encontraba dentro del metodo `render` y lo vamos a pasar a un metodo dento del componente que se llame `renderDisplay`.

Luego dentro de render simplemente haz que el component haga render de lo que devuelva el metodo `renderDisplay` que deberia ser el JSX que acabamos de move.

Tu aplicacion deberia seguir funcionando igual.

###Paso 3:

Vamos a crear otro metodo dentro del componente el cual se va a llamar `renderForm` y que debe devolver el siguiente JSX:

```javascript
<div className="note">
  <textarea defaultValue={this.props.children}
  className="form-control"></textarea>
  <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
</div>
```

###Paso 4:

Agregale estado a tu componente, El estado inicial deberia ser:

```javascript
{editing: false}
```

###Paso 5:

Modifica el metodo `edit` para que cambie el estado de `editing` a `true`

###Paso 6:

Crea el metodo `save` el cual si pusiste atencion estamos invocando con el boton que se encuentra dentro de `renderForm`

`save` debe cambiar el estado de `editing` a `false` y debe hacer un alert con el texto que el usuario escribio en el formulario

###Paso 7:

Modifica el metodo `render` para haga render de `renderDisplay` si el estado de editing es `false` o haga render de `renderForm` si el estado de `editing` es `true.


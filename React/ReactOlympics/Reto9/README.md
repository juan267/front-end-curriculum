#Container Components

##Resumen

Hasta el momento hemos jugado solo con solo un componente el componente `Note`. Ahora que pasa cuando tenemos muchas notas, como sucede realmente en un tablero de notas. Necesitas un lugar donde ponerlas, mas especificamente necesitamos un componente `Board`.

`Board` Es lo que se conoce como un componente `Container` o un `Smart Component` por que contiene muchos componentes hijos que van ser los `Note`.

##Pasos

###Paso 1:

Crea el componente `Board` dentro del archivo js/Note.js.

`Board` es donde van a ir todas nuestras notas por lo cual tiene sentido poner dentro del estado de `Board` las siguientes notas:

```javascript
{
  notes: [
      'Aprender Javascript',
      'Aprender React',
      'Sacar el Perro',
      'Lavar los platos'
  ]
}
```

por ultimo `Board` deberia hacer render de todas esta notas. Para esto crea dentro del metodo `render` un div:

```html
<div className="board">

</div>
```

El cual deberia tener dentro las 4 notas que tenemos en el estado.

###Paso 2:

Acuerdate que React es solo javascript de modo que para poner las 4 notas lo unico que tenemos que hacer es iterar usando `map` sobre las notas del componente y para cada una crear el component `Note` con el texto de la nota que estamos iterando.

###Paso 3:

Cambia el codigo de la linea que dice
```javascript
ReactDOM.render(...)
```

Para que contenga el component `Board` y no `Note`

###Paso 4:

Verifica que en tu pagina salgan 4 notas y que estas tenga el texto que pusimos en el estado de `Board`.





# Ciclo de vida del Componente

##Resumen

Los componentes en React tienen un ciclo de vida. Esto quiere decir que durante el tiempo que existen pasan por diferentes etapas.

Nosotros como desarrolladores podemos usar esas etapas para engancharnos a ellas y ejecutar cierto codigo en ese periodo de tiempo.

Las estapas mas importantes del ciclo de vida de un componente son las siguientes:

- componentWillMount: Corre justo antes de que el componente quede en el DOM

- componentDidMount: Corre justo despues de que el componente quede montado en el DOM

- componentWillUnmount: Corre justo antes de que el componente desaparezca del DOM

Estos son solos las etapas mas comunes y mas utilizadas pero existen otras lee sobre ellas en la documentacion de React, [Life Cicle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

En este reto vamos usar `componentWillMount` para hacer un llamado ajax a una `api` externa y poner la respuesta de esta en nuestro componente.

##Pasos

###Paso 1:

Cambia la linea:

```javascript

ReactDOM.render(<Board />,
    document.getElementById('react-container'))
```

Para que ahora llamemos `Board` con la propiedad `count` la cual va a tener el valor `50`, de la siguiente manera:

```javascript
<Board count={50}/>
```

###Paso 2:

Dentro de component `Board` crea el metodo `componentWillMount`, esta funcion se va invocar automaticamente justo antes de que el componente se monte en el `DOM`.

Dentro de esta funcion vamos a usar jquery para hacer un ajax request a la api de [Bacon ipsum](http://baconipsum.com/). Si te das cuenta incluimos jquey dentro del archivo `index.html`.

Dentro del metodo `componentWillMount` crea un `if` el cual solo debe ejecutarse cuando `count` esta dentro de los `props` del componente. en caso de que si este vamos a realizar este request de ajax:

```javascript
$.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" +
    this.props.count + "&start-with-lorem=1&callback=?", function(results){
        results[0].split('. ').forEach(function(sentence, index){
            self.state.notes.push(sentence.substring(0,40));
            self.setState({
              notes: self.state.notes
            })
        });
    })
```


por otro lado notaras la palabra `self` la cual tienes que definir antes del `if` A que debe ser `self` igual ?


###Paso 3:

Una vez hayas hechos estos arreglos deberias poder ver que cuando refrescas la pagina esta automaticamente se llena con 50 notas todas con texto proveniente de Bacom ipsum.

Como vez usar las etapas del lifecycle son muy utiles para darle vida a nuestros componentes.




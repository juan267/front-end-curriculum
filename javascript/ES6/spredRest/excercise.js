function foo(x,b,c, ...rest ) {

}

function bar () {
  var a1 = [2,4]
  var a2 = [6,8,10,12]

  return foo()
}

console.log(
  bar().join('') === '281012'
)


// Instrucciones:

// Deberas modificar las funciones `bar` y `foo` de manera que cuando llamemos el console.log de la linea 12, este imprima `true` en la consola.

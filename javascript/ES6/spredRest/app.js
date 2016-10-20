function bar (...args) {
  console.log(args)
}

// Antes
rest operator
gather
function foo (...args) {
  console.log(args) []
  var args = [].slice.call(arguments)
  args.unshift(42)
  bar.apply(null, args)
}
console.log("Soy a %s soy b %s soy c %s soy pepito %s", a,b,c,pepito)

foo(2,3,4,4,5,56,67,76)



spread



var a = [1,2,3]
var b = [4,5]
var z = [0].concat(a,b, [6])

[0, ...a, ...b, 6]

//Despues

function foo (...args) {
  args.unshift(42)
  bar(...args)
}

var a = [1,2,3]
var b = [4,5]
var z = [0, ...a, ...b, 6]

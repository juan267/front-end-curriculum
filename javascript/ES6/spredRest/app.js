function bar (...args) {
  console.log(args)
}

// Antes

function foo () {
  var args = [].slice.call(arguments)
  args.unshift(42)
  bar.apply(null, args)
}

var a = [1,2,3]
var b = [4,5]
var z = [0].concat(a,b, [6])

//Despues

function foo (...args) {
  args.unshift(42)
  bar(...args)
}

var a = [1,2,3]
var b = [4,5]
var z = [0, ...a, ...b, 6]

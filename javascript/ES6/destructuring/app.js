function foo () {
  return [1,2,3,[1,2,3,4]]
}

//////////// Array Destructuring /////////////////

// antes

var tmp = foo()
var a = tmp[0]
var b = tmp[1] !== undefined ? tmp[1] ? 42
var c = tmp[2]

// despues

var [
  a,
  b,
  c,
  [
    d,
    e,
    ...args
  ]
  // ...args
] = foo() || []

////// Object Destructuring ?////////////////////////

function foo () {
  return {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: [1,2,3,5,6,7]
    }
  }
}


var {
  a,
  b,
  c: {
    d: c,
    e: [d,e,...rest]
  }
} = foo() || {}

console.log(a,b,c,d,e,rest)


// Named Arguments

function namedArgs({a,b,c}) {
  console.log(a,b,c)
}

namedArgs({
  c: function(){console.log('hola')},
  a: 1,
  b: 'hola'
})






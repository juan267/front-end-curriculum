function foo () {
  return [1,2,3,[1,2,3,4]]
}

function names () {
  return ['pepito','pepita','fulanito',['fuquensia','fuquensio','juan','gomez']]
}

//////////// Array Destructuring /////////////////

// antes

var tmp = foo()
var a = tmp[0]
var b = tmp[1] !== undefined ? tmp[1] ? 42
var c = tmp[2]

// despues
var [a, b ...rest] = foo()

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




var mongoClient = require('mongoDb').mongoClient

var {mongoClient} = require('mongoDb')









function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype = {
  sayHi: function() {
    console.log(this.name)
  }
}

class Person {
  constructor() {
    this.legs = 2
  }
}

class Woman extends Person {
  constructor(name, age) {
    super()
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log(this.name)
  }
}

var woman = new Woman('carolina', 26)









// Antes

function foo (x) {
  var x = x || 42
  var x = x !== undefined ? x : 42
  console.log(x)
}

// Despues

function foo(x = 42) {
  console.log(x)
}

function uniqueId(max, min) {
  return Math.floor(Math.random() * (max - min)) + min
}

function require(paramName) {
  throw `${paramName} is required`
}

function bar(id = uniqueId(0, 1000), name = require('name')) {
  console.log(id, name)
}



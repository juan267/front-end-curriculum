var a = 1

var name = 'Juan'

var obj = {
  a,
  sayHi() {
    console.log(this.a)
  },
  [name]: 42,
}

console.log(obj)



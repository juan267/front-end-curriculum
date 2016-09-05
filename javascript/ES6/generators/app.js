var numbers = {
  *[Symbol.iterator]({start = 1, step = 1, end = 100} = {}) {
    for (var i = start; i < (end + 1); i = i + step) {
      yield i
    }
  }
}

for (var num of numbers) {
  console.log(num)
}

for (var num of numbers[Symbol.iterator]({start: 6,step: 4,end: 30})) {
  console.log(num)
}

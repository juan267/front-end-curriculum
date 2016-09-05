var Things = [1,2,3]
for (var i = 0; i < Things.length; i++) {
  setTimeout(function(){
    console.log(i)
  }, 1000)
}

for (var i = 0; i < Things.length; i++) {
  (function(index) {
    setTimeout(function(){
      console.log(index)
    }, 1000)
  })(i)
}

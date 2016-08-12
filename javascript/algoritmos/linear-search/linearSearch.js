// Tu codigo va aca

// Linear Search Basico



// Linear Search Global

function sumame(array) {
  if (array.length === 1) {return array.pop()}
  return array.pop() + sumame(array)
}


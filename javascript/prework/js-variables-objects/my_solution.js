 // JavaScript Variables and Objects

// Hice Pair con [yo, con] en este reto .

// __________________________________________
// Escribe tu codigo aca.








// __________________________________________
// Refleccion: Escribe una refleccion aca sobre lo que aprendiste.
//
//
//
//
//
//


// __________________________________________
//Codigo de Pruebas:  No alteres el codigo debajo de esta linea.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "Juan",
  "The first element in the value of members should be 'Juan'.",
  "8. "
)

assert(
  members[3] === "German",
  "The fourth element in the value of members should be 'German'.",
  "9. "
)

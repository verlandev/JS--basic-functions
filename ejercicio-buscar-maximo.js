// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo){
    return numberOne;
  } else {
    return numberTwo;
  }
}

console.log(sum(5,2)) // Devuelve 5
console.log(sum(7,15)) // Devuelve 15
console.log(sum(100000000,9999999999999)) // Devuelve 9999999999999
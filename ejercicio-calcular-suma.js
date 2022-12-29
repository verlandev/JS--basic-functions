// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

// Puedes usar este array para probar tu función:


const numbers = [1, 2, 3, 5, 45, 37, 58];



// function sumAll(arraySumNumbers) { // Como lo que tenemos que gestionar es un array que contiene numeros que se van a sumar, vamos a ponerle ese nombre al parámetro.

//     let total = 0;    

//     for (const number of numbers) {

//         total = total + arraySumNumbers[number];
//         console.log(total)
//     }
    
//     return console.log(total)

// }

// console.log(sumAll(numbers))


function sumAll(arraySumNumbers) {
    let total = 0; 

    for (i = 0; i < arraySumNumbers.length; i++) {
        total = total + arraySumNumbers[i]
    }
    return console.log(total)
}

console.log(sumAll(numbers))
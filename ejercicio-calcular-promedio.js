// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

// numbers es un array


function average(arrayAverageElements) { // esta función es para encontrar el promedio de cualquier  array de elementos
  
    // una media es igual a la suma de todos los elementos, dividido por el número de elementos.

    let sumNumbers = 0;

    for (i = 0; i < arrayAverageElements.length; i++){

        sumNumbers = sumNumbers + arrayAverageElements[i];

    }
    return console.log(sumNumbers / arrayAverageElements.length)
}

console.log(average(numbers)) // Imprime 23.428571428571427


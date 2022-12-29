// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// let totalArray = 0;
// let totalString = 0;
// let totalNumber = 0;
//1. una media es igual a la suma de todos los elementos, dividido por el número de elementos.
//2. tenemos que encontrar la longitud de los arrays .length


// for (i = 0; i < mixedElements.length; i++ ){
   

//     if(typeof mixedElements[i] == "string"){ //le digo: "oye, si el elemento del array por el que estás iterando es un string, dímelo"
//         //Ahora que ya sabemos qué elementos del array son un string, vamos a ver qué valor númerico tienen.

//         // console.log(mixedElements[i].length) // con esto vemos el valor númerico del string. Vamos a crear una variable más simple.
//         totalString += mixedElements[i].length; // sumamos los valores númericos de cada string
       
//         // console.log(totalString) // el último número es 25 --> sale correcto
        
//     } else if (typeof mixedElements[i] !== "string") {
            
//         // console.log("mi número es",i); // Ojo que escrito así me devuelve la posición del índice, no el valor
//         // peeeero, escrito de la siguiente manera, me da el valor
//         // console.log(mixedElements[i])
//         totalNumber += mixedElements[i];
//         console.log(totalNumber) // Imprime 16, es correcto

//     }
//     console.log(totalArray = totalString + totalNumber)
    
// }

// console.log(totalArray) // Imprime 41, es correcto

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumWords(arrayElementsToSum) {

        let totalString = 0;
        let totalNumber = 0;

    for (i = 0; i < arrayElementsToSum.length; i++){

        // Oye, necesito que me digas, que por cada elemento que recorras sea un string o un número y voy a almacenar los datos en sus 
        // respectivas variables.


        if(typeof arrayElementsToSum[i] == "string"){
            totalString = totalString + arrayElementsToSum[i].length;
        } else if (typeof mixedElements[i] !== "string"){
            totalNumber = totalNumber + arrayElementsToSum[i];
        }

        
    }
    
    return (totalString + totalNumber);

  
}
console.log(sumWords(mixedElements)); // la suma de todo es 41








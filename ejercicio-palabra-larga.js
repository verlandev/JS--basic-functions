// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']; 
const listaCompra = ['Calabacines', 'Queso', 'Yogures', 'Pistachos'];
// avengers es un array. 


function findLongestWord(arrayOfElements){  // como vamos a trabajar sobre un array de superheroes que son sus elementos, lo nombro así.

    let longestWord = "";

    for (i = 0; i < arrayOfElements.length; i++){

      if(arrayOfElements[i].length > longestWord.length){
        longestWord = arrayOfElements[i];
      }
2      
    }

    return console.log(longestWord)

    
}
console.log(findLongestWord(avengers))
console.log(findLongestWord(listaCompra))




// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const dishes = [ // He cambiado el nombre de la variable para que se entienda mejor
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

// const noDuplicates = []; // Este será el array que recibirá la lista de platos sin repeticiones.


// for (i = 0; i < dishes.length; i++){ //Creo un bucle for que recorra el array dishes

//     //creo una constante que se refiera a los elementos que hay dentro de la variable dishes cuando está iterando

//    const elements = dishes[i]; 

//     // ahora toca pregunta "¿mi array de duplicados no incluye elementos de la lista dishes? Si no están, inclúyelos."
//     // Y si el bucle detecta que el array ya tiene ese elementos, entonces no lo incluye. Por eso no saldrán 
//     // repeticiones.

//    if (!noDuplicates.includes(dishes[i])){
//     noDuplicates.push(elements)
//    }

// } console.log(noDuplicates)


function removeDuplicates(arrayWithDuplicates){

    let noDuplicates = [];

    for (i = 0; i < arrayWithDuplicates.length; i++){

        let elements = arrayWithDuplicates[i];

        if(!noDuplicates.includes(arrayWithDuplicates[i])){
            noDuplicates.push(elements)
        }

    }

    return(noDuplicates)

} 

console.log(removeDuplicates(dishes))



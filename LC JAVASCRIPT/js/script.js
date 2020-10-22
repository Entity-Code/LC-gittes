//Crea un Array contenente 3 nomi.
// Chiedi un numero all'utente da 0 a 2 all'utente e stampa l'elemento dell'array corrispondente

// Dichiarazione array
var mioArray = ["nome0", "nome1", "nome2"];

// Richiamo di un elemento dell'array
var indice = parseInt(prompt("dammi un indice tra 0 e 2"));


// accedere all'indice dell'array
var arrayItem = mioArray[indice];

console.log("array completo: ", mioArray);
console.log("item selezionato: ", arrayItem);


//la proprietà .length ci da informazioni sulla lunghezza dell'array (3 elementi ora)
console.log("lunghezza array iniziale: ", mioArray.length);

//aggiunta dell'elemento "nome3"
mioArray.push("nome3");


console.log("lunghezza array dopo 1 push: ", mioArray.length);

console.log("array completo dopo 1 push: ", mioArray);

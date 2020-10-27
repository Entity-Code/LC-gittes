// Genero 10 numeri random utilizzando una funzione

//max = è l'argomento che creiamo noi che corrisponde al range massimo nel quale verranno creati i numeri random (da 0 a 50)
function generamiUnNumeroRandom(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return "non hai inserito il valore dell'argomento";
   }
}


//generami 10 numeri, ognuno random con un range da 0 a max (che inseriamo noi al richiamo della funzione che mi genera un random number da 0 a (50))
for (var i = 0; i < 10; i++) {
   var numero = generamiUnNumeroRandom();
   console.log(numero);
}

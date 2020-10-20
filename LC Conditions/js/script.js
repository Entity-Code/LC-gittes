//input: richiesta inserimento parola1
var parola1 = prompt("Inserisci la prima parola");

//input: richiesta inserimento parola2
var parola2 = prompt("Inserisci la seconda parola");

console.log(parola1.length, parola2.length);



//verifico quale parola sia più lunga
   //se parola1 è più lunga creo messaggio corrispondente
   if (parola1.length > parola2.length) {
      // creo messaggio corrispondente
      console.log("parola1 è più lunga");
   } else if (parola2.length > parola1.length) { //se parole2 è più lunga
      // creo messaggio corrispondente
      console.log("parola2 è più lunga");
   } else { //altrimenti se sono uguali
      // creo messaggio corrispondente
      console.log("le parole sono lunghe uguali");
   }
   // se parola2 è più lunga creo messaggio corrispondente

   // altrimenti se sono uguali creo messaggio corrispondente

//output: per dire quale parola è più lunga

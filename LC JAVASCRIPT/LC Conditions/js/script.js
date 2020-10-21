// GIOCO PARI O DISPARI

var msgRisultato;
var msgOutput = document.getElementById("titolo");

// INPUT GIOCO
   // L'utente fa la sua scommessa (pari o dispari)
   var scommessa = prompt("Scommetti se pari o dispari");
   console.log(scommessa);
   // l'utente ci da un numero tra 1 e 5
   var numeroUser = parseInt(prompt("Punta il tuo numero tra 1 e 5"));
   console.log("numero utente", numeroUser);
   // il pc ci da il suo numero tra 1 e 5
   var numeroPc = Math.floor(Math.random() * 5) +1;
   console.log("numero pc", numeroPc);



// OPERAZIONI DI GIOCO
   // sommare i 2 numeri
   var somma = numeroUser + numeroPc;
   console.log("la somma è: ", somma);

   // stabilire se la somma uscita è pari o dispari
   if ((somma % 2) === 0) { // verifica somma pari con operatore "MODULO (%)"
      // somma pari
      msgRisultato = "pari";
   } else {
      //somma dispari
      msgRisultato = "dispari";
   }
   console.log(msgRisultato);

   // OUTPUT
   // stabilire se la scommessa dell'utente è stata vincente o meno
   if (scommessa === msgRisultato) {
      msgOutput.innerHTML = "hai vinto tu caro utente!";
   } else {
      msgOutput.innerHTML = "hai perso tu caro utente!";
   }

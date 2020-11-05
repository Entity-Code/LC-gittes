//Simulare un countdown di 10 secondi che alla fine dice Buon Anno!

//ogni secondo esegui la funzione countdown
var mioInterval = setInterval(countdown, 1000);

//il count parte da 10
var count = 10;
function countdown() {
   // decrementa di 1 e stampa il decremento fino a quando count > 0
   if (count > 0) {
      console.log(count);
      count--;
   } else { //se count non è più > 0, allora stampa Buon Anno, e pulisci il setInterval
      console.log("Buon anno!!");
      clearInterval(mioInterval);
   }
}

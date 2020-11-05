//Simulare un countdown di 10 secondi che alla fine dice Buon Anno!

var mioInterval = setInterval(countdown, 500);

var count = 10;
function countdown() {
   if (count > 0) {
      console.log(count);
      count--;
   } else {
      console.log("Buon anno!!");
      clearInterval(mioInterval);
   }
}

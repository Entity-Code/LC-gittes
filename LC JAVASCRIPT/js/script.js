// Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto

// partiamo con la variabile di stato aperto = false
$("p").hide();
var aperto = false;

$("button").click(
   function(){
      // se la variabile aperto è false, allora mostralo, e falla diventare true
      if (aperto === false) {
         $("p").show();
         aperto = true;
      // altrimenti rinascondila, e rimetti aperto = false
      } else {
         $("p").hide();
         aperto = false;
      }
   }
)

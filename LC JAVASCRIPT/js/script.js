//Creare un bottone che on hover aggiunga una classe che cambia il colore dl testo e la toglie quando il mouse esce dal bottone. Con il doppio click cambio il testo in "cliccato".
// Con un click solo non fa niente

var bottone = $("button");

bottone.hover(
   function () {
      bottone.addClass("red")
   }, function () {
      bottone.removeClass("red")
   }
);

bottone.dblclick(
   function () {
      bottone.text("cliccato000OOOOOoo");
   }
);

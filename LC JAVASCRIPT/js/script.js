// Creare 10 quadrati vuoti con jQuery
// Associare una classe red ai quadrati in posizione pari e una classe green ai quadrati in posizione dispari

$(document).ready(function () {

   // aggiungo 10 volte dei div .square
   for (var i = 0; i < 10; i++) {
      var square = '<div class="square"></div>';
      //  aggiungo 10 square nel container .squares
      $(".squares").append(square);
   }

   $(".square").each(function (index, element) {
      console.log(index, element);
      if (index % 2 === 0) { // indice pari
         $(element).addClass("red");
      } else {
         $(element).addClass("green");
      }
   })

   // metodo jquery instant
   // $(".square").odd().addClass("red");
   // $(".square").even().addClass("green");





});


//funzioni

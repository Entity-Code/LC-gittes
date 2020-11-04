// Creare 10 quadrati vuoti.
// Con jQuery, dentro ognuno scrivere un numero random

$(document).ready(function () {

//per ogni quadrato .square
$(".square").each(function () {
   // scrivimi in ognuno un randomNum da 0 a 100 diverso
   $(this).text(randomNum(100));
});

// //così stamperebbe tutti i numeri uguali nei qudrati
// $(".square").text(randomNum(100));

});


//funzioni
// random Num
function randomNum(max) {
   return Math.floor(Math.random() * max) + 1;
}

// Data una struttura html selezionare gli elementi indicati e applicare loro una classe con la funzione .addClass()



// // seleziono i tag h1 e gli aggiungo la classe
// $("h1").addClass("classe-aggiunta");

// salvo la selezione in una var
var titolo = $("h1");
// aggiungo il metodo addClass() alla var
titolo.addClass("classe-aggiunta");



// $("p").addClass("classe-aggiunta");

$("p.paragrafo-sel").addClass("classe-aggiunta");

$("#divvone").addClass("classe-aggiunta");

titolo.removeClass("classe-aggiunta");

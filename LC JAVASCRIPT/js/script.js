// iL SOFTWARE DEVE CHIEDERE ALL'UTENTE IL SUO NOME E IL SESSO CON DUE PROMPT DIVERSI.
// SULLA PAGINA HTML DEVE APPARIRE "CIAO <NOME>",
// IL COLORE DEL NOME DEVE ESSERE AZZURRO O ROSA A SECONDA DEL SESSO INSERITO

// selezione elemento
var el = document.getElementById("titolo");

// chiedo nome nomeutente
var nome = prompt("inserisci il nome");

// chiedo sesso utente
var sesso = prompt("inserisci il sesso M o F");

// output nome in pagina
document.getElementById("titolo").innerHTML = "Ciao" + nome;

// gestire colore output
if (sesso === "M") {
   el.className = "blu"; //classe "blu" presa dal css
} else {
   el.className = "rosa"; //classe "rosa" presa dal css
}

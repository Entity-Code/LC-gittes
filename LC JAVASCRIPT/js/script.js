// Il software deve chiedere per 5 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//for
// Richiesta numero (5 volte)
var somma = 0; //variabile di accumulo
for (var i = 0; i < 5; i++) {
	var somma = somma + parseInt(prompt("Inserisci numero"));
}

// somma 5 numeri inseriti
// var somma = numeri;
document.write("La somma dei numeri inseriti è : " + somma);


// //while
// // Richiesta numero (5 volte)
// var somma = 0; //variabile di accumulo
// var i = 0;
// while (i < 5) {
// 	var somma = somma + parseInt(prompt("Inserisci numero"));
// 	i++;
// }
//
// // somma 5 numeri inseriti
// // var somma = numeri;
// document.write("La somma dei numeri inseriti è : " + somma);

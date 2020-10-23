//VERIFICA ESERCIZIO EMAIL

//CHIEDI ALL'UTENTE LA SUA EMAIL, CONTROLLA CHE SIA NELLA LISTA DI CHI PUò ACCEDERE, STAMPA UN MESSAGGIO APPROPRIATO SULL'ESITO DEL CONTROLLO


//richiesta mail
var richiesta = prompt("inserisci la mail");
//lista mail
var email = ["marco@gmail.com", "giuglia@hotmail.it", "marta@yahoo.it", "giorgio@gmail.it"];
console.log(richiesta);

//email non ancora trovata
var emailTrovata = false;

for (var i = 0; i < email.length; i++) {
	var compilazione = email[i];
	// condizione mail corretta
	if (compilazione === richiesta) { //compara l'email di quell'iterazione con quella inserita dall'utente
		emailTrovata = true; //mail trovata
	}
}

// Hai trovato l'email?
if (emailTrovata === true) {
	console.log("Benvenuto!");
} else {
	console.log("Accesso negato");
}

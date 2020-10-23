//richiesta mail
var richiesta = prompt("inserisci la mail");
//lista mail
var email = ["marco@gmail.com", "giuglia@hotmail.it", "marta@yahoo.it", "giorgio@gmail.it"];
console.log(richiesta);

//email non ancora trovata
var emailTrovata = false;

// for (var i = 0; i < email.length; i++) {
// 	console.log(i);
// 	var compilazione = email[i];
// 	// condizione mail corretta
// 	if (compilazione === richiesta) { //compara l'email di quell'iterazione con quella inserita dall'utente
// 		emailTrovata = true; //mail trovata
// 	}
// }

var i = 0;
while (i < email.length && emailTrovata === false) { //finché non hai finito l'array, e non hai ancora trovato niente, continua a cercare
	console.log(i);
	var compilazione = email[i];
	// condizione mail corretta
	if (compilazione === richiesta) { //compara l'email di quell'iterazione con quella inserita dall'utente
		emailTrovata = true; //mail trovata
	}
	i++;
}

// Hai trovato l'email?
if (emailTrovata === true) {
	console.log("Benvenuto!");
} else {
	console.log("Accesso negato");
}

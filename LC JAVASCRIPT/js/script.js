// chiedere all'utente quanti anni
var eta = prompt("Scrivi quanti anni hai");
var mail = prompt ("Scrivi la tua mail");
var annoCorrente = 2020;
var annoNascita;
console.log(eta);

annoNascita = annoCorrente - eta;
console.log("l'output sarà: ", annoNascita);
// dire all'utente in che anno è nato
document.getElementById("titolo").innerHTML = "Hai " + eta + " anni, quindi " + "sei nato nel " + annoNascita + "." + " Ti invieremo questo dato inaspettato alla mail: " + mail;

// // Crea un array di numeri e stampa solo i numeri dispari
//
// var numeri = [1,2,3,4,5,6,7,8];
//
// for (var i = 0; i < numeri.length; i++) {
// 	numeri[i];
// 	//se l'elemento su cui sei è dispari, allora lo stampi, fino alla fine degli items dell'array
// 	if (numeri[i] % 2 !== 0) { //se il resto del numero è diverso da 0 = dispari
// 			console.log(numeri[i]);
// 	}
// }






// partendo da un x di nomi stampare tutto

var nomi = ["Dario", "Angelo", "Federica", "Giorgia"];
var testoStampato = "";

//ciclo per traversare l'array

for (var i = 0; i < nomi.length; i++) {
	// nomi[i];
	// console.log(nomi[i]);
	testoStampato = testoStampato + nomi[i] + "<br>";
}
document.getElementById("stampa").innerHTML = testoStampato;

// Crea un array di numeri e stampa solo i numeri dispari

var numeri = [1,2,3,4,5,6,7,8];

for (var i = 0; i < numeri.length; i++) {
	numeri[i];
	//se l'elemento su cui sei è dispari, allora lo stampi, fino alla fine degli items dell'array
	if (numeri[i] % 2 !== 0) {
			console.log(numeri[i]);
	}
}

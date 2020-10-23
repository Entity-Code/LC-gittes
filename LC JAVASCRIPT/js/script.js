// array
var nomi = ["nome1","nome2","nome3","nome4","nome5"];

// versione con il ciclo for
/*
for (var i = 0; i < nomi.length; i++) {
	console.log(nomi[i]);
}
*/

// versione con il ciclo while
var i = 0; //contatore
while (i < nomi.length) {  //condizione
	console.log(nomi[i]);

	i++; //incremento-decremento il contatore i, BLOCCANDO IL CICLO
}
// e se i = 10? i nomi sono 5 nell'array, quindi il ciclo non verrà mai eseguito



//versione con il ciclo do-while
var i = 10; //contatore
do {
	console.log(nomi[i]);

	i++; //incremento-decremento il contatore i
}while (i < nomi.length) //condizione

//SIMILE AL WHILE MA CONTROLLA LA CONDIZIONE SOLO DOPO AVER ESEGUITO

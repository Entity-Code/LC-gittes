// Generatore di “nomi cognomi” casuali: prendendo a caso un nome e un cognome da una lista di nomi e da una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

//creo array nomi
var nomi = ["Mattia ","Mario ","Martina ","Sofia ","Luigi ","Francesco "];
console.log("Lista nomi: " + nomi);
//creo array cognomi
var cognomi = ["Barretta ","Tummolillo ","Rossi ","Ferrari ","Russo ","Bianchi "];
console.log("Lista cognomi: " + cognomi);


var casualNomiCognomi = [];
//casual
i = 0;
while (i < nomi.length) {
   var casualNome = randomNum(nomi.length);
   var casualCognome = randomNum(cognomi.length);
   casualNomiCognomi.push(nomi[casualNome] + cognomi[casualCognome]);
   i++;
}
console.log(casualNomiCognomi);


// random Num
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max);
} else { //sennò 0
      return 0;
   }
}

// CODICE PER CAPIRE LO SCOP
a = 0;
b = "bungiorno";
var c = "ciao";

var valoreRitornato = saluta();
console.log("Il valore ritornato dalla funzione è: ", valoreRitornato);

console.log("a is " + a);
console.log("b is " + a);

function saluta() {
   var d = "asd";
   console.log("a is " + a);
   var b = a + 1;
   console.log("b is " + b);
   console.log(c);
   return "Ho finito!";
}

var palla = {
  "prezzo": 12,
  "tipo": "pallina da golf"
};

palla.peso = 14;


// key = nome proprietà
//palla = oggetto
for (var key in palla) {
  console.log(key + ": " + palla[key]); //stampami key:obj dell'oggetto palla
}

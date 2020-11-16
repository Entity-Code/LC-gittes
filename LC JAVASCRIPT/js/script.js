/*
// V-model
// Utilizzare due input, in cui inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome e Cognome per salutare l'utente


//istanza vue

var app = new Vue({
   // elemento da selezionare
   el: "#app",
   // dati
   data: {
      nome: "nome",
      cognome: "cognome",
   }
});
*/

//V-bind
var app = new Vue({
   // elemento da selezionare
   el: "#app",
   // dati
   data: {
      nome: "nome",
      cognome: "cognome",
      mieClassi: "classe1 classe2"
   }
});

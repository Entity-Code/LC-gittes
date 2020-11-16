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

// //V-bind
// var app = new Vue({
//    // elemento da selezionare
//    el: "#app",
//    // dati
//    data: {
//       nome: "nome",
//       cognome: "cognome",
//       mieClassi: "classe1 classe2"
//    }
// });


var app = new Vue({
   // elemento da selezionare
   el: "#app",
   // dati
   data: {
      nome: "nome",
      cognome: "cognome",
      mieClassi: "classe2"
   },
   methods: {
      changeTitle: function() {
         //puro javascript

         //this si riferisce al dato "mieClassi", sostituendo il suo valore
         if (this.mieClassi === "classe2") {
            this.mieClassi = "classe1";
         } else {
            this.mieClassi = "classe2";
         }
         console.log(this.cognome);
      }
   }
});

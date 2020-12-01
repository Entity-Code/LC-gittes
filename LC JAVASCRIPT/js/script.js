// //prendimi in questo percorso dei dati
// axios.get("https://flynn.boolean.careers/exercises/api/random/int")
// .then(function(risposta) { //salvameli in "risposta"
//    //salva l'oggetto ritornato in una costante (result)
// 	const result = risposta.data; // interrogalo con .data
//    console.log(result); //mostramelo
// });


var app = new Vue({
   el: "#app",
   data: {
      item: "",
   },
   mounted: function () {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((risposta) => {
         console.log(risposta.data);
      });
   }
});

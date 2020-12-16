// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è  <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
const randNum = "https://flynn.boolean.careers/exercises/api/random/int";

var app = new Vue({
   el: "#app",
   data: {
      numbers: []
   },
   mounted: function() {
      for (let i = 0; i < 36; i++) { 
         this.numbers.push('');
      }
   },
   methods: {
      genera: function (index) {
         axios.get(randNum)
         .then(risposta => {

            let pushedNum = risposta.data.response;

            // console.log(pushedNum);
            // this.numbers[0]= pushedNum;
            this.$set(this.numbers, index, pushedNum)
            console.log(this.numbers);
         });
      }
   }
})

console.log("Hello World");
console.log("Not Hello World");
hi
console.log("yessirrrrr");

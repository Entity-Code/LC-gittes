$(document).ready(function () {



   $("p").hide();

   $("button").click(
      function () {
         $("p").slideToggle(1000,
         function functionName() {
            alert("testo finito");
         });
      });
   });

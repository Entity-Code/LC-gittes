$(document).ready(function () {

   //mettiamo i div nascosti
   $(".faq p").hide();

   //selezioniamo il padre, e con this.children("p") selezioniamo l'elemento suo figlio diretto a cui vogliamo applciare . slideToggle
   $(".faq").click(function () {
      // figlio diretto
      $(this).children("p").slideToggle("fast");
      // // discendente generale
      // $(this).find("p").slideToggle("fast");
   });





});

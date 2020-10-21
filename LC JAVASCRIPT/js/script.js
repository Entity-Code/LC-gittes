var element = document.getElementById("titolo");

//al click dell'elemento "titolo" scatenami un numero casuale 0-10
element.addEventListener("click",
	function() {
	  //codice
     var numero = Math.random() * 10;
     alert(numero);
}  );

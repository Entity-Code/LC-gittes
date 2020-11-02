// Rendere visibile la scritta "Live Coding" dentr il cerchio arancione quando passo con il mouse sul cerchio.
var elemento = $("#cerchio span");
elemento.fadeOut();

$("#cerchio").hover(mouseIn,mouseOut);


//funzioni

function mouseIn() {
   elemento.fadeIn();
}

function mouseOut() {
   elemento.fadeOut();
}

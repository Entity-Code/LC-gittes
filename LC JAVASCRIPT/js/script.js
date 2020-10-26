//parola 1
var p1 = prompt("Inserisci la prima parola");
//parola 2
var p2 = prompt("Inserisci la seconda parola");

// OUTPUT
	// p1>p2
	if (p1.length > p2.length) {
		document.write("<h3>La parola più corta è : </h3>" + p2);
		document.write("<h3>La parola più lunga è : </h3>" + p1);
	// p1<p2
	} else {
		document.write("<h3>La parola più corta è : </h3>" + p1);
		document.write("<h3>La parola più lunga è : </h3>" + p2);
	}

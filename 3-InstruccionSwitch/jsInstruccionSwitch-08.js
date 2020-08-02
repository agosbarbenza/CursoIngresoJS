function mostrar() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("En " + destinoIngresado + " hace frío");
			break;

		default:
			alert("En " + destinoIngresado + " hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN
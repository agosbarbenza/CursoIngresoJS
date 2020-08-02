function mostrar() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert(destinoIngresado + " se encuentra en el OESTE");
			break;
		case "Ushuaia":
			alert(destinoIngresado + " se encuentra en el SUR");
			break;
		case "Cataratas":
			alert(destinoIngresado + " se encuentra en el NORTE");
			break;
		case "Mar del plata":
			alert(destinoIngresado + " se encuentra en el ESTE");
			break;
	}

}
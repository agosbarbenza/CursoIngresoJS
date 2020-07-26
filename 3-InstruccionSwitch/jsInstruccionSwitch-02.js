function mostrar() {

	let mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;

		case "Septiembre":
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;

		default:
			alert("Falta para el invierno.");
			break;
	}
}
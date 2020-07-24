function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}




}//FIN DE LA FUNCIÓN
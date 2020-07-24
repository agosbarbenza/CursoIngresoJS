function mostrar()
{
	//tomo la hora
	var horaDelDia = parseInt(document.getElementById("txtIdHora").value);

	switch (true) {
		case (horaDelDia<0 || horaDelDia>24):
			alert("no existe esa hora")
		break;
		case (horaDelDia>=12 && horaDelDia<=19):
			alert("Es de tarde");
		break;
		case(horaDelDia>=7 && horaDelDia<=11):
			alert("Es de mañana");
		break;
		default:
			alert("Es de noche");
		break;
	}

}//FIN DE LA FUNCIÓN
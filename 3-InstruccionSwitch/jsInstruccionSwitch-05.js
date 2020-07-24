function mostrar()
{
	//tomo la hora
	var horaDelDia = parseInt(document.getElementById("txtIdHora").value);

	switch (true) {
		case (horaDelDia>=7 && horaDelDia<=11):
			alert("Es de mañana");			
			break;
	}
}//FIN DE LA FUNCIÓN
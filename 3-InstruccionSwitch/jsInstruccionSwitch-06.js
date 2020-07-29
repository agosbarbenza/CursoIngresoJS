function mostrar()
{
	//tomo la hora
	let horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	
	if (horaDelDia<0 || horaDelDia>24){
		alert("no existe esa hora");
	}else if((horaDelDia>=0 && horaDelDia<=6)||(horaDelDia>=20 && horaDelDia<=24)){
		alert("Es de noche");
	}
	else{
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9: 
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		case 12:
		case 13:
		case 14: 
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		default:
			alert("Eso no es un formato de hora correcto")
			break;
			
	}
}	

}
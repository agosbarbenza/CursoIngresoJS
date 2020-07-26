function mostrar() {
	let horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10: 
		case 11:
		alert("Es de mañana");
	}
}

	/*Otra forma -no aconsejable porque funciona magicamente en javascript

	switch (true) {
		case (horaDelDia>=7 && horaDelDia<=11):
			alert("Es de mañana");			
			break;
	}*/

	/*
	
	Otra forma 
	
	if (horaDelDia >= 7 && horaDelDia <= 11) {
		alert("Es de mañana");
	}*/

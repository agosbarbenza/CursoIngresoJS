/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	
	let sexoIngresado; 

	do{
		sexoIngresado = prompt("ingrese 'f' o 'm'");
	
		}while(sexoIngresado != "f" && sexoIngresado != "m");
	
		document.getElementById("txtIdSexo").value = sexoIngresado;
	

	/*do{
	sexoIngresado = prompt("ingrese 'f' o 'm'");

	}while(sexoIngresado != "f" && sexoIngresado != "m");

	document.getElementById("txtIdSexo").value = sexoIngresado;*/

	

}//FIN DE LA FUNCIÓN






/*do {
	sexoIngresado = prompt("ingrese 'f' o 'm'");
} while (!(sexoIngresado == "f" || sexoIngresado == "m"));

document.getElementById("txtIdSexo").value = sexoIngresado;*/

/*do{
	sexoIngresado = prompt("ingrese 'f' o 'm'");

}while(sexoIngresado != "f" && sexoIngresado != "m");

document.getElementById("txtIdSexo").value = sexoIngresado;*/
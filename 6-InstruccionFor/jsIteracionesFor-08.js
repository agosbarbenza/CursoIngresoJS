function mostrar()
{

	//VOLVERLO A HACER DEL MODO QUE LO HIZO LA COMPAÑERA
	
	let num = prompt("Ingrese un numero");
	while(num <= 1 || isNaN(num)){
		alert("Numero incorrecto");
		num = prompt("Ingrese un numero");
	}

	let i;
	let bandera = 0;

	
	for (i = 2; i < num; i++){   //es primo si solo es divisible x 1 y x él mismo.
		if(num%i == 0){
			bandera = 1;
		}
	}

	if(bandera == 0){
		alert("El numero "+num+" es primo");
	}else{
		alert("El numero "+num+" no es primo");
	}

}//FIN DE LA FUNCIÓN
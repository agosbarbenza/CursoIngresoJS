function mostrar()
{
	let num = parseInt(prompt("Ingrese un numero"));
	let i
	let bandera = 0;

	for (i = 2; i < num; i++){   //es primo si solo es divisible x 1 y x él mismo.
		if(num%i == 0){
			bandera = 1;
		}
	}

	if(bandera == 0){
		alert("El numero "+num+" es primo");
	}

}//FIN DE LA FUNCIÓN
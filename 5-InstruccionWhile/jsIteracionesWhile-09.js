/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let numIngresado;
	let numMax = 0;
	let numMin = 0;
	let contador = 0;

	do{
	numIngresado = parseInt(prompt("Ingrese un numero")); //pide un numero
	contador++; //suma +1 al contador, que tiene valor 0.

	if(contador == 1){	//cuando el contador tome valor 1
		numMax = numIngresado;  //asigna como max y min ese numero
		numMin = numIngresado;  
	}

	if(contador>1 && numIngresado>numMax){ //cuando el contador sea mayor a 1, y el nuevo numero sea mayor al ingresado antes
		numMax = numIngresado; //se asigna ese numero nuevo como maximo
	}else if(contador>1 && numIngresado<numMin){ //si el nuevo numero ingresado es MENOR al numero anterior
		numMin = numIngresado; //asigna como MINIMO a ese numero nuevo.
	}
	respuesta=prompt("desea continuar?");
	}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;

}//FIN DE LA FUNCIÓN

/*var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
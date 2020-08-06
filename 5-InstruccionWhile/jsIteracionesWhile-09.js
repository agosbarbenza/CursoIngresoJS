/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	/////////////////////////METODO DE BANDERA////////////////////////////////
	let numIngresado;
	let numMax = 0;
	let numMin = 0;
	let bandera = 0;
	let respuesta;

	do{
	numIngresado = parseInt(prompt("Ingrese un numero")); //pide un numero

	if(bandera == 0){	//cuando el contador tome valor 1
		numMax = numIngresado;  //asigna como max y min ese numero
		numMin = numIngresado;  
	}

	bandera = 1;

	if(numIngresado>numMax){ //cuando el contador sea mayor a 1, y el nuevo numero sea mayor al ingresado antes
		numMax = numIngresado; //se asigna ese numero nuevo como maximo
	}else if(numIngresado<numMin){ //si el nuevo numero ingresado es MENOR al numero anterior
		numMin = numIngresado; //asigna como MINIMO a ese numero nuevo.
	}
	respuesta=prompt("desea continuar?");
	}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;

}//FIN DE LA FUNCIÓN

///////////////////////////////////////MI FORMA///////////////////////////////

	/*let numIngresado;
	let numMax = 0;
	let numMin = 0;
	let contador = 0;
	let respuesta;

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
	document.getElementById("txtIdMinimo").value = numMin;*/

	///////////////////////////////////////FORMA DE LA PROFE//////////////////////

	/*let max;
	let min;
	let num;
	let resp;

	resp = "si";
	num = parseInt(prompt("Ingrese un número"));
	max = num;
	min = num;
	resp = prompt("Desea ingresar otro numero? si/no");

	while(resp == "si"){
		num = parseInt(prompt("Ingrese un número"));
		if(num>max){
			max = num;
		}else if(num<min){
			min = num;
		}
		resp = prompt("Desea ingresar otro numero? si/no");
		
	}
	console.log("El maximo es "+max+" y el minimo es "+min);*/


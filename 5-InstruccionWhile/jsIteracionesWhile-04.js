/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{	
	let numero

	do{
		numero = prompt("Ingrese un numero del 0 al 9");

		if(isNaN(numero)){
			numero = 15;
		}

	}while(numero<0 || numero>9);

	document.getElementById("txtIdNumero").value = numero;
	
	/* otra forma:  let input = document.getElementById("txtIdNumero");
	input.value = numero;*/

}//FIN DE LA FUNCIÓN



	
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	var respuesta;
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;

		do{
			num = parseInt(prompt("Ingrese un numero positivo o negativo"));
			if(num>=0){
				sumaPositivos = sumaPositivos+num;
			}else{
				multiplicacionNegativos = multiplicacionNegativos * num;
			}
			respuesta = prompt("Continuar ingresando numeros? si/no");
		
		}while(respuesta == "si");

		document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto"). value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN

/*do {
		num = parseInt(prompt("Ingrese un numero positivo o negativo"));
		if(Math.sign(num) == 1){
			sumaPositivos = num + sumaPositivos;
		}else if (Math.sign(num) == -1){
			multiplicacionNegativos = num * multiplicacionNegativos;
		}
		respuesta = prompt("desea continuar? si/no");


	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto"). value = multiplicacionNegativos;*/
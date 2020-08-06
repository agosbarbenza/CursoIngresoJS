/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;
	let control1 = 0; //variable de control pares
	let control2 = 0; //variable de control positivos
	let control3 = 0; //variable de control negativos
	let control4 = 0; //variable de control ceros


	do {
		numeroIngresado = parseInt(prompt("Ingresar un numero positivo o negativo"));


		if (numeroIngresado > 0) {
			control2++
			cantidadPositivos = control2;
			sumaPositivos = sumaPositivos + numeroIngresado;
			promedioPositivos = sumaPositivos / control2;

			if (numeroIngresado % 2 == 0) {
				control1++;
				cantidadPares = control1;
			}
		} else if (numeroIngresado < 0) {
			control3++
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = control3;
			promedioNegativos = sumaNegativos / control3;

			if (numeroIngresado % 2 == 0) {
				control1++;
				cantidadPares = control1;
			}
		}

		if (numeroIngresado == 0) {
			control4++;
			cantidadCeros = control4;
		}

		respuesta = prompt("desea continuar?");
	} while (respuesta == "si");

	diferencia = sumaPositivos - sumaNegativos;

	document.write("1 - La suma de los negativos es: " + sumaNegativos + "<br>" + "2 - La suma de los positivos es: " + sumaPositivos + "<br>" + "3 - La cantidad de positivos es: " + cantidadPositivos + "<br>" + "4 - La cantidad de negativos es: " + cantidadNegativos + "<br>" + "5 - La cantidad de ceros es: " + cantidadCeros + "<br>" + "6 - La cantidad de números pares es: " + cantidadPares + "<br>" + "7 - El promedio de positivos es: " + promedioPositivos + "<br>" + "8 - El promedio de negativos es: " + promedioNegativos + "<br>" + " 9 - La diferencia entre los positivos y los negativos es: " + diferencia);
}

/* CHEQUEAR ESTOOOOOOOOOOOOOO

do {
		numeroIngresado = parseInt(prompt("Ingresar un numero positivo o negativo"));


		if (numeroIngresado > 0) {
			control2++
			cantidadPositivos = control2;
			sumaPositivos = sumaPositivos + numeroIngresado;
			if(control2 == 0){
				promedioPositivos = "No se puede dividir por 0";
			}else{
				promedioPositivos = sumaPositivos / control2;
			}
			

			if (numeroIngresado % 2 == 0) {
				control1++;
				cantidadPares = control1;
			}
		} else if (numeroIngresado < 0) {
			control3++
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = control3;

			if(control3 == 0){
				promedioNegativos = "No se puede dividir por 0";
			}else{
				promedioNegativos = sumaNegativos / control3;
			}

			if (numeroIngresado % 2 == 0) {
				control1++;
				cantidadPares = control1;
			}
		}

		if (numeroIngresado == 0) {
			control4++;
			cantidadCeros = control4;
		}

		respuesta = prompt("desea continuar?");
	} while (respuesta == "si");

	diferencia = sumaPositivos - sumaNegativos;

	document.write("1 - La suma de los negativos es: " + sumaNegativos + "<br>" + "2 - La suma de los positivos es: " + sumaPositivos + "<br>" + "3 - La cantidad de positivos es: " + cantidadPositivos + "<br>" + "4 - La cantidad de negativos es: " + cantidadNegativos + "<br>" + "5 - La cantidad de ceros es: " + cantidadCeros + "<br>" + "6 - La cantidad de números pares es: " + cantidadPares + "<br>" + "7 - El promedio de positivos es: " + promedioPositivos + "<br>" + "8 - El promedio de negativos es: " + promedioNegativos + "<br>" + " 9 - La diferencia entre los positivos y los negativos es: " + diferencia);*/
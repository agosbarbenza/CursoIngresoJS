/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let contador = 0;
	let acumulador = 0;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	do {
		num = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + num;
		contador++;
		console.log(contador);
		respuesta = prompt("agrega otro numero? si/no");
	} while (respuesta == "si");
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

	/*txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN
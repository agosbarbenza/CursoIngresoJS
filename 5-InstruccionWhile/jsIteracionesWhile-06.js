function mostrar()
{
	let contador = 0;//mi variable de control, la inicializo con 0
	let acumulador = 0; //variable donde acumulo los numeros (los sumo), lo inicializo con 0.
	let numeroIngresado;

	while(contador<5){  //entra en el bucle, pregunta si contador es < 5, lo es, entonces:
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado; //
		contador++ //contador va a pasar por 0, 1,2,3 y 4. 
		//0+1
		//1+1    SON LAS VECES QUE ITERA.
		//2+1
		//3+1
		//4+1 = 5 es el valor final, entonces para sacar el promedio usamos directamente este numero
	}

	document.getElementById("txtIdSuma").value = parseInt(acumulador);
	
	document.getElementById("txtIdPromedio").value = acumulador/parseInt(contador);

}//FIN DE LA FUNCIÓN
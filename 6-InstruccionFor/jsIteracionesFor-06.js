function mostrar()
{

	let num = parseInt(prompt("Ingres numero"));
	let contadorPar = 0;

	for (let i = 0; i <= num ; i++) {
		
		if(i % 2 == 0){
			alert("El número "+i+" es par");
			contadorPar++;
		}
	}
	alert("Se encontraron "+contadorPar+" números pares.");
		


}//FIN DE LA FUNCIÓN
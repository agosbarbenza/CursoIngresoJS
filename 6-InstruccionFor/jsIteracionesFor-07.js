function mostrar()
{

	let num = parseInt(prompt("Ingrese un numero"));
	let cantDivisores = 0;

	for (let i = 1; i<=num; i++) {
		if(num%i == 0){
			alert(i+" es divisor de "+num);
			cantDivisores++
		}	
	}

	alert("Se encontraron "+cantDivisores+" números divisores de "+num);



}//FIN DE LA FUNCIÓN
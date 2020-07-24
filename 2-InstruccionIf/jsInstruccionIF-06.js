function mostrar()
{
	var edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13){
		alert("La persona es un niño");
	}else if(edad>18){
		alert("La persona es mayor de edad");
	}else{
		alert("La persona es adolescente");
	}

	/* Otra forma:
	
	if (edad>=18){
		alert("La persona es mayor de edad");
	}else if(edad>=13 && edad<=17){
		alert("La persona es adolescente");
	}else{
		alert("La persona es un niño");
	}*/
}
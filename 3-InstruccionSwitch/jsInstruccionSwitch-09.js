function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let precioBase = parseInt(15000);

	switch (estacionIngresada) {
		case "Invierno":

		if(destinoIngresado == "Bariloche"){
			let precioFinal = ((precioBase*20)/100)+precioBase;
			alert ("El precio final es: $"+precioFinal)
		}else if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba"){
			precioFinal = precioBase-((precioBase*10)/100);
			alert("El precio final es: $"+precioFinal);
		}else{
			precioFinal = precioBase-((precioBase*20)/100);
			alert("El precio final es: $"+precioFinal);
		}
			break;

		case "Verano":
			if(destinoIngresado == "Bariloche"){
				precioFinal = precioBase-((precioBase*20)/100);
				alert("EL precio final es: $"+precioFinal);
				
			}else if(destinoIngresado =="Cataratas"||destinoIngresado =="Cordoba"){
				precioFinal = precioBase+((precioBase*10)/100);
				alert("EL precio final es: $"+precioFinal);
			}else{
				precioFinal = precioBase+((precioBase*20)/100);
				alert("El precio final es: $"+precioFinal);
			}
			break;
	
		default:
			if(destinoIngresado !== "Cordoba"){
				precioFinal = precioBase+((precioBase*10)/100);
				alert("El precio final es: $"+precioFinal);
			}else{
				alert("El precio final es: $"+precioBase);
			}
			break;
	}

}//FIN DE LA FUNCIÓN
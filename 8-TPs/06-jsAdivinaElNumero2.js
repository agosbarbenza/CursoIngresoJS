/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;

function comenzar() {
	numeroSecreto = Math.floor(Math.random() * 100);
	console.log(numeroSecreto)
	//Genero el número RANDOM entre 1 y 100

}

function verificar() {

	let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
	contadorIntentos++;
	if (numeroIngresado == numeroSecreto) {
		if (contadorIntentos > 10) {
			alert("Ganaste en " + contadorIntentos + " intentos... Afortunado en el amor...");
		} else if (contadorIntentos >= 6 && contadorIntentos <= 10) {
			alert("Ganaste en " + contadorIntentos + " intentos... Falta técnica...");
		} else {
			switch (contadorIntentos) {
				case 5:
					alert("Ganó en " + contadorIntentos + " intentos!!! Usted está en la media...");
					break;
				case 4:
					alert("Ganó en " + contadorIntentos + " intentos!!! Excelente técnica...");
					break;
				case 3:
					alert("Ganó en " + contadorIntentos + " intentos!!! Esto es suerte...");
					break;
				case 2:
					alert("Ganó en " + contadorIntentos + " intentos!!! Excelente percepción...");
					break;
				default:
					alert("Ganó en " + contadorIntentos + " intento!!! Usted es un Psíquico...");
					break;
			}
		}
		contadorIntentos = 0; //reinicia intentos a 0 para jugar de nuevo.
	}else{
		if(numeroIngresado>numeroSecreto){
			alert("Se pasó...");
		}else{
			alert("Falta...")
		}
	}
} 
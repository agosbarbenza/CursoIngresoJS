function mostrar() {
	let resp;
	let bandera = 0;

	let tempMax;
	let nombreTempMax;

	let contadorViudos = 0;

	let contadorHombres = 0;

	let personas3edadMayorTemp = 0;

	let acumEdadHSol = 0;

	let contadorHombresSolteros = 0;

	let promedioEdadHSolteros = 0;

	do {
		let nombre = prompt("Ingrese un nombre");
		let edad = parseInt(prompt("Ingrese su edad"))
		while (edad < 1 || edad > 100 || isNaN(edad)) {
			alert("Ingrese una edad válida");
			edad = parseInt(prompt("Ingrese su edad"))
		}
		let sexo = prompt("Ingrese sexo 'm' o 'f'");
		while (sexo != "f" && sexo != "m") {
			alert("sexo invalido, 'f' o 'm'");
			sexo = prompt("Ingrese sexo 'm' o 'f'");
		}
		let estadoCivil = prompt("Ingrese su estado civil (s, c, v)")
		while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v") {
			alert("estado civil invalido, ingrese soltero, viudo o casado");
			estadoCivil = prompt("Ingrese su estado civil (s, c, v)");
		}
		let temperatura = parseFloat(prompt("Ingrese su temperatura"));
		while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
			alert("temperatura invalida, ingrese una entre 35 y 41");
			temperatura = parseFloat(prompt("Ingrese su temperatura"));
		}
		resp = prompt("Desea ingresar otra persona?");


		if (bandera == 0) {
			tempMax = temperatura;
			nombreTempMax = nombre;
		}

		bandera = 1;

		if (bandera == 1) {
			if (temperatura > tempMax) {
				tempMax = temperatura;
				nombreTempMax = nombre;
			}
		}

		switch (estadoCivil) {
			case "v":
				contadorViudos++;

				if (sexo == "m") {
					contadorHombres++;
				}
				break;

			case "s":

				if (sexo == "m") {
					contadorHombres++;
					contadorHombresSolteros++;
					acumEdadHSol = acumEdadHSol + edad;
				}
			break;
		}

		if (edad > 60 && temperatura > 38) {
		personas3edadMayorTemp++;
		}

	}while (resp == 'si');
	

	



	promedioEdadHSolteros = acumEdadHSol / contadorHombresSolteros;

	


	console.log("La persona con más temperatura es " + nombreTempMax);
	console.log(contadorViudos + " mayores de edad son viudos");
	console.log("La cantidad de hombres solteros o viudos es de " + (contadorHombresSolteros+contadorViudos));
	console.log("La cantidad de personas de tercera edad que tienen temperatura mayor a 38 es de " + personas3edadMayorTemp + " personas.");
	console.log("El promedio de edad entre los hombres solteros es de " + promedioEdadHSolteros + " años.")

}


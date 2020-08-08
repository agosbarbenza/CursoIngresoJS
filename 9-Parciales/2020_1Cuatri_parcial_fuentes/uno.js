
function mostrar() {

	//variables prompt
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;

	//bandera
	let bandera = 0;

	//
	let precioMasBaratoAlcohol;
	let cantidadUnidadesAlcohol;
	let fabricanteAlcohol;

	//sumas

	let sumaUnidadesAlcohol = 0;
	let sumaUnidadesBarbijo = 0;
	let sumaUnidadesJabon = 0;

	let acumCompraAlcohol = 0;
	let acumCompraBarbijo = 0;
	let acumCompraJabon = 0;

	let mayorTipo;

	let promedioCompra = 0;

	let marcaAlcoholBarato;

	for (let i = 1; i <= 5; i++) {

		//////////////////////////////////////////////prompts validados

		tipo = prompt("Ingrese un tipo de producto");
		while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")) {
			alert("Tipo de producto invalido");
			tipo = prompt("Ingrese un tipo de producto");
		}

		precio = parseFloat(prompt("Ingrese un precio"));
		while (!(precio >= 100 && precio <= 300) || isNaN(precio)) {
			alert("Precio invalido (debe ser entre 100 y 300");
			precio = parseFloat(prompt("Ingrese un precio"));
		}

		unidades = parseInt(prompt("Ingrese cantidad de unidades"));
		while (!(unidades >= 1 && unidades <= 1000) || isNaN(precio)) {
			alert("Cantidad invalida (debe ser entre 1 y 1000");
			unidades = parseInt(prompt("Ingrese cantidad de unidades"));
		}

		marca = prompt("Ingrese una marca");
		fabricante = prompt("Ingrese un fabricante");


		if (tipo == "alcohol") {

			if (bandera == 0) {
				precioMasBaratoAlcohol = precio;
				fabricanteAlcohol = fabricante;
				cantidadUnidadesAlcohol = unidades;
				marcaAlcoholBarato = marca;
			}

			bandera = 1;
			if (bandera == 1) {

				if (precio < precioMasBaratoAlcohol) {
					precioMasBaratoAlcohol = precio;
					fabricanteAlcohol = fabricante;
					cantidadUnidadesAlcohol = unidades;
					marcaAlcoholBarato = marca;
				}
			}

			sumaUnidadesAlcohol = sumaUnidadesAlcohol + unidades;

			acumCompraAlcohol++

		} else if (tipo == "barbijo") {
			sumaUnidadesBarbijo = sumaUnidadesBarbijo + unidades;
			acumCompraBarbijo++;
		} else if (tipo == "jabon") {
			sumaUnidadesJabon = sumaUnidadesJabon + unidades;
			acumCompraJabon++;
		}


	}
	bandera = 1;
	if (sumaUnidadesAlcohol > sumaUnidadesBarbijo && sumaUnidadesAlcohol > sumaUnidadesJabon) {
		mayorTipo = "alcohol";
		promedioCompra = sumaUnidadesAlcohol / acumCompraAlcohol;

	} else if (sumaUnidadesBarbijo > sumaUnidadesJabon && sumaUnidadesBarbijo > sumaUnidadesAlcohol) {
		mayorTipo = "barbijo";
		promedioCompra = sumaUnidadesBarbijo / acumCompraBarbijo;

	} else {
		mayorTipo = "jabon";
		promedioCompra = sumaUnidadesJabon / acumCompraJabon;
	}



	console.log("El alcohol más barato fue del fabricante " + fabricanteAlcohol + " y la cantidad de unidades fue de " + cantidadUnidadesAlcohol + " unidades.");
	console.log("El tipo con mayor unidades fue " + mayorTipo + " y su promedio de compra fue de " + promedioCompra + " unidades.")
	console.log("En total hay " + sumaUnidadesJabon + " unidades de jabon.")


}



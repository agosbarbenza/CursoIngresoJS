function mostrar() {

    let alumnos = 5;
    let suma = 0;
    let sexo;
    let sexoNotaBaja;
    let bandera = 0;
    let contador = 0;
    

    for (let i = 0; i < alumnos; i++) {

        let nota = parseInt(prompt("Ingrese una nota"));
        while (!(nota >= 0 && nota <= 10)) {
            alert("No es una nota valida");
            nota = parseInt(prompt("Ingrese una nota"));
        }
        suma = suma+nota;

        sexo = prompt("Ingrese genero 'm' o 'f'");
        while(!(sexo == "m"|| sexo == "f")){
            alert("No es un genero válido");
            sexo = prompt("Ingrese genero 'm' o 'f'");
        }

        if(bandera == 0){
            notaMin = nota;
            sexoNotaBaja = sexo;
        }

        bandera = 1;

        if(nota<notaMin){
            notaMin = nota;
            sexoNotaBaja = sexo;
        }
        
        if(sexo == 'm' && nota>=6){
            contador++;
        }
    }

    console.log("El promedio de las notas es "+(suma/alumnos));
    console.log("La nota más baja es "+notaMin+" y corresponde a "+sexoNotaBaja);
    console.log("La cantidad de varones que su nota haya sido mayor o igual a 6 es de "+contador2);
   

}

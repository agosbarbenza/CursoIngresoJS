function mostrar()
{
	var maximo = 10;
	var minimo = 1;
	var nota = Math.round(Math.random()* (maximo-minimo)+minimo);

	if(nota<4){
		alert("La nota es "+nota+", vamos, la proxima se puede");
	}else if(nota == 9 || nota == 10){
		alert("La nota es "+nota+", EXCELENTE");
	}else{
		alert("La nota es "+nota+", APROBADO");
	}
}
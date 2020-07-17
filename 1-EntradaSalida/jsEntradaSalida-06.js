/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	var num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es "+ (num1+num2));
}

/*

Más resumido...

function sumar()
{
	alert("La suma es "+ ((parseInt(document.getElementById("txtIdNumeroUno").value)) + (parseInt(document.getElementById("txtIdNumeroDos").value))));
}*/

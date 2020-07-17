/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var result = numero1 + numero2;
	alert("La suma es "+result);	
}

function restar()
{
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var result = numero1-numero2;
	alert("La resta es " + result);
	
}

function multiplicar()
{ 
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var result = numero1*numero2;
	alert("La multiplicación es "+result);
}

function dividir()
{
	var numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var result = numero1/numero2;
	alert("La división es "+result);
}


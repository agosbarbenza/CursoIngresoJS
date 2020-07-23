/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    var centigrados = ((temperatura - 32)*5/9)

    alert(temperatura+" Fahrenheit son "+centigrados+" grados centígrados");
	
}

function CentigradosFahrenheit () 
{
    var temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    var fahren = ((temperatura* 9/5)+32);

    alert(temperatura+" centígrados son "+fahrenheit+" Fahrenheit");
	
}

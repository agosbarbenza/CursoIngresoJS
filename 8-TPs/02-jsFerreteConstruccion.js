/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.getElementById("txtIdLargo").value);
    var ancho = parseInt(document.getElementById("txtIdAncho").value);
    var perimetro = (largo*2 + ancho*2)*3

    alert("La cantidad de alambre a comprar es: "+ perimetro);

}
function Circulo () 
{
    var radio = parseInt(document.getElementById("txtIdRadio").value);
    var diametro = (radio*2);
    var formula = (3.14*diametro)*3;

    alert("La cantidad de alambre a comprar es: "+parseInt(formula));//no estaba segura si la cantidad a mostrar tenía que ser un entero
	
}
function Materiales () 
{
    var largo = parseInt(document.getElementById("txtIdLargo").value);
    var ancho = parseInt(document.getElementById("txtIdAncho").value);
    var area = largo*ancho;

    var bolsasCemento = area*2;
    var bolsasCal = area*3;

    alert("Para un terreno de "+area+" metros se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de Cal.");
	
}
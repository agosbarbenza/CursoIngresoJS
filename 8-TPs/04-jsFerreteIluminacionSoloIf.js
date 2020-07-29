/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() {
    let qLamp = parseInt(document.getElementById("txtIdCantidad").value);//si o si la cantidad de lamparitas tiene que ser un numero entero.
    let precioUnitario = 35; //conviene guardar el precio unitario en una variable para, en el caso de que aumente o baje, no tener que cambiar el valor uno por uno en el código.
    let precioTotal
    let precioDescuento = document.getElementById("txtIdprecioDescuento");
    let marca = document.getElementById("Marca").value;

    //cantidad de lamparas x precio unitario  = precio total.

    //descuento: precio total - precio total * 0,50 


    if (qLamp >= 6) {
        precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 50) / 100));
        precioDescuento.value = "$" + precioTotal;
    } else if (qLamp == 1 || qLamp == 2) {
        precioTotal = (precioUnitario * qLamp);
        precioDescuento.value = "$" + precioTotal;
    } else if (qLamp == 3) {
        if (marca == "ArgentinaLuz") {
            precioTotal = parseFloat((precioUnitario * qLamp) - ((precioUnitario * qLamp) * 0.15));
            precioDescuento.value = "$" + precioTotal;
        } else if (marca == "FelipeLamparas") {
            precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 0.10)));
            precioDescuento.value = "$" + precioTotal;
        } else {
            precioTotal = parseFloat((precioUnitario * qLamp) - ((precioUnitario * qLamp) * 0.05));
            precioDescuento.value = "$" + precioTotal;
        }
    } else if (qLamp == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 0.25)));
            precioDescuento.value = "$" + precioTotal;
        } else {
            precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 0.20)));
            precioDescuento.value = "$" + precioTotal;
        }
    } else if (qLamp == 5) {
        if (marca == "ArgentinaLuz") {
            precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 0.40)));
            precioDescuento.value = "$" + precioTotal;
        } else {
            precioTotal = parseFloat((precioUnitario * qLamp) - (((precioUnitario * qLamp) * 0.30)));

            precioDescuento.value = "$" + precioTotal;
        }
    }

    if (precioTotal >= 120) {
        let iiBB = (precioTotal * 0.10);
        precioTotal = precioTotal + iiBB;
        precioDescuento.value = precioTotal;
        alert("Usted pagó $" + iiBB + " de IIBB");
    }
}
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
    let qLamp = parseInt(document.getElementById("txtIdCantidad").value);//si o si la cantidad de lamparitas tiene que ser un numero entero.
    let precioUnitario = 35; //conviene guardar el precio unitario en una variable para, en el caso de que aumente o baje, no tener que cambiar el valor uno por uno en el código.
    let precioDescuento = document.getElementById("txtIdprecioDescuento");
    let marca = document.getElementById("Marca").value;

//cantidad de lamparas x precio unitario  = precio total.

//descuento: precio total - precio total * 0,50 

    if (qLamp>=6){
        precioDescuento.value= "$"+parseFloat((precioUnitario*qLamp)-(((precioUnitario*qLamp)*50)/100)); 
    }else{
    switch (qLamp) {
        case 1:
        case 2:
            precioDescuento.value = "$"+(precioUnitario*qLamp);
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
               precioDescuento.value= "$"+parseFloat((precioUnitario*3)-((precioUnitario*3)*0.15));
            }else if(marca == "FelipeLamparas"){
                precioDescuento.value= "$"+parseFloat((precioUnitario*3)-(((precioUnitario*3)*0.10))); 
            }else{
                precioDescuento.value= "$"+parseFloat((precioUnitario*3)-((precioUnitario*3)*0.05));
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                precioDescuento.value= "$"+parseFloat((precioUnitario*4)-(((precioUnitario*4)*0.25))); 
            }else{
                precioDescuento.value= "$"+parseFloat((precioUnitario*4)-(((precioUnitario*4)*0.20))); 
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz"){
                precioDescuento.value= "$"+parseFloat((precioUnitario*5)-(((precioUnitario*5)*0.40))); 
            }else{
                precioDescuento.value= "$"+parseFloat((precioUnitario*5)-(((precioUnitario*5)*0.30)));
            }
            break;
    }
}

}
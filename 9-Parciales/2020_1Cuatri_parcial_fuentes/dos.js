function mostrar() {
  let producto;
  let cantidad;
  let precio;
  let resp;

  let bandera = 0;

  let precioMaxCal;
  let precioMaxArena;
  let precioMaxCemento;

  let total1vueltaCal = 0;
  let total1vueltaArena = 0;
  let total1vueltaCemento = 0;

  let totalXVueltasCal= 0;
  let totalXVueltasCemento = 0;
  let totalXVueltasArena = 0;

  let elMasCaro;


  let acumCemento = 0;
  let acumCal = 0;
  let acumArena = 0;

  let mayorTipoAcum;

  do {

    producto = prompt("Ingrese un producto (cal, arena, cemento)");

    while (producto != "cal" & producto != "arena" & producto != "cemento") {
      alert("Ingrese un producto valido");
      producto = prompt("Ingrese un producto (cal, arena, cemento)");
    }

    cantidad = parseInt(prompt("Ingrese una cantidad"));
    while (cantidad < 1 || isNaN(cantidad)) {
      alert("Ingrese una cantidad valida");
      cantidad = parseInt(prompt("Ingrese una cantidad"));
    }

    precio = parseFloat(prompt("Ingrese un precio"));
    while (precio < 1 || isNaN(precio)) {
      alert("Ingrese un precio valido mayor a 0");
      precio = parseFloat(prompt("Ingrese un precio"));
    }


    switch (producto) {
      case "cal":
        if (bandera == 0) {
          precioMaxCal = precio;
        }
        if (bandera == 1) {
          if (precioMaxCal < precio) {
            precioMaxCal = precio;
          }
        }

        acumCal = acumCal + cantidad;
        total1vueltaCal = precio*cantidad;
        totalXVueltasCal = totalXVueltasCal + total1vueltaCal;

        break;

      case "arena":
        if (bandera == 0) {
          precioMaxArena = precio;
        }
        if (bandera == 1) {
          if (precioMaxArena < precio) {
            precioMaxArena = precio;
          }
        }
        acumArena = acumArena + cantidad;
        total1vueltaArena = precio*cantidad;
        totalXVueltasArena = totalXVueltasArena + total1vueltaArena;

        break;

      case "cemento":
        if (bandera == 0) {
          precioMaxCemento = precio;
        }
        if (bandera == 1) {
          if (precioMaxCemento < precio)
            precioMaxCemento = precio;
        }

        acumCemento = acumCemento + cantidad;
        total1vueltaCemento = precio*cantidad;
        totalXVueltasCemento = totalXVueltasCemento + total1vueltaCemento;
        break;
    }

    if(acumArena>acumCal && acumArena>acumCemento){
      mayorTipoAcum = "arena";
    }else if(acumCal>acumArena && acumCal>acumCemento){
      mayorTipoAcum = "cal";
    }else if(acumCemento>acumCal && acumCemento>acumArena){
      mayorTipoAcum = "cemento";
    }

    if(totalXVueltasArena>totalXVueltasCal && totalXVueltasArena>totalXVueltasCemento){
      elMasCaro = "arena";
    }else if(totalXVueltasCal>totalXVueltasArena && totalXVueltasCal>totalXVueltasCemento){
      elMasCaro = "cal";
    }else if(totalXVueltasCemento>totalXVueltasArena && totalXVueltasCemento>totalXVueltasCal){
      elMasCaro = "cemento";
    }


    resp = prompt("Desear ingresar otro producto?");
    bandera = 1;

  } while (resp == "si");

  let totalBolsas = acumArena + acumCal + acumCemento;
  let precioTotalBruto = totalXVueltasArena+totalXVueltasCal+totalXVueltasCemento;

  let precioDescuento;

 

  console.log("Se acumularon " + acumCemento + " bolsas de cemento");
  console.log("Se acumularon " + acumCal + " bolsas de cal");
  console.log("Se acumularon " + acumArena + " bolsas de arena");
  console.log("El tipo con más bolsas acumuladas es "+mayorTipoAcum);
  console.log("El mas caro fue "+elMasCaro);
  console.log("El precio total bruto es $"+precioTotalBruto);


  if(totalBolsas>=30){
    precioDescuento = precioTotalBruto*0.25;
    console.log("Al haber comprado 30 bolsas o más, su precio con descuento fue de $"+precioDescuento)
  }
  else if(totalBolsas>=10 && totalBolsas<30){
    precioDescuento = precioTotalBruto* 0.15;
    console.log("Al haber comprado 10 bolsas o más, su precio con descuento fue de $"+precioDescuento)
    
  }

}
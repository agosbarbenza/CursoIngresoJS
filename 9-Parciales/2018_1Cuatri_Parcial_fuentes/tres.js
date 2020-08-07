function mostrar() {

    let precio = prompt("Ingrese el precio");
    while (isNaN(precio)) {
        alert("Formato de precio invalido");
        precio = prompt("Ingrese el precio");
    }

    let porcentaje = prompt("Ingrese un porcentaje (sin el %)");

    while (isNaN(porcentaje)) {
        alert("Formato de porcentaje invalido")
        porcentaje = prompt("Ingrese un porcentaje (sin el %)");
    }

    let precioFinal = parseFloat(precio) - parseFloat((precio * porcentaje) / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;

}

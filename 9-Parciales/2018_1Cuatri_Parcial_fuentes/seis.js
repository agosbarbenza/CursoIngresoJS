function mostrar() {
    let hora = parseInt(prompt("Ingrese una hora"));

    switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");

            break;
            
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 19:
            alert("Es de tarde");

            break;


        default:
            if ((hora<1 || hora>24) || isNaN(hora)) {
                alert("No es una hora válida")
            }else{
                alert("Es de noche");
                if (hora >= 1 && hora <= 5) {
                    alert("A dormir");
                }
            }
            break;
    }
}

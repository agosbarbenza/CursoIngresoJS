function mostrar()
{
    let planeta = prompt("Ingrese un planeta").toLowerCase();

    switch (planeta) {

        case "tierra":
            alert("Acá vivimos");
            
            break;

        case "mercurio":
        case "venus":
        case "marte":
            alert("Acá hace más calor")
            break;

        case "jupiter":
        case "saturno":
        case "pluton":
        case "urano":
        case "neptuno":
            alert("acá hace más frio");
            break;

        default:
            alert("No es un planeta válido")
            break;
    }
}

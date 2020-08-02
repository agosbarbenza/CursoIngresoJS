/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;

function comenzar() {
    eleccionMaquina = Math.floor(Math.random() * (4 - 1)) + 1; //del 1 al 3;
    console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN

function piedra() {
   switch (eleccionMaquina) {
       case 1:
           alert("Empate");
           
           break;
        case 2:
            alert("Perdió :c");
            break;
       default:
           alert("Ganó!")
           break;
   }
   eleccionMaquina = Math.floor(Math.random() * (4 - 1)) + 1; //del 1 al 3; //maquina resetea el numero automaticamente para volver a jugar sin necesidad de refrescar la página
   console.log(eleccionMaquina); 


}//FIN DE LA FUNCIÓN
function papel() {
    switch (eleccionMaquina) {
    case 1:
        alert("Ganó!");
        
        break;
     case 2:
         alert("Empate");
         break;
    default:
        alert("Perdió :c");
        break;
    }
    eleccionMaquina = Math.floor(Math.random() * (4 - 1)) + 1; //del 1 al 3;//maquina resetea el numero automaticamente para volver a jugar sin necesidad de refrescar la página
    console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function tijera() {
    switch (eleccionMaquina) {
        case 1:
            alert("Perdió :c");
            
            break;
         case 2:
             alert("Ganó!");
             break;
        default:
            alert("Empate");
            break;
        }
        eleccionMaquina = Math.floor(Math.random() * (4 - 1)) + 1; //del 1 al 3;//maquina resetea el numero automaticamente para volver a jugar sin necesidad de refrescar la página
        console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
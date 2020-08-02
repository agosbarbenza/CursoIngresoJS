/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;

function comenzar() {
  numeroSecreto = Math.floor(Math.random() * 100);
  console.log(numeroSecreto)
  //Genero el número RANDOM entre 1 y 100

}

function verificar() {
  let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;
  if (numeroIngresado == numeroSecreto) {
    alert("GANASTE! y en solo " + contadorIntentos + " intentos.");
    document.getElementById("txtIdNumero").value = numeroIngresado;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    contadorIntentos = 0; //reinicia el contador de intentos para volver a jugar    
  } else {
    if(numeroIngresado>numeroSecreto){
      alert("Te pasaste...");
    }else{
      alert("Falta...");
    }
  }
}
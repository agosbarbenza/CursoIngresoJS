function mostrar()
{
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2= parseInt(prompt("Ingrese otro numero"));
    let suma = num1+num2;

    if (num1 == num2){
        console.log(num1+""+num2);
    }
    
    if(num1>num2){
        console.log(num1-num2);

    }else if(num1<num2){
        console.log(suma);
        if(suma>10){
            alert("La suma es "+suma+" y superó los 10");
        }

    }
}

//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1 = parseInt(prompt ("ingrese un numero"));
    var numero2 = parseInt(prompt ("ingrese el segundo numero"));

    var resultado;
    if (numero1 == numero2 ){
        resultado = numero1 * numero2;
    }
    else if (numero1 > numero2){
        resultado = numero1 - numero2;
    } else {
        resultado = numero1 + numero2;
    }
    document.write (resultado);
		
}


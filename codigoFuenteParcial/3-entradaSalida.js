//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1 = document.getElementById("ancho").value;
    var numero2 = document.getElementById("largo").value;
    var resultado;
    resultado = numero1*2 +numero2*2;
   
    alert (resultado);
}


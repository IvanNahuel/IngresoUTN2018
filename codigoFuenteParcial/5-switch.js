//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes = prompt ("ingrese un mes del año");

    switch (mes){
        case "Enero":
        case "Febrero":
        alert ("Veranito!!!!");
        break;
        default:
        alert ("extraño enero y febrero!!!");
        break;
    }
    

}

